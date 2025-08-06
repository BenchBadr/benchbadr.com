import { useRef, useEffect, useState } from "react";
import { manifestData } from "../../ctx/data/markNifest";

const Spotlight = ({toggle}) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            toggle();
        }
    };

    return (
        <div className="spotlight-overlay" onClick={handleOverlayClick}>
            <SearchBar autoFocus={true} toggle={toggle}/>
        </div>
    )
}

export default Spotlight;

export const SearchBar = ({autoFocus = false, toggle = null}) => {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current && inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && toggle) {
                toggle();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
        setResults(searchSpot(event.target.value));
    }


    

    

    return (
         <div className="spotlight-container">
            <div className="spotlight-search">
                {/*1. Search icon*/}
                <a className="icon">search</a>

                {/*2. Input box*/}
                <input placeholder="Find articles..." 
                ref={inputRef}
                value={value}
                onChange={handleChange}
                />

                {/*3. Cancel btn*/}
                {toggle && <a className="icon" 
                style={{cursor:'pointer'}}
                onClick={toggle}
                >cancel</a>}
            </div>

            {(value.length !== 0 && results.length !== 0) && <>
                <div className="separator"/>
                <div className="spotlight-results">
                    {results.map((result, resultIdx) => {

                        let searchTerms = value.split('/');
                        const partsIdx = [];
                        let prevIdx = 0;

                        for (const searchTerm of searchTerms){
                            const index = result.toLowerCase().indexOf(searchTerm.toLowerCase(), prevIdx);
                            partsIdx.push(result.slice(prevIdx, index));
                            prevIdx = index + searchTerm.length;
                        }

                        if (searchTerms[searchTerms.length - 1] === "") {
                            searchTerms = searchTerms.slice(0, -1);
                        }

                        return (
                            <a key={result + '-' + resultIdx} href={'/' + result}>
                                {partsIdx.map((content, index) => (
                                    <div key={index} style={{display:'inline-block'}}>
                                        <span>{content}</span>
                                        {searchTerms[index] && <b>{searchTerms[index]}</b>}
                                    </div>
                                ))}
                                <span>{result.slice(prevIdx)}</span>
                            </a>
                        );
                    })}
                </div>
            </>}

        </div>
    )
}


const searchSpot = (query) => {

    const results = [];
    dfs(query.split('/'), results)
    return results
}

const checkMatch = (str1, str2) => {
    if (str2 === "") {
        return true
    }
    return str1.toLowerCase().startsWith(str2.toLowerCase())
}

const dfs = (criterias, results, prefix = []) => {
    // DFS - Parcours en profondeur

    if (prefix.length && !manifestData['/' + prefix[prefix.length-1]]) {
        return
    }


    const items = !prefix.length ? Object.keys(manifestData).filter((item) => !manifestData[item][1].child) : manifestData['/' + prefix[prefix.length-1]][0];

    console.log('at',prefix)
    for (const item of items) {

        // Avoid unprefixed duplicates to results
        if (!prefix.length && manifestData[item][1].child) {
            continue
        }

        // in:folder - prevents unnecessary iterations
        if (criterias.length && items.includes('/' + criterias[0]) && item !== '/' + criterias[0]) {
            console.log('item fail',item)
            continue
        }


        // if folder
        if (item[0] === '/') {

            // handle if folder found
            const foundFolder = item === '/' + criterias[0];

            // if only one crit and not found - means it's a prefix
            const prefixFold =  criterias.length === 1 && checkMatch(item.slice(1), criterias[0]);
            dfs(foundFolder || prefixFold ? criterias.slice(1) : criterias, results, [...prefix, item.substring(1)])
        } else {
            if (!criterias.length || (!items.includes(criterias[0]) && criterias.length === 1 && checkMatch(item, criterias[0]))) {
                results.push(prefix.join('/')+'/'+item)
            }
        }
    }
}