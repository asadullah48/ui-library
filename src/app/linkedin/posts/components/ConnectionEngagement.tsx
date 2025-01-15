import {ThreeDotIcon, ClearIcon} from './icons';
import {smallFont, lightNeutral} from './utils'

import Image from 'next/image';
export default function ConnectionEngagement({profilename}:{profilename:string}){
    return (
      <div style={{borderBottom: `1px solid ${lightNeutral}`}} className='flex flex-row items-center py-1'>

        <Image src='/linkedin/gid.jpg' alt='profile pic' width={24} height={24} className="rounded-full mr-1" />
        <p className={`${smallFont} mr-auto py-2`}>
          <span className='text-[#000000E6] font-bold hover:text-[#0A66C2] hover:underline cursor-pointer'>{profilename}</span> 
          <span className="text-[#000000E6] sm:text-[rgba(0,0,0,0.6)]">&nbsp;&nbsp;likes this</span> 
        </p>
        <div className='p-2 rounded-full rotate-90 sm:rotate-0 hover:bg-[rgb(245,245,245)] cursor-pointer' >
          <ThreeDotIcon/>
        </div>
        <div className='p-2 rounded-full hover:bg-[rgb(245,245,245)] cursor-pointer'>
          <ClearIcon/>
        </div>

      </div>
    )
  }