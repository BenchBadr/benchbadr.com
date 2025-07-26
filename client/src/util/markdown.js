import React, { useMemo, useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import remarkBreaks from 'remark-breaks';
import remarkCallout from "@r4ai/remark-callout";
import remarkFootnotes from 'remark-footnotes';
import { CodeBlock, InlineCode } from './components/code';
import remarkGfm from 'remark-gfm'

const Md = ({ children }) => {
    const [lang, setLang] = useState('en');
    const [textContent, setTextContent] = useState(null);

    useEffect(() => {
        // 1. Analyze intro
        const baseText = getIntro(children);

        // 1.1 Language
        const matchLang = baseText.match(/lang:\s*([^:\n]*)/)[1];
        if (matchLang) {
            console.log('matched',matchLang)
            setLang(matchLang)
        }

    }, [])


    function getIntro(text) {
        const index = text.indexOf('\n---\n');
        setTextContent(index !== -1 ? text.substring(index + 5) : text)
        return index !== -1 ? text.substring(0, index).trim() : text.trim();
    }

    console.log(textContent)

    return (
        <div className='markdown-box'>

            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm, remarkBreaks, remarkCallout, [remarkFootnotes, { inlineNotes: true }]]}
                rehypePlugins={[rehypeMathjax]}
                components={{
                    h1: ({children}) => (
                        <h1 className='cop-title'>{children}</h1>
                    ),

                    h2: ({children}) => (
                        <h2 className='cop-title'>{children}</h2>
                    ),

                    h3: ({children}) => (
                        <h3 className='cop-title'>{children}</h3>
                    ),

                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeText = Array.isArray(children) ? children.join('') : children;

                        return match ? (
                            <CodeBlock language={match[1]} code={codeText} />
                        ) : (
                            <InlineCode code={codeText} {...props} />
                        );
                    }


                }}
            >
                {textContent}
            </ReactMarkdown>
        </div>
    )
};

export default Md;