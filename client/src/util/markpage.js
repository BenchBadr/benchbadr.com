import Md from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Markpage = () => {
    const [content, setContent] = useState("");
    const [start, setStart] = useState(false);
    const params = useParams();
    const path = params['*'];

    useEffect(() => {
        fetch(`/markdown/${path}.md`)
            .then(res => res.text())
            .then(text => setContent(text));
    }, [path]);

    return (
        <>
            <Md article={true}>{content}</Md>
        </>
    )
}

export default Markpage;