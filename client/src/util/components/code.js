import React, { useState, useEffect, useContext, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import mermaid from "mermaid";
import { ThemeContext } from '../../ctx/ThemeContext';

const Mermaid = ({ theme, chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ theme: theme || 'default', startOnLoad: false });
      ref.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [theme, chart]);

  return <div className="mermaid" ref={ref}></div>;
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div onClick={handleCopy} className="copy-btn"  data-copied={copied ? `active` : ``}>
      <span className="material-icons">
        {copied ? 'check' : 'content_copy'}
      </span>
    </div>
  );
};

const Highlighter = ({ code, language, showLines = true }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="blockCode">
      {language && <div className='label'>{language}</div>}
      <SyntaxHighlighter
        language={language || 'text'}
        style={theme === 'dark' ? vscDarkPlus : solarizedlight}
        showLineNumbers={showLines}
        customStyle={{background:'transparent'}}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export const CodeBlock = ({ language, code }) => {
  const { theme } = useContext(ThemeContext);
  const rawCode = Array.isArray(code)
    ? code.map(c => (typeof c === 'object' ? c.props.children.join('') : c)).join('')
    : code;

  if (language === 'mermaid') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Mermaid chart={rawCode} theme={theme === 'dark' ? 'dark' : 'forest'} />
      </div>
    );
  }

  return (
    <div className="code-block-wrapper" style={{ position: 'relative' }}>
      <CopyButton text={rawCode} />
      <Highlighter code={rawCode} language={language} />
    </div>
  );
};

export const InlineCode = ({ code }) => {
  const { theme } = useContext(ThemeContext);

  if (!code || code.includes('\n')) {
    return <CodeBlock language="" code={code || '\n '} />;
  }

  return (
    <code className={`inline-code ${theme}`} style={{ color: 'grey' }}>
      {code}
    </code>
  );
};

