import './styles/folders.css';
import {useContext, useState} from 'react';
import { useEffect, useRef } from 'react';
import { SidebarContext } from '../../../ctx/SidebarContext';

const Folders = ({data}) => {

    if (!data || typeof data !== 'object') {
        return <div className='spinner'/>;
    }

    // list that is [1:] progressively to see if group active
    const currentActive = decodeURI(window.location.pathname).split('/').slice(2)
    if (currentActive[currentActive.length - 1] === "") {
        currentActive.length--
    }

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
                    color={value[1].color}
                    openDefault={true} // Comment this to make default closed
                    children={<FoldersChild 
                        color={value[1].color}
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

const FoldersChild = ({title, data, stack, listActive, color = undefined}) => {

    return (
        <>
        {data[title][0].map((item, index) => {
            if (item[0] === '/') {
                return <Accordion 
                title={item.substring(1)} 
                color={data[item][1].color}
                listActive={listActive.slice(1)}
                children={<FoldersChild title={item} 
                data={data} stack={stack + item}
                listActive={listActive.slice(1)}
                color={data[item][1].color || color}
                />}/>
            } else {
                return <File 
                    title={item} 
                    stack={stack}
                    nextPrev={[
                        index > 0 && data[title][0][index-1],
                        index < (data[title][0].length - 1) && data[title][0][index+1]
                    ]}
                    currentActive={listActive.length === 2 && (listActive[1] === item)}
                    color={data[title][1].color || color}
                />
            }
        })}
        </>
    )
}

const Accordion = ({title, children, openDefault, listActive, color}) => {
    const [open, setOpen] = useState(openDefault || (listActive.length && listActive[0] === title));
    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`fold-container ${open ? 'open' : ''}`}>
            <div 
                className={`fold-title ${listActive.length === 1 && listActive[0] === title ? 'active' : ''}`} 
                onClick={toggleOpen}
                style={{'--accent':`var(--${color})`}}
                >
                <a className='foldarrow'>keyboard_arrow_right</a>
                <a>{title}</a>
                {color && <a className='color-tag' style={{'--accent':`var(--${color})`}}/>}
            </div>
            <div className={`fold-child`}>{children}</div>
        </div>
    )

}

const File = ({title, stack, currentActive, nextPrev, color}) => {
    const ref = useRef(null);
    const { setNextPrev } = useContext(SidebarContext);

    useEffect(() => {
        if (currentActive) {
            setNextPrev(nextPrev)
            if (color) {
               document.documentElement.style.setProperty('--accent', `var(--dark-${color})`); 
               document.documentElement.style.setProperty('--accent-light', `var(--${color})`); 
            }
        }

    }, [])

    useEffect(() => {
        if (currentActive && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentActive]);

    return (
        <a href={'/blog' + stack + '/' + title} className={`file-item ${currentActive ? 'active' : ''}`}>{title}</a>
    )
}

export default Folders;