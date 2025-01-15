'use client';

import React, { useEffect, useState } from 'react';

import { Sun, Moon, Copy, Check } from 'lucide-react';

interface CodeContainerProps {
  code: string;
  language: string;
}
const CodeContainer = ({ code, language }: CodeContainerProps) => {
  const [isCopied, setIsCopied] = useState(false);


  const handleCopy = async () => {
    try {
      // Try the modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
      } else {
        // Fallback for older browsers and mobile devices
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
          setIsCopied(true);
        } catch (err) {
          console.error('Failed to copy text:', err);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    } finally {
      // Reset copy status after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className={'w-full dark'}>
      <div className="rounded-lg overflow-hidden bg-zinc-900 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <span className="text-sm font-mono  text-zinc-400">
            {language}
          </span>
          <div className="">
            
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 px-3 py-1 rounded-md text-xs transition-colors bg-zinc-700 hover:bg-zinc-600 text-zinc-300"
            >
              {isCopied ? (
                <>
                  <Check size={14} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code content */}
        <div className="relative max-h-[70vh] overflow-y-scroll">
          
          {/* Code with syntax highlighting */}
          <pre className="text-sm lg:text-base p-4 overflow-x-auto bg-zinc-900">
            <code className={` font-mono text-sm`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};


export default CodeContainer;