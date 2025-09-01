import { useState } from "react";

const CustomImage = ({...props}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        if (open) {
            if (e.target === e.currentTarget) {
                setOpen(!open);
            }
        } else {
            setOpen(!open)
        }
    };

    return (
        <>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}
            onClick={handleClick}
        >
            <img {...props} style={{
                maxHeight:'50vh', 
                maxWidth:'100%'
            }} 
            loading={`lazy`}/>
        </div>

        {open && <div
            className={'spotlight-overlay img'}
            onClick={handleClick}
        >
            <div className="burger right" onClick={() => setOpen(false)}>
                <a className="material-icons" style={{fontSize:'2em'}}>close</a>
            </div>
            <img {...props} style={{
                maxHeight:'90vh', 
                maxWidth:'100%'
            }} 
            loading={`lazy`}/>
        </div>}
        </>
    )
}

export default CustomImage;