const code = {
    language: 'tsx',
    code: `//Made with Next.js and TailwindCSS

//download NeueHaasGrotesk and link it to your code
//style.css
@font-face {
  font-family: 'NeueHaasGrotesk';
  src: url('../fonts/NeueHaasGrotesk/NeueHaasDisplayLight.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
  
@font-face {
  font-family: 'NeueHaasGrotesk medium';
  src: url('../fonts/NeueHaasGrotesk/NeueHaasDisplayMediu.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
  
.font-neue {
  font-family: 'NeueHaasGrotesk', Helvetica, Arial, sans-serif;
}

.font-neue-medium {
  font-family: 'NeueHaasGrotesk medium', Helvetica, Arial, sans-serif;
}

//page.tsx
'use client';

import { useState, useEffect } from 'react';

import './style.css';

export default function ShopifyHero(){
  return (
    <div style={{ backgroundImage: "url('/shopify/hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}} className="font-neue bg-black pb-10">
        <video autoPlay={true} className="absolute size-full object-cover" loop muted playsInline src="/shopify/video.webm"></video>
        <div className="relative px-4 pt-20 mx-1 md:mx-6 lg:mx-20">
          <div className="lg:text-8xl text-6xl mt-[17%] mb-10 font-light text-white">
            <p className='leading-none'>Be the next</p>
            <Slider/>
          </div>

          <div className="text-lg md:text-2xl text-white mb-8">
            Dream big, build fast, and grow far on Shopify.
          </div>

          <div className="flex flex-col sm:flex-row gap-y-4 items-center justify-between">
            <div className='flex-none flex flex-col sm:flex-row w-full sm:w-auto items-center sm:gap-x-4 gap-y-4'>
              <button className="w-full bg-white text-basr sm:text-lg font-neue-medium text-gray-900 px-6 py-2 sm:py-3 rounded-full font-medium">
                Start free trial
              </button>
              <div className="text-sm text-white">
                Get 3 days free
                then 1 month for $1
              </div>
            </div>
          
            <button type="button" className="w-full sm:w-auto justify-center inline-flex items-center gap-x-4 py-2 px-5 text-white text-center bg-[rgba(255,255,255,0.15)]  rounded-full transition-colors group hover:bg-white hover:text-black sm:hover:bg-white/15 sm:hover:text-white animate-fade-in-200ms-linear">
              <span className="relative overflow-hidden inline-block w-[11px] h-[11px]">
                <svg viewBox="0 0 24 24" aria-hidden="true" height="11" width="11" className="translate-x-[-50px] group-hover:translate-x-0 transition-transform duration-500 absolute top-0 left-0"><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0003C22 12.4529 21.7547 12.8707 21.3533 13.1021L8.02 20.8161C7.808 20.9383 7.57067 21 7.33333 21C7.10667 21 6.88 20.9447 6.676 20.8329C6.25867 20.604 6 20.1772 6 19.7143V4.28627C6 3.82343 6.25867 3.39659 6.676 3.16774C7.09333 2.9376 7.608 2.94532 8.02 3.18445L21.3533 10.8985C21.7547 11.1299 22 11.5477 22 12.0003Z" fill="currentColor"></path></svg>
                <svg viewBox="0 0 24 24" aria-hidden="true" height="11" width="11" className="translate-x-0 group-hover:translate-x-[50px] transition-transform duration-500 opacity-60"><path fillRule="evenodd" clipRule="evenodd" d="M22 12.0003C22 12.4529 21.7547 12.8707 21.3533 13.1021L8.02 20.8161C7.808 20.9383 7.57067 21 7.33333 21C7.10667 21 6.88 20.9447 6.676 20.8329C6.25867 20.604 6 20.1772 6 19.7143V4.28627C6 3.82343 6.25867 3.39659 6.676 3.16774C7.09333 2.9376 7.608 2.94532 8.02 3.18445L21.3533 10.8985C21.7547 11.1299 22 11.5477 22 12.0003Z" fill="currentColor"></path></svg>
              </span> 
              <span className=" text-left text-lg sm:text-lg leading-none">Why we build Shopify</span>
            </button>
          </div>
        </div>
      </div>
  )
}

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    [{title: "store", delay: "delay-0"}, {title: "\u00A0they", delay: "delay-300"}, {title: "\u00A0line", delay: "delay-[600ms]" }, {title: "\u00A0up", delay: "delay-[900ms]"}, {title: "\u00A0for", delay: "delay-[1200ms]"}],
    [{title: "big", delay: "delay-0"}, {title: "\u00A0thing", delay: "delay-300"}],
    [{title: "one", delay: "delay-0"},{title: "\u00A0to", delay: "delay-300"}, {title: "\u00A0watch", delay: "delay-[600ms]"} ],
    [{title: "category", delay: "delay-0"}, {title: "\u00A0creator", delay: "delay-300"}],
    [{title: "unicorn", delay: "delay-0"}, {title: "\u00A0startup", delay: "delay-300"}],
    [{title: "household", delay: "delay-0"}, {title: "\u00A0name", delay: "delay-300"}],
    [{title: "global", delay: "delay-0"}, {title: "\u00A0startup", delay: "delay-300"}],
    [{title: "solo", delay: "delay-0"}, {title: "\u00A0flier", delay: "delay-300"}]
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide every 5 seconds
  
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <div className="relative w-full h-[120px] sm:h-[60px] lg:h-[100px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className={\`absolute top-0 left-0 w-full h-full flex flex-row flex-wrap\`}>
          {
            slide.map(item => 
              <p key={item.delay} className={\` transition-transform duration-1000 leading-none \${item.delay} \${ index === currentIndex ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[200%] opacity-0'}\`}>
                {item.title}
              </p>
            )
          }
        </div>
      ))}
    </div>
  );
};

`
}

export default code;