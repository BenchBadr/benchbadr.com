import { useState, useEffect } from "react";
import { fetchMd } from "../../markpage";
import './styles/preview.css';
import removeMd from "remove-markdown";
import { getIntro } from "../../markdown";

const ElementPreview = ({name, path}) => {
    if (name[0] === '/') {
        return <FolderPreview name={name}/>
    } else {
        return <FilePreview name={name} path={path}/>
    }
}


const FolderPreview = ({name}) => {
    return (
        <><b>FOLDER</b></>
    )
}

const FilePreview = ({name, path}) => {
    const [content, setContent] = useState(null);
    const [intro, setIntro] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const text = await fetchMd({path: path.join('/') + '/' + name});
            setContent(text);
            setIntro(getIntro(text));
        };
        fetchContent();
    }, [path]);

    console.log(intro)

    return (
        <a className="preview-card" href={'/blog/' + path.join('/') + '/' + name}>
            <span className="title">
                {name}
            </span>
            <p style={{maxHeight:'5em'}}>{content && removeMd(content.slice(0, 1000))}</p>
            <div className="low-bar">HELLO</div>
        </a>
    )
}

export default ElementPreview;