import './App.css';
import ThemeProvider, {ThemeContext} from './ctx/ThemeContext';
import SidebarProvider from './ctx/SidebarContext';
import { useContext } from 'react';
import Md from './util/markdown';


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

  const exampleMarkdown = `
# Welcome to Badr Bench

This is an example of the **Markdown component** with MathJax support.

## Math Examples

Let's test ilsts

- Hello
  - world
    - test
`;

  return (
    <div className={`app ${theme}`}>
      <div className='main-content'>
        <Md>{exampleMarkdown}</Md>
      </div>
    </div>
  )
}

export default App;
