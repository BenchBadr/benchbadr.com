import { useRef, useEffect } from "react";
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
    }, [toggle]);


    

    return (
         <div className="spotlight-container">
            <div className="spotlight-search">
                <a className="icon">search</a>
                <input placeholder="Find articles..." ref={inputRef}/>
                {toggle && <a className="icon" 
                style={{cursor:'pointer'}}
                onClick={toggle}
                >cancel</a>}
            </div>

            {false && <>
                <div className="separator"/>
                <div className="spotlight-results">
                    <a>test</a>
                </div>
            </>}

        </div>
    )
}