import React, { useState, useEffect, useMemo } from 'react';
import './search.css';

const Search = ({markdown}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    // Simple search in markdown content
    const searchResults = useMemo(() => {
        if (!searchTerm.trim() || !markdown) return [];
        
        const term = searchTerm.toLowerCase();
        const lines = markdown.split('\n');
        const matches = [];
        
        lines.forEach((line, lineIndex) => {
            const lowerLine = line.toLowerCase();
            let index = lowerLine.indexOf(term);
            
            while (index !== -1) {
                const context = line.substring(Math.max(0, index - 20), Math.min(line.length, index + term.length + 20));
                matches.push({
                    lineIndex,
                    context,
                    line: lineIndex + 1
                });
                index = lowerLine.indexOf(term, index + 1);
            }
        });
        
        return matches;
    }, [searchTerm, markdown]);

    useEffect(() => {
        setResults(searchResults);
        setCurrentIndex(searchResults.length > 0 ? 0 : -1);
    }, [searchResults]);

    // Use browser's native find
    const highlightText = (term) => {
        if (!term.trim()) {
            // Clear any existing search
            if (window.find) {
                window.find(''); // Clear search
            }
            return;
        }

        // Use native browser find
        if (window.find) {
            window.find(term, false, false, true, false, true, false);
        }
    };

    useEffect(() => {
        highlightText(searchTerm);
    }, [searchTerm]);

    const navigateResults = (direction) => {
        if (!searchTerm.trim()) return;
        
        if (direction === 'next') {
            window.find(searchTerm, false, false, true, false, true, false);
            setCurrentIndex(prev => prev < results.length - 1 ? prev + 1 : 0);
        } else {
            window.find(searchTerm, false, true, true, false, true, false);
            setCurrentIndex(prev => prev > 0 ? prev - 1 : results.length - 1);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.shiftKey) {
                navigateResults('prev');
            } else {
                navigateResults('next');
            }
        } else if (e.key === 'Escape') {
            setSearchTerm('');
            window.find(''); // Clear native search
        }
    };

    return (
        <div className="search-tool">
            <div className="search-input-container">
                <span className="material-icons search-icon">search</span>
                <input
                    type="text"
                    placeholder="Search in content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="search-input"
                    autoFocus
                />
            </div>
            
            {searchTerm && (
                <div className="search-results">
                    <div className="search-stats">
                        <span>
                            {results.length === 0 
                                ? 'No results' 
                                : `${results.length} results found`
                            }
                        </span>
                    </div>
                    
                    {results.length > 0 && (
                        <div className="search-navigation">
                            <button 
                                onClick={() => navigateResults('prev')}
                                className="nav-btn"
                                title="Previous (Shift+Enter)"
                            >
                                <span className="material-icons">keyboard_arrow_up</span>
                            </button>
                            <button 
                                onClick={() => navigateResults('next')}
                                className="nav-btn"
                                title="Next (Enter)"
                            >
                                <span className="material-icons">keyboard_arrow_down</span>
                            </button>
                        </div>
                    )}
                </div>
            )}
            
            {results.length > 0 && (
                <div className="search-matches">
                    {results.slice(0, 8).map((result, index) => (
                        <div 
                            key={`${result.lineIndex}-${index}`}
                            className="search-match"
                        >
                            <div className="match-context">
                                {result.context}
                            </div>
                            <div className="match-info">
                                Line {result.line}
                            </div>
                        </div>
                    ))}
                    {results.length > 8 && (
                        <div className="more-results">
                            And {results.length - 8} more...
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;