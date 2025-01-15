import Image from 'next/image';

import {EmojiIcon, ImageIcon} from './icons';
import { darkNeutral, normalFont } from './utils';

export default function AddComment(){
    return (
      <div className='sm:flex hidden flex flex-row items-center'>

         <Image src='/linkedin/gid.jpg' alt='profile pics' width={32} height={32} className="rounded-full" />

         <div style={{border: `1px solid ${darkNeutral}`}} className='ml-2.5 grow flex flex-row items-center rounded-full'>

            <input type='text' className={`grow p-2.5 ml-2.5 border-none outline-none rounded-full ${normalFont} text-[#000000BF] `} placeholder='Add a comment' />
            <div className='flex-none p-2.5 rounded-full cursor-pointer hover:bg-[rgb(245,245,245)]'>
              <EmojiIcon/>
            </div>
  
            <div className='flex-none p-2.5 rounded-full cursor-pointer hover:bg-[rgb(245,245,245)]'>
              <ImageIcon/>
            </div>
         </div>
         
      </div>
    )
  }