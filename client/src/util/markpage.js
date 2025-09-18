import Md, {MarkdownSkeleton, getIntro} from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "./components/notFound";
import { manifestData } from "../ctx/data/markNifest";
import {FolderPreview, FilePreview, PathPreview, BlogPreview, ImageCard} from "./ui/elements/previews";
import { sidebarItems } from "../ctx/SidebarContext";
import { SearchBar } from "./components/spotlight";
import Drawing from "./components/Drawing";
import { useLocation } from 'react-router-dom';
import removeMd from "remove-markdown";


export const fetchMd = async ({path}) => {
    const pathFix = path[path.length - 1] === '/' ? path.slice(0, -1) : path
    const markdownModule = await import(`../ctx/data/markdown/${pathFix}.md`);
    const response = await fetch(markdownModule.default);
    const text = await response.text();
    return text
}

const Markpage = ({defaultPath = null}) => {
    const [content, setContent] = useState("");
    const [isSpace, setIsSpace] = useState(false);
    const [intro, setIntro] = useState(null);
    const params = useParams();
    const path = defaultPath || params['*'];
     const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const sharing = queryParams.get('mdp') === 'ionesco';

    const isPathValid = (pathList) => {

        if (!pathList || !pathList[0]) {
            return false;
        }

        let current = '/' + pathList[0];

        if (!manifestData[current] || !manifestData[current][1] || manifestData[current][1].child) {
            return false
        }

        for (let i = 1; i < pathList.length; i++) {
            if (!current) {
                return false
            }

            if (!manifestData[current]) {
                return false
            }
            const children = manifestData[current][0];

            if (children.includes(pathList[i])) {
                return true;
            }

            if (!(children && children.includes('/' + pathList[i]))) {

                for (const child of children) {

                    if (Object.keys(manifestData).includes(child) && 
                        (manifestData[child][1].title.toLowerCase() === pathList[i])
                    ) {
                        return true;
                    }
                }

                return false;
            }

            current = '/' + pathList[i];
        }

        return true
    }


    



    useEffect(() => {
        const loadMarkdown = async () => {

            const pathPieces = path.split('/');

            // Elegant solution I recently discovered
            if (pathPieces[pathPieces.length - 1] === '') {
                pathPieces.length--
            }



            
            try {
                const text = await fetchMd({ path });
                setIntro(getIntro(text));
                setContent(text);



                if (!isPathValid(pathPieces) && !sharing) {
                    setContent(-1)
                }
            } catch (error) {


                if (!isPathValid(pathPieces)) {
                    setContent(-1)
                } else {
                    const spaceName = pathPieces && Object.keys(manifestData).includes('/' + pathPieces[pathPieces.length - 1])
                    if (spaceName) {
                        if (spaceName) {
                            setIsSpace(pathPieces)
                        }
                        try {
                            const text = await fetchMd({path: `${pathPieces.join('/')}/_index`});
                            setIntro(getIntro(text));
                            setContent(text);
                        } catch (error) {
                            setContent(`# ${pathPieces[pathPieces.length - 1]}`)
                        }
                    } else {
                        setContent(-1);
                    }
            }
            }
        };

        loadMarkdown();
    }, [path]);


    useEffect(() => {

        const updateMetadata = () => {
            const title = intro?.title || path.split('/').pop();
            const description = intro?.desc || (intro?.textContent ? removeMd(intro.textContent) : path);
            const date = intro?.date ? intro.date.split('/').reverse().join('-') : undefined;
            const url = window.location.href;
            const banner = intro?.banner || '';

            // Remove existing meta tags to avoid duplicates
            const removeMeta = (name, attr = 'name') => {
            const el = document.querySelector(`meta[${attr}="${name}"]`);
            if (el) el.remove();
            };

            // Helper to add meta tags
            const addMeta = (name, content, attr = 'name') => {
            if (!content) return;
            const meta = document.createElement('meta');
            meta.setAttribute(attr, name);
            meta.setAttribute('content', content);
            document.head.appendChild(meta);
            };

            // Remove old tags
            removeMeta('description');
            removeMeta('title');
            removeMeta('date');
            removeMeta('og:title', 'property');
            removeMeta('og:description', 'property');
            removeMeta('og:type', 'property');
            removeMeta('og:url', 'property');
            removeMeta('og:image', 'property');
            removeMeta('twitter:card', 'name');
            removeMeta('twitter:title', 'name');
            removeMeta('twitter:description', 'name');
            removeMeta('twitter:image', 'name');
            removeMeta('canonical', 'rel');

            // Set document title
            document.title = title;

            // Add canonical link
            let canonical = document.querySelector('link[rel="canonical"]');
            if (!canonical) {
                canonical = document.createElement('link');
                canonical.setAttribute('rel', 'canonical');
                document.head.appendChild(canonical);
            }
            canonical.setAttribute('href', url);

            // Standard meta
            addMeta('description', description);
            addMeta('title', title);
            addMeta('date', date);

            // Open Graph
            addMeta('og:title', title, 'property');
            addMeta('og:description', description, 'property');
            addMeta('og:type', 'article', 'property');
            addMeta('og:url', url, 'property');
            addMeta('og:image', banner, 'property');

            // Twitter
            addMeta('twitter:card', 'summary_large_image');
            addMeta('twitter:title', title);
            addMeta('twitter:description', description);
            addMeta('twitter:image', banner);

            // For debugging
            console.log({
            title,
            description,
            date,
            url,
            banner
            });
        };


        if (intro) {
            updateMetadata();
        }
    }, [intro]);


    if (content === -1) {
        return (
            <>
                <NotFound blog={1}/>
                <div className="lightmsg">
                    <div>
                        <h2 className="cop-title">Not found</h2>
                        <p>This page doesn't exist. It might have been moved or deleted. Or maybe... does not exist <i>yet</i>.</p>
                    </div>
                </div>
            </>
        )
    }


    if (isSpace) {

        if (isSpace[0] === 'blog') {
            return <BlogSpace path={isSpace}/>
        }
        return <Space path={isSpace} 
            description={content}
        />
    }

    return (
        <>
            {intro && intro.type && <div>
                <ImageCard 
                    title={intro.title} 
                    src={intro.banner} 
                    header={true}
                    unfit={intro.unfit}
                />
            </div>
            }
            <PathPreview path={path.split('/')} isFile={true}/>
            <Md article={true}>{content}</Md>
        </>
    )
}

export default Markpage;


const Space = ({description, path}) => {
    const [childs, setChilds] = useState(null);

    useEffect(() => {
        setChilds(manifestData['/' + path[path.length - 1]][0])

    }, [])

    return (
        <>
            {/* 0. Path preview (joined with chevrons) */}
            <PathPreview path={path}/>

            {/* 1. Space markdown description */}
            <Md>{description}</Md>

            {/* 2. Folders display */}
            <div className="preview-grid-container">
                {childs && childs.map((item) => (
                    item[0]=== '/' && <FolderPreview name={item} title={manifestData[item][1].title} path={path}/>
                ))}
            </div>

            {/* 3. Articles display */}
            <div className="preview-grid-container">
                {childs && childs.map((item) => (
                    item[0]!== '/' && <FilePreview name={item} path={path}/>
                ))}
            </div>

        </>
    )
}

const BlogSpace = ({path = ["blog"], light = false}) => {
    const [childs, setChilds] = useState(null);

    useEffect(() => {
        setChilds([...manifestData['/' + path[path.length - 1]][0]].reverse())

    }, [])



    return (
        <>
            {/* 0. Path preview (joined with chevrons) */}
            {!light && <PathPreview path={path}/>}

            {/* 1. Articles display */}
            <div className="preview-grid-container">
                {childs && childs.map((item) => (
                    item[0]!== '/' && <BlogPreview name={item} path={path}/>
                ))}
            </div>


        </>
    )
}


export const MainBlog = () => {
    const [description, setDescription] = useState(null);

    useEffect(() => {
        const loadMarkdown = async () => {
            const text = await fetchMd({ path : 'main' });
            setDescription(text);
        }

        loadMarkdown();
    }, [])

    return (
        <>

        {/*0. Search and logo */}
        <Drawing path={`logo.svg`} maxHeight="300px" maxWidth="300px"/>
        <div style={{display:'flex',justifyContent:'center'}}>
            <SearchBar />
        </div>



        {/* 1. Essentials */}
        <div style={{display:'flex',alignItems:'center', flexDirection:'column',paddingTop:'5em'}}>
            <div className="preview-grid-container">
                {sidebarItems.map((item) => {
                    return <a className="preview-card essentials" href={item.path}>

                        <div className="header">
                            <span className="icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                        <p>{item.description}</p>

                        <div className="read-btn">
                            <span>Read</span>
                            <span className="after-arrow">chevron_right</span>
                        </div>
                    </a>
                })}
            </div>

        </div>

        {/* 2. Folders display */}
        <div className="preview-grid-container">
            {Object.entries(manifestData).map(([key, value]) => {
                if (value[1].child) { return null }
                return key[0] === '/' && <FolderPreview name={key} title={manifestData[key][1].title} path={''}/>
            })}
        </div>

        {/*3. Space markdown description */}
        {description ? <Md>{description}</Md> : <MarkdownSkeleton/>}


        {/*4. Blog preview */}
        <BlogSpace light={true}/>
        </>
    )
}