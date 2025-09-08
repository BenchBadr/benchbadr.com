import React, { useState, useEffect, useRef } from 'react';
import './styles/search.css';

const Search = ({markdown, fenl}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [focusedLine, setFocusedLine] = useState(null);
    const resultRefs = useRef([]);

    useEffect(() => {
        setFocusedIndex(-1);

        if (!searchTerm.trim() || !markdown) {
            setSearchResults([]);
            return;
        }

        const lines = markdown.split('\n');
        const results = [];
        
        lines.forEach((line, index) => {
            if (line.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push({
                    line: index + 1,
                    content: line
                });
            }
        });

        setSearchResults(results);
        // clear results on query change
        resultRefs.current = [];

        // clear highlight on query change
        document.querySelectorAll('[data-attr-focus]').forEach(el => {
            el.removeAttribute('data-attr-focus');
        });
    }, [searchTerm, markdown]);

    // auto-scroll to search result on fucs
    useEffect(() => {
        if (focusedIndex >= 0 && resultRefs.current[focusedIndex]) {
            resultRefs.current[focusedIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });

            if (focusedLine !== null) {
                const prevEl = document.querySelector(`[data-line-count~="${focusedLine}"]`);
                if (prevEl) {
                    prevEl.removeAttribute('data-attr-focus');
                }
            }

            setFocusedLine(searchResults[focusedIndex].line - fenl)
        }
    }, [focusedIndex]);


    // on change of selected line,
    // scroll to it and highlight it
    useEffect(() => {
        // highlight
        if (focusedLine !== null) {
            const el = document.querySelector(`[data-line-count~="${focusedLine}"]`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.setAttribute('data-attr-focus', 'true');

            }
        }
    }, [focusedLine])

    const focusDown = () => {
        if (searchResults.length === 0) return;
        const nextIndex = focusedIndex + 1;
        const newIndex = nextIndex >= searchResults.length ? 0 : nextIndex;
        setFocusedIndex(newIndex);
    };

    const focusUp = () => {
        if (searchResults.length === 0) return;
        const prevIndex = focusedIndex - 1;
        const newIndex = prevIndex < 0 ? searchResults.length - 1 : prevIndex;
        setFocusedIndex(newIndex);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                e.preventDefault();
                focusUp();
            } else {
                e.preventDefault();
                focusDown();
            }
        }
    };

    

    return (
        <div className='search-tool'>
            <div className='search-input-container'>

                <div className='search-icon'>search</div>

                <input
                    className="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                />
            </div>
            
            {searchResults.length > 0 && (
                <div>
                    <div className="results-header">
                        <a>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</a>
                        <div className='results-arr-cont'>
                            <a className='results-arr' onClick={focusUp}>keyboard_arrow_up</a>
                            <a className='results-arr' onClick={focusDown}>keyboard_arrow_down</a>
                        </div>
                    </div>
                    <div className="search-results scroll-fix">
                        {searchResults.map((result, index) => (
                            <div 
                                key={index} 
                                ref={el => resultRefs.current[index] = el}
                                className={`search-result-item scroll-fix ${index === focusedIndex ? 'active' : ''}`}
                                onClick={() => setFocusedIndex(index)}
                            >
                                <div className="result-content">{result.content}</div>
                                <div className="line-number">Line {result.line - fenl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}
export default Search;