const code = {
    language: 'tsx',
    code:`//style.css
@font-face {
  font-family: 'Neuemontreal';
  src: url('../fonts/neue_montreal/NeueMontreal-Regular.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
  
.font-neue {
  font-family: 'Neuemontreal', Arial, sans-serif;
}

import { ArrowRight } from 'lucide-react';

import '../stylesheet/style.css'

export const metadata = {
  title: 'Upwork Homepage UI'
}

export default function Home() {
  return (
    <div className="relative w-[97.5%] md:w-[95%] xl:w-[90%] mt-10 mx-auto px-3 md:px-6 py-4 md:py-12 rounded-lg font-neue text-white bg-black ">
      <div style={{ backgroundImage: "url('/upwork/design-block-6-pics.jpg')"}}  className='absolute inset-x-0  top-0 h-[50vh] sm:h-full bg-cover rounded-lg bg-center z-[1] '></div>
      <div className='relative z-[2]'>
        <p className="mb-20 text-xl sm:text-2xl">For clients</p>
        <div className="mb-4 sm:mb-8">
          <h1 className="mb-6 text-[40px] sm:text-[64px] whitespace-pre-line leading-none">
            {\`Find talent 
            your way\`}
          </h1>
          <p className="text-base sm:text-2xl sm:whitespace-pre-line">
            {\`Work with the largest network of independent 
            professionals and get things done—from quick 
            turnarounds to big transformations.\`}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <div className="w-full flex flex-row justify-between md:flex-col gap-4 pt-[35px] md:pt-4 p-4 rounded-lg bg-[#108A00] text-white hover:bg-white hover:text-[#108A00] transition-colors cursor-pointer">
            <h3 className="text-xl md:text-2xl xl:text-4xl whitespace-pre-line">
              {\`Post a job 
              and hire a pro\`}
            </h3>
            <div className="flex flex-row items-center text-sm xl:text-base ">
              <span className="mr-2">Talent Marketplace™</span>
              <ArrowRight size={15} />
            </div>
          </div>


          <div className="w-full flex flex-row justify-between md:flex-col gap-4 pt-[35px] md:pt-4 p-4 rounded-lg bg-[#108A00] text-white hover:bg-white hover:text-[#108A00]  transition-colors cursor-pointer">
            <h3 className="text-xl md:text-2xl xl:text-4xl whitespace-pre-line">
              {\`Browse and 
              buy projects\`}
            </h3>
            <div className="flex flex-row items-center text-sm xl:text-base ">
              <span className="mr-2">Project Catalog™</span>
              <ArrowRight size={15} />
            </div>
          </div>


          <div className="w-full flex flex-row justify-between md:flex-col gap-4 pt-[35px] md:pt-4 p-4 rounded-lg bg-[#108A00] text-white hover:bg-white hover:text-[#108A00]  transition-colors cursor-pointer">
            <h3 className="text-xl md:text-2xl xl:text-4xl whitespace-pre-line">
              {\`Get advice from 
              an industry expert\`}
            </h3>
            <div className="flex flex-row items-center text-sm xl:text-base">
              <span className="mr-2">Consultations</span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`
}

export default code;