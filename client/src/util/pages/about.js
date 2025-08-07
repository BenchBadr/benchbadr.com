import Drawing from "../components/Drawing";
import { PathPreview } from "../ui/elements/previews";
import Md, {getIntro} from '../markdown'
import { useEffect, useState } from "react";
import { fetchMd } from "../markpage";
import { PapersChild } from "./papers";
import { cvData } from "./data/cvManifest";

const About = () => {
    const [content, setContent] = useState("");
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        const fetchContent = async () => {
            const text = await fetchMd({path:`cv_${language}`});
            setContent(text)
        };
        fetchContent();
    }, [language]);

    return (
        <>

        <PathPreview path={['About me']} isFile={true} icon={'info'}/>
        <Drawing maxHeight={`300px`} path={`about.svg`}/>

        <PapersChild data={cvData}/>

        <div className="language-select">
            <b>Choose language : </b>
            <select
                className="options"
                onChange={event => setLanguage(event.target.value)}
            >
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 Français</option>
            </select>
        </div>

        <Md article={true}>{content}</Md>
        </>
    )
}

export default About;