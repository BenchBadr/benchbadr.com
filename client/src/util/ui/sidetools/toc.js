import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './toc.css';

const Toc = ({ markdown }) => {
    const [activeSection, setActiveSection] = useState(null);

    // Parse markdown to extract headings and create nested tree
    const tocTree = useMemo(() => {
        if (!markdown) return [];

        const lines = markdown.split('\n');
        const headings = [];
        let inCodeBlock = null; // null, '```', or '~~~'
        let titleCount = 0;

        for (const line of lines) {
            const trimmedLine = line.trim();

            // Check for codeblock delimiters
            if (trimmedLine.startsWith('```')) {
                inCodeBlock = inCodeBlock === '```' ? null : '```';
                continue;
            }
            if (trimmedLine.startsWith('~~~')) {
                inCodeBlock = inCodeBlock === '~~~' ? null : '~~~';
                continue;
            }

            // Skip if we're inside a codeblock
            if (inCodeBlock) continue;

            // Check for headings (# ## ### etc.)
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
                // Find the appropriate parent level
                while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
                    stack.pop();
                }

                if (stack.length === 0) {
                    // Top level heading
                    root.push(heading);
                } else {
                    // Child heading
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
        }
    }, []);

    // Auto-highlight current section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const headingElements = document.querySelectorAll('[id^="title-"]');
            const scrollPosition = window.scrollY + 100; // Offset for better UX

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
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Render nested TOC items
    const renderTocItems = useCallback((items, depth = 0) => {
        return items.map((item) => (
            <div key={item.id} className={`toc-item depth-${depth}`}>
                <div
                    className={`toc-link ${activeSection === item.id ? 'active' : ''} ${!item.children.length ? 'root' : ''}`}
                    style={{ paddingLeft: `${depth * 16}px` }}
                >
                   <a onClick={() => scrollToSection(item.id)}>{item.text}</a>
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
            <div className="toc-container">
                <div className="toc-empty">No headings found</div>
            </div>
        );
    }

    return (
        <div className="toc-container">
                {renderTocItems(tocTree)}
        </div>
    );
};

export default Toc;