'use client'

import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

import CodeContainer from './CodeContainer';

import { useState } from 'react';

interface NavProps {
    parentUrl?: {link: string, title:string} | null,
    pageTitle: string,
    code: {language: string, code: string};
}
export default function Nav({ parentUrl=null, pageTitle, code}:NavProps){
    const [codeBlockVisible, setCodeBlockVisible] = useState(false);

    const handleClick = () => {
        setCodeBlockVisible(true)
    }

    const hideCodeBlock = () => {
        setCodeBlockVisible(false)
    }
    return (
        <div className='relative bg-white'>
            <nav className='flex flex-row items-center justify-between py-2 px-4'>
                <div className='flex flex-row items-center text-xs sm:text-sm lg:text-base gap-x-1'>
                    <Link href='/'>Home</Link>
                    <ChevronRight size={20}/> 
                    {
                        parentUrl &&
                        <>
                            <Link href={parentUrl.link}>{parentUrl.title}</Link>
                            <ChevronRight size={20}/> 
                        </>
                    }
                    
                    <p>{pageTitle}</p>
                </div>
            
                <button onClick={handleClick} className='flex flex-row gap-x-1 justify-center items-center py-1 px-3  text-xs sm:text-sm lg:text-base rounded-full border border-gray-300 hover:bg-gray-100'>
                    <span>Code</span>
                    <ChevronDown size={20}/>
                </button>
            </nav>
                
            <div onClick={hideCodeBlock} className={`${codeBlockVisible?'block':'hidden'} bg-transparent fixed top-0 left-0 w-full h-screen z-[2]`}>.</div>
            <div className={`${codeBlockVisible?'block':'hidden'} w-[calc(100%-9px)] sm:w-[90%] lg:w-[500px] absolute right-2 top-10 z-[3]`}>
                <CodeContainer language={code.language} code={code.code}/>
            </div>
             
        </div>
    )
}