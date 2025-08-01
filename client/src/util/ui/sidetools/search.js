import React, { useState, useEffect, useMemo } from 'react';
import './search.css';

const Search = ({markdown}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [focus, setFocus] = useState(null);

    useEffect(() => {
        setFocus(null)

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
    }, [searchTerm, markdown]);

    return (
        <div className='search-tool'>
            <div className='search-input-container'>

                <div className='search-icon'>search</div>

                <input
                    className="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                />
            </div>
            
            {searchResults.length > 0 && (
                <div>
                    <div className="results-header">
                        <a>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</a>
                        <div className='results-arr-cont'>
                            <a className='results-arr'>keyboard_arrow_up</a>
                            <a className='results-arr'>keyboard_arrow_down</a>
                        </div>
                    </div>
                    <div className="search-results scroll-fix">
                        {searchResults.map((result, index) => (
                            <div key={index} className="search-result-item">
                                <div className="result-content">{result.content}</div>
                                <div className="line-number">Line {result.line}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}
export default Search;