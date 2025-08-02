import Md from "./markdown"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NextPrev from "./ui/elements/nextPrev";

const Markpage = () => {
    const [content, setContent] = useState("");
    const params = useParams();
    const path = params['*'];

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                const markdownModule = await import(`../ctx/data/markdown/${path}.md`);
                const response = await fetch(markdownModule.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading markdown:', error);
                setContent('# File not found\nThe requested markdown file could not be loaded.');
            }
        };

        loadMarkdown();
    }, [path]);
  

    return (
        <>
            <Md article={true}>{content}</Md>
            <NextPrev/>
        </>
    )
}

export default Markpage;