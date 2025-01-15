import Header from '@/app/components/Header';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

import code from '@/app/code_block/linkedinPost';

import ConnectionEngagement from './components/ConnectionEngagement';
import PostSender from './components/PostSender';
import TextContent from './components/TextContent';
import PostEngagements from './components/PostEngagements';
import Engage from './components/Engage';
import AddComment from './components/AddComment';

export const metadata = {
  title: 'Linkedin Posts'
}

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
    textContent: "<span style='color:#0A66C2'>#hiring</span>\n <span style='color:#0A66C2'>#frontendjobs</span>\n <span style='color:#0A66C2'>#backendjobs</span>",
    likes: '1',
    comments: '5'
  }
]


export default function Post() {
  return (
    <main>
      <div className="p-2 pb-16 2xl:w-[1000px] mx-auto">
        <Header/>
        <Nav parentUrl={{title: 'LinkedIn', link: '/linkedin'}} pageTitle='LinkedIn posts' code={code}/>
        <div className=' py-2.5  bg-[#c0c1b833]'>
        {
          data.map(post => 
            <div key={post.postId} className="w-full sm:w-4/6 lg:w-1/2 xl:w-1/3 2xl:w-[500px] py-2 px-4 mx-auto mb-2 sm:rounded-lg bg-white">
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
        <Footer/>
      </div>
    </main>
  )
}


  

  

  
 
  
 
  

  
 