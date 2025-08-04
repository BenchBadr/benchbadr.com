import Md from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "./components/notFound";
import { manifestData } from "../ctx/data/markNifest";
import ElementPreview from "./ui/elements/previews";


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
        let current = '/' + pathList[0];

        for (let i = 1; i < pathList.length; i++) {
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
            {/* 1. Space markdown description */}
            <Md>{description}</Md>

            {/* 2. Folders display */}
            <div className="preview-grid-container">
                {childs && childs.map((item) => (
                    <ElementPreview name={item} path={path}/>
                ))}
            </div>

        </>
    )
}