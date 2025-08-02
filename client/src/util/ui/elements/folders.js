import './folders.css';
import {useState} from 'react';

const Folders = ({data}) => {

    if (!data || typeof data !== 'object') {
        return <div className='spinner'/>;
    }

    // list that is [1:] progressively to see if group active
    const currentActive = decodeURI(window.location.pathname).split('/').slice(2)

    // note :
    // stack appends successfully path. maths > algebre...
    // to generate href after

    return (
        <>
        {Object.entries(data).map(([key, value]) => {
            if (!value[1].child) {
                if (key[0] === '/') {
                    return <Accordion title={key.substring(1)} 
                    listActive={currentActive}
                    openDefault={true} // Comment this to make default closed
                    children={<FoldersChild 
                        title={key} 
                        data={data} 
                        stack={key}
                        listActive={currentActive}
                        />}/>
                } else {
                    return <File title={key}/>
                }
            }
        })}
        </>
    )
}

const FoldersChild = ({title, data, stack, listActive}) => {
    return (
        <>
        {data[title][0].map((item) => {
            if (item[0] === '/') {
                return <Accordion 
                title={item.substring(1)} 
                listActive={listActive.slice(1)}
                children={<FoldersChild title={item} 
                data={data} stack={stack + item}
                listActive={listActive.slice(1)}
                />}/>
            } else {
                return <File 
                    title={item} 
                    stack={stack}
                    currentActive={listActive.length === 2 && (listActive[1] === item)}
                />
            }
        })}
        </>
    )
}

const Accordion = ({title, children, openDefault, listActive}) => {
    const [open, setOpen] = useState(openDefault || (listActive.length && listActive[0] === title));

    const toggleOpen = () => setOpen(!open);
    return (
        <div className={`fold-container ${open ? 'open' : ''}`}>
            <div className={`fold-title`} onClick={toggleOpen}>
                <a className='foldarrow'>keyboard_arrow_right</a>
                <a>{title}</a>
            </div>
            <div className={`fold-child`}>{children}</div>
        </div>
    )

}

const File = ({title, stack, currentActive}) => {

    return (
        <a href={'/blog' + stack + '/' + title} className={`file-item ${currentActive ? 'active' : ''}`}>{title}</a>
    )
}

export default Folders;