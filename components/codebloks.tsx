"use client"
import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const vscDarkPlus = require('react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus').default;

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const [codeString, setCodeString] = useState('');

  useEffect(() => {
    // 设置代码字符串
    setCodeString(children.trim());
  }, [children]);

  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} className="w-full h-4/6">
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
