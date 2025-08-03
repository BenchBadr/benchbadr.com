import Md from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "./components/notFound";

const Markpage = ({defaultPath = null}) => {
    const [content, setContent] = useState("");
    const params = useParams();
    const path = defaultPath || params['*'];

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                const markdownModule = await import(`../ctx/data/markdown/${path}.md`);
                const response = await fetch(markdownModule.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading markdown:', error);
                setContent(-1);
            }
        };

        loadMarkdown();
    }, [path]);

    if (content === -1) {
        console.log(decodeURI(window.location.pathname))
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
  

    return (
        <>
            <Md article={true}>{content}</Md>
        </>
    )
}

export default Markpage;