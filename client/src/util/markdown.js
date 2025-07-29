import React, { useContext, useRef, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import remarkBreaks from 'remark-breaks';
import remarkCallout from "@r4ai/remark-callout";
import remarkFootnotes from 'remark-footnotes';
import { CodeBlock, InlineCode } from './components/code';
import remarkGfm from 'remark-gfm';
import Details from './components/details';
import { ExtRefs, Tooltip } from './components/footRefs';
import { SidebarContext } from '../ctx/SidebarContext';
import SidebarRight from './ui/sidebaright';


const Md = ({ children, article=false }) => {
    const [lang, setLang] = useState('en');
    const [textContent, setTextContent] = useState(null);
    const [externalRefs, setExternalRefs] = useState([]);
    const [foot, setFoot] = useState([]);

    const extRefsRef = useRef(new Set());
    const { isRightOpen, setIsRightOpen } = useContext(SidebarContext);

    const toggleOpen = () => {
        setIsRightOpen(!isRightOpen)
    }

    useEffect(() => {
        // Reset external refs for new content
        extRefsRef.current.clear();
        setExternalRefs([]);
        
        // 1. Analyze intro
        const baseText = getIntro(children);

        // 1.1 Language
        const matchLang = baseText.match(/lang:\s*([^:\n]*)/)?.[1];
        if (matchLang) {
            setLang(matchLang)
        }

    }, [children])

    // Use useEffect to collect external refs after rendering
    useEffect(() => {
        // After rendering, check if we have new external refs
        const currentRefs = Array.from(extRefsRef.current);
        if (currentRefs.length !== externalRefs.length || 
            !currentRefs.every(ref => externalRefs.includes(ref))) {
            setExternalRefs(currentRefs);
        }
    });

    function getIntro(text) {
        const index = text.indexOf('\n===\n');
        setTextContent(index !== -1 ? text.substring(index + 5) : text)
        return index !== -1 ? text.substring(0, index).trim() : text.trim();
    }


    return (
        <div className='markdown-box'>

            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm, remarkBreaks, remarkCallout, [remarkFootnotes, { inlineNotes: true }]]}
                rehypePlugins={[rehypeMathjax]}
                components={{
                    h1: ({children}) => (
                        <h1 className='cop-title'>{children}</h1>
                    ),

                    h2: ({children, id}) => {

                        if (id === 'footnote-label') {
                            return (
                                <h2 className='cop-title' id={id}>{{'en':'Footnotes', 'fr':'Notes et références'}[lang]}</h2>
                            )
                        }
                        return (
                            <h2 className='cop-title' id={id}>{children}</h2>
                        )
                    },

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
                    },

                    details:({children, ...props}) => <Details {...props}>{children}</Details>,

                    a: ({children, href, ...props}) => {
                        if (href) {
                            const isExternal = /^https?:\/\//.test(href) || 
                                             (/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\./.test(href) && !href.startsWith('/'));
                            
                            if (isExternal && !href.includes(window.location.hostname)) {
                                const fullHref = /^https?:\/\//.test(href) ? href : `https://${href}`;
                                extRefsRef.current.add(fullHref);
                                
                                return (
                                    <a {...props} href={fullHref} target="_blank" rel="noopener noreferrer" className='link'>{children}</a>
                                );
                            }
                        }
                        return (
                            <a {...props} href={href}>{children}</a>
                        )
                    },


                    sup: ({ children }) => {
                        return <Tooltip children={children} foot={foot} />;
                    },

                    section: ({ children }) => {

                        if (!article) {
                            return null
                        }

                        const filteredChildren =
                        children.length ? children.filter(child => child.key === 'ol-0')[0].props.children : null;
                        filteredChildren &&
                        filteredChildren.map((child, index) => {
                            if (child !== '\n') {
                            const temp = foot;
                            try {
                                temp[(index - 1) / 2] = child.props.children[1].props.children.slice(0, -1);
                                setFoot(temp);
                            } catch (error) {
                                console.log('empty footnote');
                            }
                            }
                        });
                        return <div className="footnotes">{children}</div>;
                    },


                }}
            >
                {textContent}
            </ReactMarkdown>


            {/* The optional external urls section */}

            {article && externalRefs.length > 0 && <ExtRefs data={externalRefs} language={lang}/>}
            
            {/* Right button for right-bar */}
            {article && 
            <div className={`burger right ${isRightOpen ? 'open' : ''}`} onClick={toggleOpen}>
                <span/>
                <span/>
            </div>}
            {article && <SidebarRight/>}
        </div>
    )
};

export default Md;