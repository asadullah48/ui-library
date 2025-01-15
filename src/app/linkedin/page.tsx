import Header from '@/app/components/Header';
import GroupNav from '../components/GroupNav';
import Card from '@/app/components/Card';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Linkedin UI'
}

export default function Page(){
  const projects = [
        {
          href: '/linkedin/posts',
          imageSrc: '/linkedin/linkedin_post.png',
          alt: 'linkedin post user interface',
          title: 'Linkedin posts'
        }
      ];
    
      return (
        <main className="p-2 min-h-screen relative pb-16 2xl:w-[1000px] mx-auto">
          <Header/>
          <GroupNav pageTitle='LinkedIn UI'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-2 lg:mt-4">
            {projects.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>
          <Footer/>
        </main>
      );
}