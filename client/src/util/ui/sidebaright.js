import React, {useContext, useState, useEffect} from 'react';
import { SidebarContext } from '../../ctx/SidebarContext';
import Toc from './sidetools/toc';
import Ai from './sidetools/ai';
import Search from './sidetools/search';



const SidebarRight = ({markdown}) => {
    const { isRightOpen, setIsRightOpen } = useContext(SidebarContext);
    const [tool, setTool] = useState(0);
    const [messages, setMessages] = useState([]);

    // fenl = front matter end line
    const [fenl, setFenl] = useState(0);

    // Returns the index of the second '---' line in the markdown (end of front matter), or 0 if not found
    const getFrontMatterEndLine = (markdown) => {
        const lines = markdown.split('\n');
        if (lines[0].trim() === '---') {
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].trim() === '---') {
                    return i;
                }
            }
        }
        return 0;
    };

    useEffect(() => {
        setFenl(getFrontMatterEndLine(markdown) + 1)
    }, [])

    useEffect(() => {
        // clear eventual highlights remaining from search tool
        document.querySelectorAll('[data-attr-focus]').forEach(el => {
            el.removeAttribute('data-attr-focus');
        });
        // navigator.vibrate(50);

    }, [tool])



    
    return (
        <div className={`sidebar right ${isRightOpen ? 'open' : ''}`}>
            <div className='selector'>
                <div className={`option ${tool===1 && 'active'}`} onClick={() => setTool(1)}>
                    <a className='material-icons'>search</a>
                </div>
                <div className={`option ${tool===0 && 'active'}`} onClick={() => setTool(0)}>
                    <a className='material-icons'>toc</a>
                </div>
                <div className={`option ${tool===2 && 'active'}`} onClick={() => setTool(2)}>
                    <a className='material-icons'>auto_awesome</a>
                </div>
            </div>
            <div className='sidebaright-content'>
                {tool === 0 && <Toc markdown={markdown}/>}
                {tool === 2 && <Ai markdown={markdown} messages={messages} setMessages={setMessages}/>}
                {tool === 1 && <Search markdown={markdown} fenl={fenl}/>}
            </div>
        </div>
    )
};

export default SidebarRight;