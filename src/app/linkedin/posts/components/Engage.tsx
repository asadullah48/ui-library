import {LikeIcon, CommentIcon, RepostIcon, SendIcon} from './icons';
import {normalFont} from './utils';

export default function Engage(){
    return (
      <div className='flex flex-row sm:mb-2'>
        <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
          <LikeIcon/>
          <p className={`${normalFont} text-[#000000BF]`}>Like</p>
        </div>
  
        <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
          <CommentIcon/>
          <p className={`${normalFont} text-[#000000BF]`}>Comment</p>
        </div>
  
        <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
          <RepostIcon/>
          <p className={`${normalFont} text-[#000000BF]`}>Repost</p>
        </div>
  
        <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
          <SendIcon/>
          <p className={`${normalFont} text-[#000000BF]`}>Send</p>
        </div>
      </div>
    )
  }