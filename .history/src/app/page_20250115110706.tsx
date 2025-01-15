import Header from '@/app/components/Header';
import Card from '@/app/components/Card';
import Footer from '@/app/components/Footer';

export default function Home() {
  const projects = [
    {
      href: '/linkedin',
      imageSrc: '/linkedin/linkedin_post.png',
      alt: 'linkedin post user interface',
      title: 'LinkedIn UI'
    },
    {
      href: '/lavacoin',
      imageSrc: '/volcano/coin.png',
      alt: 'LavaCoin user interface',
      title: 'LavaCoin UI (personal project)'
    },
    {
      href: '/shopify',
      imageSrc: '/shopify/hero-pics.png',
      alt: 'Shopify homepage user interface',
      title: 'Shopify Homepage UI'
    },
    {
      href: '/upwork',
      imageSrc: '/upwork/block-6-ui-pics.png',
      alt: 'Upwork Homepage user interface',
      title: 'Upwork Homepage UI'
    },
    {
      href: '/github/pricing',
      imageSrc: '/github/github-pricing-page.png',
      alt: 'GitHub pricing page UI',
      title: 'Github Pricing page redesign'
    }, 
    {
      href: '/stripe/contact-sales-form',
      imageSrc: '/stripe/contact-sales.png', 
      alt: 'Stripe Contact Sales Form',
      title: 'Stripe Contact form with an AI agent'
    },
    {
      href: '/metawin',
      imageSrc: '/metawin/hero.png', 
      alt: 'metawin homepage',
      title: 'Metawin homepage redesign'
    },
    {
      href: '/linear/hero',
      imageSrc: '/linear/pics.png',
      alt: 'Linear hero redesign',
      title: 'Linear hero redesign'
    }
  ];

  return (
    <main className="p-2 min-h-screen relative pb-16 2xl:w-[1000px] mx-auto">
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-2 lg:mt-4">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
      <Footer/>
    </main>
  );
}