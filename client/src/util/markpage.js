import Md from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Markpage = () => {
    const [content, setContent] = useState("");
    const params = useParams();
    const path = params['*'];

    useEffect(() => {
        console.log('alright let try')
        fetch(`/markdown/${path}.md`)
            .then(res => res.text())
            .then(text => setContent(text));
    }, [path]);

    console.log(content)

    return (
        <Md article={true}>{content}</Md>
    )
}

export default Markpage;