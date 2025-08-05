import { useState, useEffect, useContext, cache } from "react";
import { fetchMd } from "../../markpage";
import './styles/preview.css';
import removeMd from "remove-markdown";
import { getIntro } from "../../markdown";
import { SidebarContext } from "../../../ctx/SidebarContext";
import { House } from 'lucide-react';

const ElementPreview = ({name, path}) => {
    if (name[0] === '/') {
        return <FolderPreview name={name}/>
    } else {
        return <FilePreview name={name} path={path}/>
    }
}


export const FolderPreview = ({name, path}) => {
    const { cacheColor } = useContext(SidebarContext)

    const color = cacheColor && cacheColor[name.slice(1)]


    const style = {};
    if (color) {
        style['--accent'] = `var(--dark-${color})`;
        style['--accent-light'] = `var(--${color})`;
    }


    return (
        <a className="preview-card folder" 
        href={`${path ? path.join('/') : ''}/${name.slice(1)}`}
        style={style}
        >
            <span className="folder-icon">folder</span>
            <span className="folder-title">{name.slice(1)}</span>
            <span className="after-arrow">chevron_right</span>
        </a>
    )
}

export const FilePreview = ({name, path}) => {
    const [content, setContent] = useState(null);
    const [intro, setIntro] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const text = await fetchMd({path: (path ? path.join('/') : '') + '/' + name});
            const intro = getIntro(text)
            setContent(intro.textContent)
            setIntro(intro)
        };
        fetchContent();
    }, [path]);


    return (
        <a className="preview-card" href={'/' + (path ? path.join('/') : '') + '/' + name}>
            <span className="title">
                {name}
            </span>
            <p style={{maxHeight:'5em'}}>{(intro && intro.desc) ? intro.desc : (content && removeMd(content.slice(0, 1000)))}</p>
            <div className="low-bar">
                {intro?.lang && <span>
                    <span className="icon">translate</span>
                    <span>{{'en':'🇬🇧','fr':'🇫🇷'}[intro.lang]}</span>
                </span>}
                {intro?.date && <span>
                    <span className="icon">calendar_today</span>
                    {intro.date}
                </span>}
            </div>
        </a>
    )
}

export default ElementPreview;


export const PathPreview = ({path, isFile = false}) => {
    const {cacheColor} = useContext(SidebarContext);

    console.log(path)

    return (
        <div className="path-list">
            <a href={`/`}>
                <House size={'1.3em'} className="home-icon"/>
            </a>
            {path.map((item, index) => {
                if (item === "") {
                    return
                }

                if (isFile && (index === path.length - 1 || (index === path.length - 2 && !path[index+1]))) {
                    return <a className="file-path-item">
                        <span>{item}</span>
                        </a>
                }

                const color = cacheColor && cacheColor[item] || 'blue';


                return (
                    <>
                        <a className="path-item" style={{
                            '--accent-light': color ? `var(--${color})` : 'unset',
                            '--accent': color ? `var(--dark-${color})` : 'unset'
                            }}
                            href={`/` + path.slice(0, index + 1).join('/')}
                            >
                            <span>{item}</span>
                        </a>
                    </>
                )
            })}
        </div>
    )
}