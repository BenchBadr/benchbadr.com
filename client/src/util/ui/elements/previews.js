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

/** Previews a given path with clickable elements
 * 
 * @returns 
 */
export const PathPreview = ({path, isFile = false, icon = null}) => {
    const {cacheColor} = useContext(SidebarContext);

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
                        <div className="icon">{!icon ? 'article' : icon}</div>
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




const ImageCard = ({src, seed, unfit}) => {

    function pastelBlob(seed) {
        // simple seeded random
        function rnd() {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        }

        // pastel color generator (HSL)
        function pastel() {
            const h = Math.floor(rnd() * 360);
            const s = 80 + Math.floor(rnd() * 20); // 60–80% saturation
            const l = 65 + Math.floor(rnd() * 15); // 75–90% lightness
            return `hsl(${h}, ${s}%, ${l}%)`;
        }

        // pick colors
        const c1 = pastel();
        const c2 = pastel();
        const c3 = pastel();
        const c4 = pastel();

        // positions + angle as values
        const cx1 = Math.round(rnd() * 100);
        const cy1 = Math.round(rnd() * 100);
        const cx2 = Math.round(rnd() * 100);
        const cy2 = Math.round(rnd() * 100);
        const angle = Math.round(rnd() * 360);

        // Return all values in a JSON object
        return {
            backgroundImage: `
            radial-gradient(circle at var(--cx1) var(--cy1), ${c1} 0%, transparent 40%),
            radial-gradient(circle at var(--cx2) var(--cy2), ${c2} 0%, transparent 45%),
            linear-gradient(var(--angle), ${c3} 0%, ${c4} 60%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.08))
            `,
            '--cx1': `${cx1}%`,
            '--cy1': `${cy1}%`,
            '--cx2': `${cx2}%`,
            '--cy2': `${cy2}%`,
            '--angle': `${angle}deg`
        };
    }


    return (
        <div className="sick-parent">
            <div className="sick-gradient"
                style={pastelBlob(seed)}
            >
                {src && <img src={src} style={{width: unfit ? 'auto' : '100%'}}/>}
            </div>
        </div>
    )
}


/**
 * Blog Preview
 * 
 */

export const BlogPreview = ({name, path}) => {
    const [intro, setIntro] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const text = await fetchMd({path: (path ? path.join('/') : '') + '/' + name});
            const intro = getIntro(text)
            setIntro(intro)
        };
        fetchContent();
    }, [path]);

    if (!intro) {
        return <a></a>
    }

    const seed = intro.title.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

    return (
        <a className="blog-card" href={'/blog/' + name}>
            <ImageCard 
                src={intro.banner} 
                seed={seed}
                unfit={intro.unfit}
            />
            <span className="title">{intro.title}</span>
            <div className="bottom-info">
                <span>{intro.type}</span>
                <span>{intro.date}</span>
            </div>
        </a>
    )
}

