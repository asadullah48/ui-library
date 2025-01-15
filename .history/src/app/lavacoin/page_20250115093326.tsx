import Header from '@/app/components/Header';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';

import code from '@/app/code_block/lavacoin';

import Hero from "./components/Hero";
import Exchanges from "./components/Exchanges";
import WhatIsLavaCoin from "./components/WhatIsLavaCoin";
import GettingStarted from "./components/GettingStarted";
import FAQ from "./components/FAQ";

//Page metadata
export const metadata = {
title: 'LavaCoin UI'
}

export default function Home(){
    return (
      <main className="bg-black overflow-auto pb-16">
        <Header/>
        <Nav pageTitle='LavaCoin UI' code={code}/>
        <div>
          <Hero/>
          <Exchanges/>
          <WhatIsLavaCoin/>
          <GettingStarted/>
          <FAQ/>
          <div className="xl:w-[80%] w-[calc(100%-20px)] mx-auto mt-[50px] p-[10px] text-[12px] xl:text-base text-white border-t border-t-[hsl(3,15%,19%)] text-center">
            © 2013-2024 | The LavaCoin Foundation & LavaCoin Project. All rights reserved.
          </div>
        </div>    
        <Footer/>
      </main>
    )
}