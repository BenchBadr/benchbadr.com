import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './styles/toc.css';
import removeMd from 'remove-markdown';

const Toc = ({ markdown }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [openSec, setOpenSec] = useState(false);

    // Parse markdown to extract headings and create nested tree
    const tocTree = useMemo(() => {
        if (!markdown) return [];

        const lines = markdown.split('\n');
        const headings = [];
        let inCodeBlock = null; // null, '```', or '~~~'
        // the delimiter works here as the boolean and disabled if delimiter is found again
        // note : we can insert tilde based blockcodes within a parent blockcode and reciprocally
        // as long as delimiter is not the same
        let titleCount = 0;

        for (const line of lines) {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith('```')) {
                inCodeBlock = inCodeBlock === '```' ? null : '```';
                continue;
            }
            if (trimmedLine.startsWith('~~~')) {
                inCodeBlock = inCodeBlock === '~~~' ? null : '~~~';
                continue;
            }

            if (inCodeBlock) continue;

            const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
            if (headingMatch) {
                const level = headingMatch[1].length;
                const text = headingMatch[2].trim();
                const id = `title-${titleCount}`;
                
                headings.push({
                    level,
                    text,
                    id,
                    children: []
                });
                
                titleCount++;
            }

        }

        // Create nested structure
        const createNestedStructure = (headings) => {
            const root = [];
            const stack = [];

            for (const heading of headings) {
                while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
                    stack.pop();
                }

                if (stack.length === 0) {
                    root.push(heading);
                } else {
                    stack[stack.length - 1].children.push(heading);
                }

                stack.push(heading);
            }

            return root;
        };

        return createNestedStructure(headings);
    }, [markdown]);

    // Scroll to section when clicked
    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(id);
            if ('vibrate' in navigator) {
                navigator.vibrate(50)
            }
        }
    }, []);

    // Auto-highlight current section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const headingElements = document.querySelectorAll('[id^="title-"]');
            const tocLink = document.querySelector('.toc-link');
            const offset = tocLink ? tocLink.offsetHeight : 50;
            const scrollPosition = window.scrollY + offset;

            let currentSection = null;
            
            for (const element of headingElements) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                
                if (elementTop <= scrollPosition) {
                    currentSection = element.id;
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);


    // Render nested TOC items
    const renderTocItems = useCallback((items, depth = 0) => {
        return items.map((item) => (
            <div key={item.id} className={`toc-item depth-${depth}`}>
                <div
                    className={`toc-link ${activeSection === item.id || !activeSection ? 'open' : ''} ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                >
                   <a>{removeMd(item.text)}</a>
                </div>
                {item.children.length > 0 && (
                    <div className="toc-children">
                        {renderTocItems(item.children, depth + 1)}
                    </div>
                )}
            </div>
        ));
    }, [activeSection, scrollToSection]);

    if (tocTree.length === 0) {
        return (
            <div className="toc-container scroll-fix">
                <div className="toc-empty">No headings found</div>
            </div>
        );
    }

    return (
        <div className="toc-container scroll-fix">
                {renderTocItems(tocTree)}
        </div>
    );
};

export default Toc;