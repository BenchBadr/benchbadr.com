import Md, {MarkdownSkeleton} from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "./components/notFound";
import { manifestData } from "../ctx/data/markNifest";
import {FolderPreview, FilePreview, PathPreview} from "./ui/elements/previews";


export const fetchMd = async ({path}) => {
    const markdownModule = await import(`../ctx/data/markdown/${path}.md`);
    const response = await fetch(markdownModule.default);
    const text = await response.text();
    return text
}

const Markpage = ({defaultPath = null}) => {
    const [content, setContent] = useState("");
    const [isSpace, setIsSpace] = useState(false)
    const params = useParams();
    const path = defaultPath || params['*'];

    const isPathValid = (pathList) => {

        if (!pathList[0]) {
            return false;
        }

        let current = '/' + pathList[0];

        if (manifestData[current][1].child) {
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

            if (!(children && children.includes('/' + pathList[i]))) {
                return false;
            }
            current = '/' + pathList[i];
        }

        return true
    }



    useEffect(() => {
        const loadMarkdown = async () => {

            
            try {
                const text = await fetchMd({ path });
                setContent(text);
            } catch (error) {

                const pathPieces = path.split('/');

                // Elegant solution I recently discovered
                if (pathPieces[pathPieces.length - 1] === '') {
                    pathPieces.length--
                }

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

    console.log(path)

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
        return <Space path={isSpace} 
            description={content}
        />
    }
  

    return (
        <>
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
                    item[0]=== '/' && <FolderPreview name={item} path={path}/>
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
        
        {/*1. Space markdown description */}
        {description ? <Md>{description}</Md> : <MarkdownSkeleton/>}

        {/* 2. Folders display */}
        <div className="preview-grid-container">
            {Object.entries(manifestData).map(([key, value]) => {
                console.log(key)
                if (value[1].child) { return null }
                return key[0] === '/' && <FolderPreview name={key} path={''}/>
            })}
        </div>

        </>
    )
}