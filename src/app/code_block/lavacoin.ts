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

//this is a client component
'use client';

import {useState} from 'react';

import Image from 'next/image';

//Page metadata
export const metadata = {
  title: 'LavaCoin UI'
}

export default function Home(){
    return (
      <main className="bg-black overflow-auto">
        <Hero/>
        <Exchanges/>
        <WhatIsLavaCoin/>
        <GettingStarted/>
        <FAQ/>
        <div className="xl:w-[80%] w-[calc(100%-20px)] mx-auto mt-[50px] p-[10px] text-[12px] xl:text-base text-white border-t border-t-[hsl(3,15%,19%)] text-center">
            © 2013-2024 | The LavaCoin Foundation & LavaCoin Project. All rights reserved.
        </div>
      </main>
    )
}

function Hero(){
    return (
      <div  className='h-[30vh] sm:h-[50vh] lg:h-[70vh] xl:h-screen' style={{  backgroundImage:  "url('/volcano/icontrast.jpg')",backgroundPosition: "bottom center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="text-center text-white pt-[10%]">
          <h1 className="text-[50px] lg:text-[70px] xl:text-[90px] font-bold">LavaCoin</h1>
          <p className="text-base xl:text-[30px]">The hottest currency on the planet</p>
        </div>
      </div>
    )
}

function Exchanges() {
  return (
    <div className="flex flex-row sm:justify-center items-center gap-x-10 scrollbar-hide flex-nowrap overflow-x-auto text-white w-[calc(100%-40px)] mx-auto mt-[10px] xl:mt-[20px]">
      <div className="flex-none flex flex-row items-center gap-x-2.5">
        <RaydiumLogo/>
        <p className="text-5 xl:text-[30px]">Raydium</p>
      </div>
      <div className="flex-none flex flex-row items-center gap-x-2.5">
        <Image
          src="/volcano/jupiter-logo.svg"
          alt="Jupiter logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <p className="text-5 xl:text-[30px]">Jupiter</p>
      </div>
      <div className="flex-none">
        <Image
          src="/volcano/coinbase.png"
          alt="Coinbase logo"
          width={200}
          height={200}
          className="w-[100px] xl:w-[200px] relative"
        />
      </div>
      <div className="flex-none">
        <Image
          src="/volcano/dextools.svg"
          alt="Dextools logo"
          width={200}
          height={200}
          className="w-[100px] xl:w-[200px]"
        />
      </div>
    </div>
  );
}

function RaydiumLogo(){
    return (
      <svg className='w-10 h-10' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.3297 15.8661V28.7492L20 37.021L5.66234 28.7492V12.1978L20 3.91808L31.013 10.2797L32.6753 9.32068L20 2L4 11.2388V29.7083L20 38.947L36 29.7083V14.9071L34.3297 15.8661Z" fill="url(#a)"></path>
          <path d="M15.988 28.7572H13.5904V20.7173H21.5824C22.3385 20.7089 23.061 20.4031 23.5934 19.8662C24.1259 19.3293 24.4255 18.6043 24.4276 17.8481C24.4319 17.4742 24.3597 17.1034 24.2154 16.7584C24.0711 16.4134 23.8577 16.1016 23.5884 15.8421C23.3278 15.5743 23.0158 15.362 22.6711 15.2178C22.3264 15.0736 21.9561 15.0005 21.5824 15.003H13.5904V12.5574H21.5904C22.991 12.5658 24.3319 13.1259 25.3222 14.1163C26.3126 15.1067 26.8727 16.4475 26.8811 17.8481C26.8897 18.9202 26.5627 19.9681 25.9461 20.8451C25.3785 21.6842 24.5786 22.3397 23.6444 22.7313C22.7193 23.0246 21.7537 23.1703 20.7832 23.1628H15.988V28.7572Z" fill="url(#b)"></path>
          <path d="M26.8252 28.5574H24.028L21.8701 24.7932C22.7238 24.741 23.5659 24.5688 24.3716 24.2817L26.8252 28.5574Z" fill="url(#c)"></path>
          <path d="M32.6593 13.1888L34.3137 14.1079L35.968 13.1888V11.2467L34.3137 10.2877L32.6593 11.2467V13.1888Z" fill="url(#d)"></path>
          <defs>
            <linearGradient id="a" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C200FB"></stop>
              <stop offset="0.489658" stopColor="#3772FF"></stop>
              <stop offset="1" stopColor="#5AC4BE"></stop>
            </linearGradient>
            <linearGradient id="b" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C200FB"></stop>
              <stop offset="0.489658" stopColor="#3772FF"></stop>
              <stop offset="1" stopColor="#5AC4BE"></stop>
            </linearGradient>
            <linearGradient id="c" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C200FB"></stop>
              <stop offset="0.489658" stopColor="#3772FF"></stop>
              <stop offset="1" stopColor="#5AC4BE"></stop>
            </linearGradient>
            <linearGradient id="d" x1="35.9717" y1="11.2489" x2="2.04291" y2="24.817" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C200FB"></stop>
              <stop offset="0.489658" stopColor="#3772FF"></stop>
              <stop offset="1" stopColor="#5AC4BE"></stop>
            </linearGradient>
          </defs>
        </svg>
    )
}

function WhatIsLavaCoin(){
    return (
        <div className="flex flex-col xl:flex-row flex-center items-center  bg-black text-white w-[calc(100%-40px)] sm:w-[50%] xl:w-[70%] mx-auto mt-[10vh] xl:mt-[30vh]">
          <div className="order-last">
            <p className="text-[30px] xl:text-[50px] text-center leading-loose">What is LavaCoin?</p>
            <p className="text-base mb-[5px] leading-normal">LavaCoin is a volcanic-themed memecoin that brings the heat to the crypto world. Inspired by the raw power of nature, LavaCoin is designed to erupt into the scene, offering a fun and fiery way to engage with digital currency. Whether you&apos;re a seasoned trader or just having fun with crypto, LavaCoin lets you harness the molten energy of the blockchain.</p>
            <p>With its explosive potential, LavaCoin is set to flow through the crypto market like lava down a mountainside—unstoppable, hot, and ready to ignite the future of digital currency.</p>
          </div>
          <div  className="flex-none xl:order-last leading-normal">
            <Image src="/volcano/coin.png" alt="Coin" width={1920} height={1080} className="w-[100%] sm:w-[50vw] xl:w-[35vw]" />
          </div>
        </div>
    )
}

function GettingStarted(){
    return (
        <div className="mt-[10vh] xl:mt-[30vh] text-white text-center">
          <h1 className=" text-[30px] xl:text-[50px]">Getting Started</h1>

          <div className="flex flex-col lg:flex-row px-5 xl:px-[15%] py-5">
            <div className="lg:w-[30%] w-full mr-auto bg-[hsla(3,15%,19%,0.48)] p-5 mb-5 xl:mb rounded-lg">
              <p className="text-5 font-bold">Choose your wallet</p>
              <p className="text-base">A wallet is necessary for people wanting to use, trade, or hold LavaCoin. You can pick a wallet</p>
            </div>
            
            <div className="lg:w-[30%] w-full mr-auto bg-[hsla(3,15%,19%,0.48)] p-5 mb-5 xl:mb rounded-lg">
              <p className="text-5 font-bold">Configure your wallet</p>
              <p className="text-base">After downloading, you can configure your wallet according to our</p>
            </div>
            <div className="lg:w-[30%] w-full mr-auto bg-[hsla(3,15%,19%,0.48)] p-5 mb-5 xl:mb rounded-lg">
              <p className="text-5 font-bold">Get some LavaCoin</p>
              <p className="text-base">There’s lots of ways to get your hands on some LavaCoin.</p>
            </div>
          </div>
        </div>
    )
}

function FAQ(){
    let [displayed, setDisplayed] = useState(0);

    let handleClick= (value:number) => {
        if(displayed === value){
            setDisplayed(10)
        } else {
            setDisplayed(value)
        }
    }
    return (
        <div className="mt-[10vh] xl:mt-[30vh] w-[calc(100%-20px)] sm:w-[50%] mx-auto text-white text-left">
          <h1 className="text-[30px] xl:text-[50px] text-center">Frequently Asked Questions</h1>
          <div>
            <div className="text-base border-b border-b-[hsl(3,15%,19%)]">
              <p className="cursor-pointer p-4 flex flex-row items-center justify-between" onClick={()=>handleClick(1)}>
                <span>A whale holds nearly 30% of LavaCoin supply! Is this true?</span>
                <span className="flex-none">
                  <Image src='/volcano/dropdown.png' alt='dropdown' width={20} height={20} />
                </span>          
              </p>
              {
                displayed === 1 &&
                <p className=" p-4">A common source of FUD surrounding LavaCoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top LavaCoin wallets are cold wallets or hot wallets controlled by exchanges and brokers, and they thus represent LavaCoin held in custody for thousands - or hundreds of thousands, even - of people.</p>
              }                        
            </div>
              
            <div className="text-base border-b border-b-[hsl(3,15%,19%)]">
              <p className="cursor-pointer p-4 flex flex-row items-center justify-between" onClick={()=>handleClick(2)}>
                <span>Lavacoin has no utility!</span>
                <span className="flex-none">
                  <Image src='/volcano/dropdown.png' alt='dropdown' width={20} height={20} />
                </span>
              </p>
              {
                displayed === 2 &&
                <p className="p-4">Oh yes it does, and it always has! The simple fact is that money has utility - and Lavacoin is money! Indeed, LavaCoin is one of the few cryptocurrencies that has been used for this main purpose from day one. </p>
              }
            </div>

            <div className="text-base border-b border-b-[hsl(3,15%,19%)]">
              <p className="cursor-pointer p-4 flex flex-row items-center justify-between" onClick={()=>handleClick(3)}>
                <span>Can you put a cap on Lavacoin?</span>
                <span className="flex-none">
                  <Image src='/volcano/dropdown.png' alt='dropdown' width={20} height={20} />
                </span>
              </p>
              {
                displayed === 3 &&
                <p className="p-4">Right now, and for the next hundred years or so, Lavacoin operates like, and will continue to operate like, most other crypto assets. “Capped” assets are nowhere near mined out – and will continue adding to their supply, just like Lavacoin, for the foreseeable future.</p>
              }   
            </div>

            <div className="text-base border-b border-b-[hsl(3,15%,19%)]">
              <p className="cursor-pointer p-4 flex flex-row items-center justify-between" onClick={()=>handleClick(4)}>
                <span>LavaCoin and coin burning</span>
                <span className="flex-none">
                  <Image src='/volcano/dropdown.png' alt='dropdown' width={20} height={20} />
                </span>
              </p>    
              {
                displayed === 4 &&
                <p className=" p-4">Lavacoin does not need coin burning marketing mechanisms that new tokens and other chains have attempted to implement to artificially inflate their prices. Simplez.</p>
              }
            </div>

            <div className="text-base">
              <p className="cursor-pointer p-4 flex flex-row items-center justify-between" onClick={()=>handleClick(5)}>
                <span>LavaCoin has no developers!</span>
                <span className="flex-none">
                  <Image src='/volcano/dropdown.png' alt='dropdown' width={20} height={20} />
                </span>
              </p>
              {
                displayed === 5 &&
                <p className="p-4">Oh, yes it does - and it always has! Lavacoin&apos;s primary purpose has always been to be used as a currency. Lavacoin was originally a fork of a cryptocurrency called Luckycoin - itself a fork of Litecoin.</p>
              }
            </div>
          </div>
        </div>
    )
}
`
}

export default code;