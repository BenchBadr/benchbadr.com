# Markdown Component with MathJax Support

A React component that renders Markdown with full MathJax support, including `\newcommand` macros that can be shared globally or defined per component.

## Features

- **React-Markdown Integration**: Full markdown rendering with React components
- **MathJax Support**: Inline (`$...$`) and display (`$$...$$`) math rendering
- **Global Macros**: Predefined mathematical macros available across all components
- **Component-Specific Macros**: Define custom macros for individual components
- **`\newcommand` Support**: Extract and use `\newcommand` definitions from markdown content
- **Conflict Prevention**: Each component instance has its own macro scope

## Installation

The following dependencies are required:

```bash
npm install react-markdown remark-math rehype-mathjax
```

## Basic Usage

```javascript
import Md from './util/markdown';

function MyComponent() {
  return (
    <Md>
      {`# Hello Math!
      
      The real numbers $\\RR$ and the norm $\\norm{x}$ are useful.
      
      $$\\int_0^1 x^2 dx = \\frac{1}{3}$$`}
    </Md>
  );
}
```

## Global Macros

The following macros are available globally across all `<Md>` components:

- `\\RR` → `\\mathbb{R}` (Real numbers)
- `\\NN` → `\\mathbb{N}` (Natural numbers)
- `\\ZZ` → `\\mathbb{Z}` (Integers)
- `\\QQ` → `\\mathbb{Q}` (Rational numbers)
- `\\CC` → `\\mathbb{C}` (Complex numbers)
- `\\norm{x}` → `\\left\\|x\\right\\|` (Norm)
- `\\abs{x}` → `\\left|x\\right|` (Absolute value)
- `\\set{x}` → `\\left\\{x\\right\\}` (Set notation)

## Component-Specific Macros

Define custom macros for individual components:

```javascript
const customMacros = {
  '\\myVector': ['\\vec{#1}', 1],
  '\\diff': ['\\frac{d#1}{d#2}', 2],
};

<Md macros={customMacros}>
  {`Using custom macros: $\\myVector{v}$ and $\\diff{f}{x}$`}
</Md>
```

## Using `\newcommand`

Define commands directly in your markdown:

```javascript
<Md>
  {`$\\newcommand{\\grad}{\\nabla}$
  $\\newcommand{\\innerproduct}[2]{\\langle #1, #2 \\rangle}$
  
  Now use them: $\\grad f$ and $\\innerproduct{u}{v}$`}
</Md>
```

## Advanced Configuration

### Custom MathJax Configuration

```javascript
const customConfig = {
  tex: {
    tags: 'ams',
    tagSide: 'right',
  },
  svg: {
    scale: 1.2,
  },
};

<Md mathJaxConfig={customConfig}>
  {`$$\\tag{1} E = mc^2$$`}
</Md>
```

### Additional Plugins

```javascript
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

<Md 
  remarkPlugins={[remarkGfm]} 
  rehypePlugins={[rehypeHighlight]}
>
  {markdownContent}
</Md>
```

## Utility Functions

```javascript
import { 
  getGlobalMacros, 
  setGlobalMacro, 
  removeGlobalMacro, 
  createCustomMacros 
} from './util/markdown';

// Get all global macros
const globals = getGlobalMacros();

// Add a new global macro
setGlobalMacro('\\newMacro', '\\mathcal{M}');

// Remove a global macro
removeGlobalMacro('\\oldMacro');

// Helper to create macro objects
const myMacros = createCustomMacros({
  '\\special': '\\mathfrak{S}',
});
```

## Examples

### Basic Math

```javascript
<Md>
  {`
  Inline: $a^2 + b^2 = c^2$
  
  Display: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$
  `}
</Md>
```

### With Global Macros

```javascript
<Md>
  {`The function $f: \\RR \\to \\RR$ has norm $\\norm{f} < \\infty$.`}
</Md>
```

### With Custom Macros

```javascript
const macros = { '\\op': ['\\operatorname{#1}', 1] };

<Md macros={macros}>
  {`The $\\op{span}$ of vectors...`}
</Md>
```

## Notes

- Each `<Md>` component has its own unique ID to prevent macro conflicts
- Component-specific macros override global macros with the same name
- `\newcommand` definitions are extracted and processed automatically
- MathJax is configured to handle both inline and display math
- The component automatically retypesets math when content changes
