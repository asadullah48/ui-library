import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function GroupNav({pageTitle}: {pageTitle: string}){
    return (
        <nav className='flex flex-row items-center text-xs sm:text-sm lg:text-base gap-x-1 py-2 px-4'>
            <Link href='/'>Home</Link>
            <ChevronRight size={20}/> 
            <p>{pageTitle}</p>  
        </nav>
    )
}