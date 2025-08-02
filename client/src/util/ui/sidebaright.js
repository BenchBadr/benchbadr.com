import React, {useContext, useState, useEffect} from 'react';
import { SidebarContext } from '../../ctx/SidebarContext';
import Toc from './sidetools/toc';
import Ai from './sidetools/ai';
import Search from './sidetools/search';

const SidebarRight = ({markdown}) => {
    const { isRightOpen, setIsRightOpen } = useContext(SidebarContext);
    const [tool, setTool] = useState(0);

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
                {tool === 2 && <Ai markdown={markdown}/>}
                {tool === 1 && <Search markdown={markdown}/>}
            </div>
        </div>
    )
};

export default SidebarRight;