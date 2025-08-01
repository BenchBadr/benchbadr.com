import React, { useState, useEffect, useMemo } from 'react';
import './search.css';

const Search = ({markdown}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='.search-tool'>
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
        </div>
    )

}
export default Search;