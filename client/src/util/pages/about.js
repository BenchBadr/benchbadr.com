import Drawing from "../components/Drawing";
import { PathPreview } from "../ui/elements/previews";

const About = () => {
    return (
        <>
        <PathPreview path={['About me']} isFile={true} icon={'info'}/>
        <Drawing maxHeight={`300px`} path={`about.svg`}/>
        </>
    )
}

export default About;