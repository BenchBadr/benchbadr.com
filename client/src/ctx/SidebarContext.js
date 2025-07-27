import React, { createContext, useState, useContext } from 'react';
import {ThemeContext} from './ThemeContext';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isRightOpen, setIsRightOpen }}>
      <Sidebar/>
      {children}
    </SidebarContext.Provider>
  );
};


const Sidebar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

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
          <div className='sidebar-parent'>
            <div>
          {sidebarItems.map((item, index) => (
            <div key={index} className={`sidebar-element`}>
              <span className='material-icons'>{item.icon}</span>
              <a href={item.path}>{item.label}</a>
            </div>
          ))}
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