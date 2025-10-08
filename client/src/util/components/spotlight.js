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

    const [focused, setFocused] = useState(-1);

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


    const focusUp = () => {
        setFocused(prev => {
            if (results.length === 0) return -1;
            if (prev <= 0) return results.length - 1;
            return prev - 1;
        });
    };

    const focusDown = () => {
        setFocused(prev => {
            if (results.length === 0) return -1;
            if (prev === -1 || prev >= results.length - 1) return 0;
            return prev + 1;
        });
    };

    useEffect(() => {
        if (focused >= 0 && results.length > 0) {
            const el = document.querySelector(`.spotlight-container div.spotlight-results a.active`);
            if (el) {
                el.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [focused, results]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusUp();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusDown();
        }

        // Enter => Open
        if (e.key === "Enter") {
            if (e.ctrlKey || e.metaKey) {
                window.open('/' + results[focused], '_blank');
            } else {
                window.location.href = '/' + results[focused]
            }
        }
    };

    

    

    return (
         <div className={`spotlight-container`}>
            <div className="spotlight-search">
                {/*1. Search icon*/}
                <a className="icon">search</a>

                {/*2. Input box*/}
                <input placeholder="Find articles..." 
                ref={inputRef}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />

                {/*3. Cancel btn*/}
                {toggle && <a className="icon" 
                style={{cursor:'pointer'}}
                onClick={toggle}
                >cancel</a>}
            </div>

            {(value.length !== 0 && results.length !== 0) && <>
                <div className={`separator ${!autoFocus ? 'stable' : ''}`}/>
                <div className={`spotlight-results ${!autoFocus ? 'stable' : ''}`}>
                    {results.map((result, resultIdx) => {

                        let searchTerms = value.split('/');
                        const partsIdx = [];
                        let prevIdx = 0;

                        for (const [idx, searchTerm] of searchTerms.entries()){
                            const index = result.toLowerCase().indexOf(searchTerm.toLowerCase(), prevIdx);

                            // should never trigger but... just in case
                            if (index === -1) {
                                continue
                            }

                            partsIdx.push(result.slice(prevIdx, index));
                            prevIdx = index + searchTerm.length;

                            // fix cases by "grapping" from result
                            searchTerms[idx] = result.slice(index, index + searchTerms[idx].length)
                        }

                        if (searchTerms[searchTerms.length - 1] === "") {
                            searchTerms.length--;
                        }

                        return (
                            <a key={result + '-' + resultIdx} href={'/' + result} className={focused === resultIdx ? 'active' : ''}>
                                {partsIdx.map((content, index) => (
                                    <div key={index} style={{display:'inline-block'}}>
                                        <span>{content}</span>
                                        <span>{searchTerms[index] && <b>{searchTerms[index]}</b>}</span>
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
    console.log(criterias, prefix)

    // DFS - Parcours en profondeur

    if (prefix.length && !manifestData['/' + prefix[prefix.length-1]]) {
        return
    }


    const items = !prefix.length ? Object.keys(manifestData).filter((item) => !manifestData[item][1].child) : manifestData['/' + prefix[prefix.length-1]][0];


    for (const item of items) {

        // Avoid unprefixed duplicates to results
        if (!prefix.length && manifestData[item][1].child) {
            continue
        }

        // in:folder - prevents unnecessary iterations

        // This was temporarily removed as it led to "algebre II" to disappear when typing "algebre" without restrictive '/' suffix

        // if (criterias.length && items.includes('/' + criterias[0]) && item !== '/' + criterias[0]) {
        //     continue
        // }


        // if folder
        if (item[0] === '/') {

            // handle if folder found
            const foundFolder = item === '/' + criterias[0];

            // if only one crit and not found - means it's a prefix
            const prefixFold =  criterias.length >= 1 && checkMatch(item.slice(1), criterias[0]);
            dfs(foundFolder || prefixFold ? criterias.slice(1) : criterias, results, [...prefix, item.substring(1)])
        } else {
            if (!criterias.length || (!items.includes(criterias[0]) && criterias.length === 1 && checkMatch(item, criterias[0]))) {
                results.push(prefix.join('/')+'/'+item)
            }
        }
    }
}