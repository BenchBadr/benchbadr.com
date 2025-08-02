import React, { createContext, useState, useContext, useEffect } from 'react';
import {ThemeContext} from './ThemeContext';
import Folders from '../util/ui/elements/folders';

export const SidebarContext = createContext();

const SidebarProvider = ({ children, article }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(true);
  const [manifestData, setManifestData] = useState(null);

  // used to navigate between pages (markpage only)
  const [nextPrev, setNextPrev] = useState([null, null])

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };


  useEffect(() => {
    const fetchManifest = async () => {
      try {
        const response = await fetch('/markdown/manifest.json');
        const data = await response.json();
        setManifestData(data);
      } catch (error) {
        console.error('Error loading manifest.json:', error);
      }
    };

    fetchManifest();
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isRightOpen, setIsRightOpen, manifestData, nextPrev, setNextPrev }}>
      <Sidebar article={article}/>
      {children}
    </SidebarContext.Provider>
  );
};


const Sidebar = ({article}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isSidebarOpen, toggleSidebar, manifestData } = useContext(SidebarContext);

    const sidebarItems = [
      { label: "About Me", path: "/about" , icon:'info'},
      { label: "Animations", path: "/animations", icon:'movie_edit'},
      { label: "Papers", path: "/papers", icon:'article'},
      { label: "Blog", path: "/blog", icon:'newspaper'},
    ];


  
    return (
        <> 
        <div onClick={toggleSidebar} className={`burger ${isSidebarOpen ? 'active' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
        </div>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='sidebar-content'>
          {article ? (
            <div className='sidebar-normal'>
              <Folders data={manifestData}/>
            </div>
          ) : null}
          <div className='sidebar-parent'>
            <div>
          {!article ? sidebarItems.map((item, index) => (
            <div key={index} className={`sidebar-element`}>
              <span className='material-icons'>{item.icon}</span>
              <a href={item.path}>{item.label}</a>
            </div>
          )) : null}
          </div>
          </div>
            <div className='bottom-box'>
            <div onClick={toggleTheme} className='theme-toggle'><a className='material-icons'>{theme!=='light' ? 'light_mode' : 'dark_mode'}</a></div>
            </div>
        </div>
      </aside>
      </>
    );
};  

export default SidebarProvider;