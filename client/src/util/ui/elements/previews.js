import { useState, useEffect, useContext, cache } from "react";
import { fetchMd } from "../../markpage";
import './styles/preview.css';
import removeMd from "remove-markdown";
import { getIntro } from "../../markdown";
import { SidebarContext } from "../../../ctx/SidebarContext";

const ElementPreview = ({name, path}) => {
    if (name[0] === '/') {
        return <FolderPreview name={name}/>
    } else {
        return <FilePreview name={name} path={path}/>
    }
}


export const FolderPreview = ({name}) => {
    const { cacheColor } = useContext(SidebarContext)

    const color = cacheColor[name.slice(1)]


    const style = {};
    if (color) {
        style['--accent'] = `var(--dark-${color})`;
        style['--accent-light'] = `var(--${color})`;
    }

    return (
        <a className="preview-card folder" 
        href={`${name.slice(1)}`}
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
            const text = await fetchMd({path: path.join('/') + '/' + name});
            const intro = getIntro(text)
            setContent(intro.textContent)
            setIntro(intro)
        };
        fetchContent();
    }, [path]);


    return (
        <a className="preview-card" href={'/blog/' + path.join('/') + '/' + name}>
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


export const PathPreview = ({path}) => {
    const {cacheColor} = useContext(SidebarContext);

    return (
        <div className="path-list">
            <span className="home-icon"/>
            {path.map((item, index) => {
                const color = cacheColor[item];
                return (
                    <>
                        <div className="path-item" style={{
                            '--accent-light': color ? `var(--${color})` : 'unset',
                            '--accent': color ? `var(--dark-${color})` : 'unset'
                            }}>
                            <span>{item}</span>
                        </div>
                    </>
                )
            })}
        </div>
    )
}