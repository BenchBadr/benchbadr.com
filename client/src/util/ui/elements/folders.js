import './styles/folders.css';
import {useContext, useState} from 'react';
import { useEffect, useRef } from 'react';
import { SidebarContext } from '../../../ctx/SidebarContext';
import { manifestData } from '../../../ctx/data/markNifest';

const Folders = () => {

    if (!manifestData || typeof manifestData !== 'object') {
        return <div className='spinner'/>;
    }


    // list that is [1:] progressively to see if group active
    const currentActive = decodeURI(window.location.pathname).split('/').slice(1)
    if (currentActive[currentActive.length - 1] === "") {
        currentActive.length--
    }

    // note :
    // stack appends successfully path. maths > algebre...
    // to generate href after


    return (
        <>
        {Object.entries(manifestData).map(([key, value]) => {
            if (!value[1].child) {
                if (key[0] === '/') {
                    return <Accordion 
                        title={value[1].title ? value[1].title : key.substring(1)} 
                        titleId={key.substring(1)}
                        listActive={currentActive}
                        color={value[1].color}
                        openDefault={true} // This is making it open at level 0
                        children={<FoldersChild 
                            color={value[1].color}
                            title={key} 
                            stack={key}
                            titleId={key.substring(1)}
                            listActive={currentActive}
                        />}/>
                } else {
                    return <File title={key} currentActive={currentActive[0] === key}/>
                }
            }
        })}
        </>
    )
}

const FoldersChild = ({title, titleId, stack, listActive, color = undefined}) => {

    // Returns either accordion(folder childs) or file.3

    // Checks if folder is in active list
    const isActivePropag = (title.substring(1) === listActive[0] || manifestData[title][1].path === listActive[0]);


    return (
        <>
        {manifestData[title][0].map((item, index) => {
            if (item[0] === '/') {

                const newActive = isActivePropag ? listActive.slice(1) : [];

                return <Accordion 

                    title={manifestData[item][1].title || item.substring(1)} 
                    color={manifestData[item][1].color}
                    listActive={newActive}
                    titleId={item.substring(1)}

                    children={<FoldersChild title={item}
                        stack={stack + (manifestData[item][1].path ? '/' + manifestData[item][1].path : item)}
                        listActive={newActive}
                        color={manifestData[item][1].color || color}
                        titleId={item.substring(1)}
                />}/>
            } else {

                return <File 
                    title={item} 
                    stack={stack}
                    nextPrev={[
                        index > 0 && manifestData[title][0][index-1],
                        index < (manifestData[title][0].length - 1) && manifestData[title][0][index+1]
                    ]}

                    currentActive={listActive.length === 2 && (isActivePropag && listActive[1] === item)}

                    color={manifestData[title][1].color || color}
                />
            }
        })}
        </>
    )
}

const Accordion = ({title, titleId, children, openDefault, listActive, color}) => {


    const [open, setOpen] = useState((
        manifestData['/' + titleId]?.length && (
            !manifestData['/' + titleId][1].closed && ( openDefault ||
                listActive.length && 
                    (
                        listActive[0] === titleId  || // Regular case - titleId <=> title
                        ((listActive[0] === manifestData['/' + titleId][1].path)) // Otherwise, use path key
                    )
                )
            )
        )
    );
    const { setCacheColor } = useContext(SidebarContext);

    useEffect(() => {
        setCacheColor(cacheColor => ({
            ...cacheColor,
            [title]:color
        }))
    }, [])

    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`fold-container ${open ? 'open' : ''}`}>
            <div 
                className={`fold-title ${listActive.length === 1 && listActive[0] === title ? 'active' : ''}`} 
                onClick={toggleOpen}
                style={{'--accent':`var(--dark-${color || 'blue'})`,'--accent-light':`var(--${color || 'blue'})`}}
                >
                <a className='foldarrow'>keyboard_arrow_right</a>
                <a>{title}</a>
                {color && <a className='color-tag' style={{'--accent':`var(--dark-${color})`,'--accent-light':`var(--${color})`}}/>}
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
        <a href={ stack + '/' + title} className={`file-item ${currentActive ? 'active' : ''}`}>{title}</a>
    )
}

export default Folders;