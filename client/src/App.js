import './App.css';
import ThemeProvider, {ThemeContext} from './ctx/ThemeContext';
import SidebarProvider from './ctx/SidebarContext';
import { useContext } from 'react';
import Md from './util/markdown';
// import Consent from './util/ui/elements/consentBanner';
import Cookies from 'js-cookie';


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
  const exampleMarkdown = `
lang:fr
===
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

- [x] Fix refresh issue
- [x] Design inline-code
- [x] Fix Burger
- [x] Todo lists lol
- [x] Fix callouts
- [x] Sidebar open = no scroll behaviour
- [x] Fix expandables
- [x] External References URLs
- [x] Tables
- [x] Footnotes
- [x] Tooltipping
- [ ] Images
- [x] Sidebaright
- [ ] Table of content
- [ ] AI Chat
- [ ] Keyboard keys
- [ ] Start indexing

> [!tip]+ Testing
> This is a nice little callout



\`\`\`javascript
console.log('hi')
// this is line two
// line 3
\`\`\`


| Nice table | test table |
| - | - |
| hi | hello |

[Example](https://www.youtube.com/watch?v=nsZC6xcHJUs&list=RDzeiFvI6eUhc&index=4) and [example.com](example.com)


[^1]:https://en.wikipedia.org/wiki/Hittites
`;

  return (
    <Md article={true}>{exampleMarkdown}</Md>
  )
}

export default MainContent;


const ToExportChild = ({children}) => {
  const { theme, consented, setConsented} = useContext(ThemeContext);

  const toggleConsent = () => {
    setConsented(!true);
    Cookies.set('consent', consented, { expires: 365 });
  }


  return (
    <div className={`app ${theme}`}>

       {/* Consent banner */}
      {/* {!consented && <Consent toggle={toggleConsent}/>} */}


      <div className='main-content'>


        {children}
      </div>
    </div>
  )
}

export const ToExport = ({children}) => {
  return (
     <ThemeProvider>
      <SidebarProvider>
        <ToExportChild>{children}</ToExportChild>
      </SidebarProvider>
    </ThemeProvider>
  )
}