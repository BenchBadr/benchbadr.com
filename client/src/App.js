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

## Math Examples \`hello\`

Let's test[^1] \`hello\`
ilsts

- Hello
  - world
    - test


> [!warn]- Testing
> This is peak



\`\`\`javascript
console.log('hi')
// this is line two
// line 3
\`\`\`

[^1]:Test
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
