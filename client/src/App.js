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
lang:fr
---
# Welcome to Badr Bench

This is an example of the **Markdown component** with MathJax support.

$\\newcommand{\\m}[1]{\\begin{pmatrix}#1\\end{pmatrix}}$

## Math Examples \`hello\`

- **matrix**
  - $\\m{1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9}$

Let's test[^1] \`hello\`
ilsts

## Todo next

> Hello

- [ ] Fix refresh issue
- [x] Design inline-code
- [x] Fix Burger
- [x] Todo lists lol
- [ ] Images
- [x] Fix callouts
- [ ] References up to Arltools
- [ ] Table of content
- [ ] Sidebar open = no scroll behaviour
- [ ] Start indexing

> [!tips] Testing
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
