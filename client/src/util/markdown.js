import React, { useContext, useRef, useEffect, useState, useMemo, useCallback } from 'react';
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
    const titleCountRef = useRef(0); 

    const toggleOpen = useCallback(() => {
        setIsRightOpen(!isRightOpen)
    }, [isRightOpen, setIsRightOpen]);

    // Memoize plugins
    const remarkPlugins = useMemo(() => [
        remarkMath, 
        remarkGfm, 
        remarkBreaks, 
        remarkCallout, 
        [remarkFootnotes, { inlineNotes: true }]
    ], []);


    const rehypePlugins = useMemo(() => [
        [rehypeMathjax, {
            tex: {
                inlineMath: [['$', '$']],
                displayMath: [['$$', '$$']],
                processEscapes: true,
                processEnvironments: true
            },
            options: {
                skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
                ignoreHtmlClass: 'tex2jax_ignore',
                processHtmlClass: 'tex2jax_process'
            },
            startup: {
                typeset: false
            }
        }]
    ], []);

    // Memoize the intro processing
    const { processedTextContent, processedLang } = useMemo(() => {
        if (article) {
            function getIntro(text) {
                // 2. Metadata (extracted before ===) such as lang, desc, date...
                const index = text.indexOf('\n===\n');
                const textContent = index !== -1 ? text.substring(index + 5) : text;
                const introText = index !== -1 ? text.substring(0, index).trim() : text.trim();
                
                // 2.1 Extract language from intro
                const matchLang = introText.match(/lang:\s*([^:\n]*)/)?.[1];
                
                return { textContent, lang: matchLang };
            }

            const result = getIntro(children);
            return {
                processedTextContent: result.textContent,
                processedLang: result.lang
            };
        } else {
            return children
        }
    }, [children]);

    // Update state when processed content changes
    useEffect(() => {
        setTextContent(processedTextContent);
        if (processedLang) {
            setLang(processedLang);
        }

        // Do all the resets
        extRefsRef.current.clear();
        setExternalRefs([]);
    }, [processedTextContent, processedLang]);

    // Cleanup effect to prevent memory leaks
    useEffect(() => {
        return () => {
            extRefsRef.current.clear();
        };
    }, []);

    // Use useEffect to collect external refs after rendering - debounced to prevent loops
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const currentRefs = Array.from(extRefsRef.current);
            if (currentRefs.length !== externalRefs.length || 
                !currentRefs.every(ref => externalRefs.includes(ref))) {
                setExternalRefs(currentRefs);
            }
        }, 0);
        
        return () => clearTimeout(timeoutId);
    }, [externalRefs]);

    // Reset title count when content changes
    useEffect(() => {
        titleCountRef.current = 0;
    }, [textContent]);

    // Memoize the markdown components to prevent recreation
    const markdownComponents = useMemo(() => {
        return {
            h1: ({ children }) => {
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h1 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h1>
                );
            },

            h2: ({ children, id }) => {
                if (id === 'footnote-label') {
                    return (
                        <h2 className="cop-title" id={id}>
                            {{ en: 'Footnotes', fr: 'Notes et références' }[lang]}
                        </h2>
                    );
                }
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h2 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h2>
                );
            },

            h3: ({ children }) => {
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h3 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h3>
                );
            },

            h4: ({ children }) => {
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h4 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h4>
                );
            },

            h5: ({ children }) => {
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h5 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h5>
                );
            },

            h6: ({ children }) => {
                const index = Math.floor(titleCountRef.current++ / 2);
                return (
                    <h6 className="cop-title" id={`title-${index}`}>
                        {children}
                    </h6>
                );
            },

            code: ({ node, inline, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                const codeText = Array.isArray(children) ? children.join('') : children;

                return match ? (
                    <CodeBlock language={match[1]} code={codeText} />
                ) : (
                    <InlineCode code={codeText} {...props} />
                );
            },

            details: ({ children, ...props }) => <Details {...props}>{children}</Details>,

            a: ({ children, href, ...props }) => {
                if (href) {
                    const isExternal =
                        /^https?:\/\//.test(href) ||
                        (/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\./.test(href) && !href.startsWith('/'));

                    if (isExternal && !href.includes(window.location.hostname)) {
                        const fullHref = /^https?:\/\//.test(href) ? href : `https://${href}`;
                        extRefsRef.current.add(fullHref);

                        return (
                            <a
                                {...props}
                                href={fullHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                {children}
                            </a>
                        );
                    }
                }
                return <a {...props} href={href}>{children}</a>;
            },

            sup: ({ children }) => {
                return <Tooltip children={children} foot={foot} />;
            },

            section: ({ children }) => {
                if (!article) {
                    return null;
                }

                const filteredChildren =
                    children.length ? children.filter((child) => child.key === 'ol-0')[0].props.children : null;
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
        };
    }, [lang, foot, article, textContent]); // Add textContent to ensure component resets with new content

    // Memoize the main markdown component to prevent re-rendering when only sidebar state changes
    const markdownContent = useMemo(() => {
        return (
            <ReactMarkdown
                remarkPlugins={remarkPlugins}
                rehypePlugins={rehypePlugins}
                components={markdownComponents}
            >
                {textContent}
            </ReactMarkdown>
        )
    }, [textContent, remarkPlugins, rehypePlugins, markdownComponents]);


    // Memoize sidebar components to prevent re-rendering
    const sidebarComponents = useMemo(() => ({
        extRefs: article && externalRefs.length > 0 ? <ExtRefs data={externalRefs} language={lang}/> : null,
        burger: article ? (
            <div className={`burger right ${isRightOpen ? 'open' : ''}`} onClick={toggleOpen}>
                <span/>
                <span/>
            </div>
        ) : null,
        sidebar: article ? <SidebarRight markdown={children}/> : null
    }), [article, externalRefs, lang, isRightOpen, toggleOpen]);

    return (
        <div className='markdown-box'>
            {markdownContent}

            {/* The optional external urls section */}
            {sidebarComponents.extRefs}
            
            {/* Right button for right-bar */}
            {sidebarComponents.burger}
            {sidebarComponents.sidebar}
        </div>
    )
};

export default React.memo(Md);