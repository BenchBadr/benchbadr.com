import Md from '../../markdown.js';
import './ai.css';
import React, {useState, useEffect} from 'react';
import { usePollinationsChat } from '@pollinations/react';


const Ai = ({markdown}) => {
    const [prompt, setPrompt] = useState('');
    // const { sendUserMessage, messages } = usePollinationsChat([
    //     { role: "system", content: "You are a helpful assistant" }
    // ], { 
    //     seed: 42, 
    //     jsonMode: false,
    //     model: 'mistral'
    // });

    const handleChange = (event) => {
        setPrompt(event.target.value);
    };

    const sendMsg = () => {
        // sendUserMessage(prompt);
        setPrompt('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (prompt.trim().length) {
                sendMsg();
            }
        }
    };


    return (
        <div className='ai-chat'>

            <div className='prompt-area'>

                {/* {messages.map((msg, index) => (
                <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
                ))} */}

                <div style={{position:'relative',height:'100%',width:'100%'}}>
                    <textarea placeholder={`Ask a question about this article...`} 
                        className='scroll-fix'
                        onChange={handleChange}
                        value={prompt}
                        onKeyDown={handleKeyDown}
                    />
                    <div className={`send-btn ${prompt.length ? 'active' : ''}`}
                        onClick={sendMsg}
                    >arrow_upward</div>
                </div>
            </div>
        </div>
    )
}

const UserMsg = ({prompt}) => {
    return (
        <div className='user-msg'>
            {prompt}
        </div>
    )
}


const AiMsg = ({answer}) => {
    return (
        <div className='ai-msg'>
            <Md>{answer}</Md>
        </div>
    )
}


export default Ai;