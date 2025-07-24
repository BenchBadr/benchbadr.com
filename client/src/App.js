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

Global macros work: The real numbers $\\RR$ and complex numbers $\\CC$.

Custom commands with newcommand:
$\\newcommand{\\derivative}[2]{\\frac{d#1}{d#2}}$

Now we can use: $\\derivative{f}{x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$

## Display Math

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

The norm $\\norm{\\mathbf{v}}$ and absolute value $\\abs{x}$ work too.

## Other test

Define here$\\newcommand{\\a}{hello}$

- Test here: $\\a$

> [tips]
> test
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
