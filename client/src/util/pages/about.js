import Drawing from "../components/Drawing";
import { PathPreview } from "../ui/elements/previews";
import Md, {getIntro} from '../markdown'
import { useEffect, useState } from "react";
import { fetchMd } from "../markpage";

const About = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchContent = async () => {
            const text = await fetchMd({path:'cv'});
            const intro = getIntro(text)
            setContent(intro.textContent)
        };
        fetchContent();
    }, []);

    return (
        <>
        <PathPreview path={['About me']} isFile={true} icon={'info'}/>
        <Drawing maxHeight={`300px`} path={`about.svg`}/>
        <Md article={true}>{content}</Md>
        </>
    )
}

export default About;