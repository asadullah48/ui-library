 const code = {
    language: 'tsx',
    code: `//Made with Next.js and TailwindCSS

//How to run the code
//1. Install Next.js and TailwindCSS
//2. create a page.tsx file within the src/app folder
//3. copy and paste the code into the file
//4. navigate to your project directory in the CLI and run 'npm run dev' to start the server
//5. open http://localhost:3000/ in your web browser and check the result
//6. Use the code as you like

//import the Next.js Image Component
import Image from "next/image";

//Page metadata
export const metadata = {
  title: 'Linkedin Posts'
}

//data fetched from the API route
const data = [
  {
    postId: 'dfghjkjw8wsjhgs',
    profileName: 'Gideon Akinsanmi',
    bio: 'Software developer | Reactjs | JavaScript',
    likedBy: 'Gid Akins jnr',
    date: '3d',
    connectionLevel: '2nd',
    textContent: "I'm thrilled to announce that I've joined OpenAI as a Frontend Developer!",
    likes: '1',
    comments: '5'
  },
  {
    postId: 'fghsshw9393j',
    profileName: 'Gid Akins Jnr',
    bio: 'Technical Writer | Reactjs | Writer at freecodecamp | AI Enthusiast ',
    likedBy: 'Gideon Akinsanmi',
    date: '3d',
    connectionLevel: '2nd',
    textContent: "<span style='color:#0A66C2'>#hiring</span>\\n <span style='color:#0A66C2'>#frontendjobs</span>\\n <span style='color:#0A66C2'>#backendjobs</span>",
    likes: '1',
    comments: '5'
  }
]
//font sizes and colors
const smallFont = 'text-xs';
const normalFont = 'text-sm';
const largeFont = 'text-base';

const linkColor = '#0A66C2';
const lightNeutral = 'rgba(0,0,0,0.2)';
const darkNeutral = 'rgba(0,0,0,0.6)';
const textColor = '#000000E6';

export default function Post() {
  return (
    <main>
      <div className='py-2.5 bg-[#c0c1b833]'>
        {
          data.map(post => 
            <div key={post.postId} className="w-full sm:w-4/6 lg:w-1/2 xl:w-1/3 2xl:w-1/4 py-2 px-4 mx-auto mb-2 sm:rounded-lg bg-white">
              <ConnectionEngagement profilename={post.likedBy} />
              <PostSender profileName={post.profileName} level={post.connectionLevel} bio={post.bio} date={post.date}/>
              <TextContent content={post.textContent}/>
              <PostEngagements likes={post.likes} comments={post.comments}/>
              <Engage/>
              <AddComment/>
            </div>
          )
        }
      </div>
    </main>
  )
}

function ConnectionEngagement({profilename}:{profilename:string}){
  return (
    <div style={{borderBottom: \`1px solid \${lightNeutral}\`}} className='flex flex-row items-center py-1'>
      <Image src="/linkedin/gid.jpg" alt="profile pic" width={24} height={24} className="rounded-full mr-1" />
      <p className="text-xs mr-auto py-2">
        <span className="text-[#000000E6] font-bold hover:text-[#0A66C2] hover:underline cursor-pointer">{profilename}</span> 
        <span className="text-[#000000E6] sm:text-[rgba(0,0,0,0.6)]">&nbsp;&nbsp;likes this</span> 
      </p>
      <div className="p-2 rounded-full rotate-90 sm:rotate-0 hover:bg-[rgb(245,245,245)] cursor-pointer">
        <ThreeDotIcon/>
      </div>
      <div className="p-2 rounded-full hover:bg-[rgb(245,245,245)] cursor-pointer">
        <ClearIcon/>
      </div>
    </div>
  )
}

interface PostSenderProps {
    profileName:string, 
    level:string, bio:string, 
    date:string
}

function PostSender({profileName, level, bio, date}:PostSenderProps){
  return (
    <div className='flex flex-row py-2 items-center'>
      <Image src='/linkedin/gid.jpg' alt='profile pics' width={48} height={48}  className="rounded-full" />
      <div className='ml-2.5 w-3/5 mr-auto'>
        <p className={normalFont}>
          <span style={{color: textColor,fontWeight:'bold'}}>{profileName}</span> 
          <span style={{color: darkNeutral}}>&nbsp;&#x2022;&nbsp;{level}</span>
        </p>
        <p style={{color: darkNeutral}} className={\`\${smallFont} truncate w-full\`}>{bio}</p>
        <p style={{color: darkNeutral}} className={\`flex flex-row items-center \${smallFont}\`}>
          <span>{date}</span> 
          <span>&nbsp;&#x2022;&nbsp;</span> 
          <Globe/>
        </p>
      </div>

      <div className='flex flex-row items-center p-1 hover:bg-[#a3d1ff] rounded-sm cursor-pointer'>
        <FollowIcon/>
        <p className={largeFont} style={{color: linkColor,fontWeight:'bold'}}>&nbsp;Follow</p>
      </div>
    </div>
  )
}

function TextContent({content}:{content:string}){
  return (
    <div>
      <div className={normalFont} dangerouslySetInnerHTML={{ __html: content.replace(/\\n/g, '<br />') }} />
    </div>
  )
}

interface PostEngagementsProps {
    likes:string, 
    comments:string
}

function PostEngagements({likes, comments}: PostEngagementsProps){
  return (
    <div style={{color: darkNeutral, borderBottom: \`1px solid \${lightNeutral}\`}} className='flex flex-row justify-between py-1 mb-2'>
      <p className={\`\${normalFont} flex flex-row items-center\`}>
        <Reaction/>
        <span>&nbsp;{likes}</span>
      </p>
      <p className={normalFont}>{comments} comments</p>
    </div>
  )
}

function Engage(){
  return (
    <div className='flex flex-row sm:mb-2'>
      <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
        <LikeIcon/>
        <p className={\`\${normalFont} text-[#000000BF]\`}>Like</p>
      </div>
  
      <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
        <CommentIcon/>
        <p className={\`\${normalFont} text-[#000000BF]\`}>Comment</p>
      </div>
  
      <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
        <RepostIcon/>
        <p className={\`\${normalFont} text-[#000000BF]\`}>Repost</p>
      </div>
  
      <div className='grow flex flex-col sm:flex-row justify-center items-center gap-x-1 py-2.5 px-2 rounded-xl hover:bg-[rgb(245,245,245)] cursor-pointer'>
        <SendIcon/>
        <p className={\`\${normalFont} text-[#000000BF]\`}>Send</p>
      </div>
    </div>
  )
}

function AddComment(){
  return (
    <div className='sm:flex hidden flex flex-row items-center'>
      <Image src='/linkedin/gid.jpg' alt='profile pics' width={32} height={32} className="rounded-full" />
      <div style={{border: \`1px solid \${darkNeutral}\`}} className='ml-2.5 grow flex flex-row items-center rounded-full'>
        <input type='text' className={\`grow p-2.5 ml-2.5 border-none outline-none rounded-full \${normalFont} text-[#000000BF] \`} placeholder='Add a comment' />
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

function ThreeDotIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='w-[16px] h-[16px]'  id="overflow-web-ios-small"  data-supported-dps="16x16" fill="currentColor">
      <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
    </svg>
  )
}
  
function ClearIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='w-[16px] h-[16px]'  data-supported-dps="16x16" fill="currentColor">
      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg>
  )
}

 function Globe(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className='w-[14px] h-[14px] fill-[rgba(0,0,0,0.6)]' focusable="false">
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
    </svg>
  )
}
  
function FollowIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  className='w-[16px] h-[16px] fill-[#0A66C2]' id="connect-small"  data-supported-dps="16x16" fill="currentColor">
      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
    </svg>
  )
}

function Reaction(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-[16px] h-[16px]' viewBox="0 0 16 16" id="like-consumption-small" data-supported-dps="16x16">
        <g>
          <path d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" fill="none"/>
          <circle cx="8" cy="8" r="7" fill="#378fe9"/>
          <path d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z" fill="#d0e8ff" fillRule="evenodd"/>
          <path d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08" fill="none" stroke="#004182" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    )
  }
  
  
  function LikeIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[24px] h-[24px]' id="thumbs-up-outline-medium"  data-supported-dps="24x24" fill="currentColor">
        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
      </svg>
    )
  }
  
function CommentIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[24px] h-[24px]' id="comment-medium"  data-supported-dps="24x24" fill="currentColor">
        <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
      </svg>
    )
  }
  
function RepostIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[24px] h-[24px]' id="repost-medium"  data-supported-dps="24x24" fill="currentColor">
        <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
      </svg>
    )
  }
  
function SendIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-[24px] h-[24px]' id="send-privately-medium"  data-supported-dps="24x24" fill="currentColor">
        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
      </svg>
    )
  }
  
  
function EmojiIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="emoji-medium" className='w-[24px] h-[24px]'  data-supported-dps="24x24" fill="currentColor">
    <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
  </svg>
    )
  }
  
function ImageIcon(){
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-medium" className='w-[24px] h-[24px]'  data-supported-dps="24x24" fill="currentColor">
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
  </svg>
    )
  }
  
`
}

export default code;