import { Search } from "lucide-react";
import { useRef, useEffect } from "react";

const Spotlight = ({toggle}) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            toggle();
        }
    };

    return (
        <div className="spotlight-overlay" onClick={handleOverlayClick}>
            <SearchBar autoFocus={true}/>
        </div>
    )
}

export default Spotlight;

export const SearchBar = ({autoFocus = false}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current && inputRef.current.focus();
        }
    }, []);
    return (
         <div className="spotlight-container">
            <div className="spotlight-search">
                <Search/>
                <input placeholder="Find articles..." ref={inputRef}/>
            </div>
            <div className="spotlight-results">
                <span>test</span>
            </div>
        </div>
    )
}