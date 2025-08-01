import './folders.css';
import {useState} from 'react';

const Folders = ({data}) => {
    return (
        <>
        {Object.entries(data).map(([key, value]) => {
            if (key[0] === '/') {
                return <Accordion title={key.substring(1)} children={<Folders data={value[0]}/>}/>
            } else {
                return <File title={key}/>
            }
        })}
        </>
    )
}

const Accordion = ({title, children}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className={`folder-title`}>{title}</div>
            <div className={`folder-child`}>{children}</div>
        </div>
    )

}

const File = (title) => {
    return (
        <div className='file-item'>{title}</div>
    )
}

export default Folders;