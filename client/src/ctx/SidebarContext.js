import React, { createContext, useState, useContext, useEffect, cache } from 'react';
import {ThemeContext} from './ThemeContext';
import Folders from '../util/ui/elements/folders';
import { Home } from 'lucide-react';
import Spotlight from '../util/components/spotlight';

export const SidebarContext = createContext();


export const sidebarItems = [
  { label: "About Me", path: "/about" , icon:'info', description:"A little presentation with my Curriculum Vitae attached."},
  { label: "Papers", path: "/papers", icon:'article', description:"A collection of papers, whether they are academic or not."},
];


const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(true);

  // used to cache inheritable folders colors 
  // without performing a cost recursive search
  const [cacheColor, setCacheColor] = useState(null);

  // used to navigate between pages (markpage only)
  const [nextPrev, setNextPrev] = useState([null, null])

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
    // navigator.vibrate(50);
  };


  return (
    <SidebarContext.Provider value={{ 
        isSidebarOpen, toggleSidebar, 
        isRightOpen, setIsRightOpen, 
        nextPrev, setNextPrev, 
        cacheColor, setCacheColor 
      }}>
      <Sidebar/>
      {children}
    </SidebarContext.Provider>
  );
};


const Sidebar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { isSidebarOpen, toggleSidebar, manifestData } = useContext(SidebarContext);
    const [spotlight, setSpotlight] = useState(false);

    const toggleSpot = () => {
      setSpotlight(!spotlight)
    }

    useEffect(() => {
      const handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'p') {
          event.preventDefault();
          toggleSpot()
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [toggleSpot]);

  
    return (
        <> 
        {spotlight ? <Spotlight toggle={toggleSpot}/> : false}
        <div onClick={toggleSidebar} className={`burger ${isSidebarOpen ? 'active' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
        </div>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='sidebar-content'>
            <div className='sidebar-normal'>
              <a key={0} className={`sidebar-element  ${'/' === window.location.pathname ? 'active' : ''}`} href={'/'} style={{gap:'1em'}}>
                  <Home/>
                  <span>Home</span>
                </a>
              {sidebarItems.map((item, index) => (
                <a key={index} className={`sidebar-element ${item.path === window.location.pathname ? 'active' : ''}`} href={item.path}>
                  <span className='material-icons'>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <Folders data={manifestData}/>
            </div>
          <div className='sidebar-parent'>
            <div>
          </div>
          </div>
        </div>
        <div className='bottom-box'>
            <div onClick={toggleTheme} className='theme-toggle'><a className='material-icons'>{theme!=='light' ? 'light_mode' : 'dark_mode'}</a></div>
        </div>
      </aside>
      </>
    );
};  

export default SidebarProvider;