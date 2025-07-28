import React, {useContext, useState} from 'react';
import { SidebarContext } from '../../ctx/SidebarContext';

const SidebarRight = () => {
    const { isRightOpen, setIsRightOpen } = useContext(SidebarContext);
    const [tool, setTool] = useState(0);
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
            <h1>hello</h1>
        </div>
    )
};

export default SidebarRight;