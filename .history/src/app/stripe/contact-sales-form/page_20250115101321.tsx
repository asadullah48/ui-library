import Header from '@/app/components/Header';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

import code from '@/app/code_block/stripe_sales_form';

export const metadata = {
    title: 'Shopify Contact Sales Form'
  }
  
  export default function Page(){
        return (
          <main className="p-2 min-h-screen relative pb-16 2xl:w-[1000px] mx-auto">
            <Header/>
            <Nav pageTitle='Stripe Contact Sales Form' code={code}/>
            <iframe src='https://ai-apps-eta.vercel.app/' className='w-full h-[100vh]' allowFullScreen/>
            <Footer/>
          </main>
    );
  }