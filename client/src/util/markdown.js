import React, { useMemo, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

const Md = ({ children }) => (
    <div className='markdown-box'>
        <ReactMarkdown
            remarkPlugins={[remarkMath]}
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
                )
            }}
        >
            {children}
        </ReactMarkdown>
    </div>
);

export default Md;