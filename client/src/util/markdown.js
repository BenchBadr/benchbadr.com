import React, { useMemo, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import remarkBreaks from 'remark-breaks';
import remarkCallout from "@r4ai/remark-callout";
import remarkFootnotes from 'remark-footnotes';
import { CodeBlock, InlineCode } from './components/code';

const Md = ({ children }) => (
    <div className='markdown-box'>

        <ReactMarkdown
            remarkPlugins={[remarkMath, remarkBreaks, remarkCallout, [remarkFootnotes, { inlineNotes: true }]]}
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
            {children}
        </ReactMarkdown>
    </div>
);

export default Md;