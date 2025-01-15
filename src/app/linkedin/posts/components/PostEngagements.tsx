import { Reaction } from "./icons";
import { darkNeutral, lightNeutral, normalFont } from "./utils";

interface PostEngagementsProps {
    likes:string, 
    comments:string
}

export default function PostEngagements({likes, comments}: PostEngagementsProps){
    return (
      <div style={{color: darkNeutral, borderBottom: `1px solid ${lightNeutral}`}} className='flex flex-row justify-between py-1 mb-2'>
        <p className={`${normalFont} flex flex-row items-center`}>
          <Reaction/>
          <span>&nbsp;{likes}</span>
        </p>
        <p className={normalFont}>{comments} comments</p>
      </div>
    )
}