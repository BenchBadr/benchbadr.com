export class ChatInference {
    constructor() {
        this.controller = null;
    }

    async sendMessage(messages, onChunk, onEnd) {
        this.controller = new AbortController();
        const signal = this.controller.signal;

        try {
            const response = await fetch('https://text.pollinations.ai/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'qwen-coder',
                    messages: messages,
                    private: true,
                    seed: 42,
                    stream: true,
                }),
                signal: signal,
            });

            if (!response.ok) {
                throw new Error('Failed to fetch AI response');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            const processText = async () => {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        if (buffer.length > 0) {
                            try {
                                const json = JSON.parse(buffer);
                                const content = json.choices[0].delta?.content || json.choices[0].message?.content || '';
                                if (content) onChunk(content);
                            } catch (e) {
                                // Ignore parsing errors for incomplete final chunks
                            }
                        }
                        break;
                    }

                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split('\n');
                    buffer = lines.pop(); 

                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.substring(6);
                            if (data === '[DONE]') {
                                if (onEnd) onEnd();
                                return;
                            }
                            try {
                                const json = JSON.parse(data);
                                const content = json.choices[0].delta?.content || '';
                                if (content) {
                                    onChunk(content);
                                }
                            } catch (error) {
                                console.error('Error parsing stream data:', error);
                            }
                        }
                    }
                }
            };

            await processText();

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Error:', error);
                if (onEnd) onEnd(error);
            }
        } finally {
            this.controller = null;
            if (onEnd) onEnd();
        }
    }

    stop() {
        if (this.controller) {
            this.controller.abort();
            this.controller = null;
        }
    }
}
