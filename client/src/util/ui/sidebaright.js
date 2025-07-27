import React, {useContext} from 'react';
import { SidebarContext } from '../../ctx/SidebarContext';

const SidebarRight = () => {
    const { isRightOpen, setIsRightOpen } = useContext(SidebarContext);
    return (
        <div className={`sidebar right ${isRightOpen ? 'open' : ''}`}>
            <h1>hello</h1>
        </div>
    )
};

export default SidebarRight;