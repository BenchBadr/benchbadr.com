import './App.css';
import ThemeProvider, {ThemeContext} from './ctx/ThemeContext';
import SidebarProvider from './ctx/SidebarContext';
import { useContext } from 'react';


function App() {
  return (
     <ThemeProvider>
    <SidebarProvider>
     <MainContent />
    </SidebarProvider>
  </ThemeProvider>
  );
}


const MainContent = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className='main-content'>
        <h1 className='cop-title'>Badr Bench</h1>
      </div>
    </div>
  )
}

export default App;
