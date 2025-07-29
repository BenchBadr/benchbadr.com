import React, { useState, useEffect } from 'react';

const TocItem = ({ item, activeId, onItemClick }) => {
    const isActive = activeId === item.id;
    
    const handleClick = (e) => {
        e.preventDefault();
        onItemClick(item.id);
        const element = document.getElementById(item.id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <li className={`toc-item toc-level-${item.level} ${isActive ? 'active' : ''}`}>
            <a 
                href={`#${item.id}`} 
                onClick={handleClick} 
                className={`toc-link ${isActive ? 'active' : ''}`}
            >
                {item.text}
            </a>
            {item.children && item.children.length > 0 && (
                <ul className="toc-children">
                    {item.children.map((child, index) => (
                        <TocItem 
                            key={`${child.id}-${index}`} 
                            item={child} 
                            activeId={activeId}
                            onItemClick={onItemClick}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};

const Toc = ({ toc }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        if (!toc || toc.length === 0) return;

        // Get all heading elements - flatten the structure properly
        const getAllHeadingIds = (items) => {
            let ids = [];
            items.forEach(item => {
                ids.push(item.id);
                if (item.children && item.children.length > 0) {
                    ids = ids.concat(getAllHeadingIds(item.children));
                }
            });
            return ids;
        };

        const headingIds = getAllHeadingIds(toc);
        const headingElements = headingIds
            .map(id => document.getElementById(id))
            .filter(el => el !== null);

        if (headingElements.length === 0) return;

        // Create intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleHeadings = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visibleHeadings.length > 0) {
                    setActiveId(visibleHeadings[0].target.id);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-20% 0px -35% 0px'
            }
        );

        // Observe all heading elements
        headingElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup
        return () => {
            headingElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, [toc]);

    const handleItemClick = (id) => {
        setActiveId(id);
    };

    if (!toc || toc.length === 0) {
        return (
            <div className="toc-container">
                <h3 className="toc-title">Table of Contents</h3>
                <p className="toc-empty">No headings found</p>
            </div>
        );
    }

    return (
        <div className="toc-container">
            <h3 className="toc-title">Table of Contents</h3>
            <nav className="toc-nav">
                <ul className="toc-list">
                    {toc.map((item, index) => (
                        <TocItem 
                            key={`${item.id}-${index}`} 
                            item={item} 
                            activeId={activeId}
                            onItemClick={handleItemClick}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Toc;