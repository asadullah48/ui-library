


export default function Page(){
    return (
      <main className="min-h-screen bg-black flex flex-col justify-center items-center text-center p-8">
        <div className="animate-bounce" style={{ animation: 'bounce 2s infinite' }}>
          <div className="text-[#08090a] text-base bg-[#e6e6e6] px-2 py-1 rounded text-sm whitespace-nowrap mb-2">
            hover
          </div>
          {/* Down arrow */}
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#e6e6e6] mx-auto"/>
        </div>
        <ScrambleText/>
        <h1 className="text-[24px] md:text-[40px] lg:text-[56px] text-white mb-4">Linear is a purpose-built tool for planning and building products</h1>
        <p className="text-base lg:text-[21px] text-[#ffffffb3] mb-4">Meet the system for modern software development. Streamline issues, projects, and product roadmaps.</p>
        <div className="flex flex-col justify-center w-full md:flex-row gap-x-4 text-sm decoration-none ">
          <a className="text-[#08090a] bg-[#e6e6e6] p-3 rounded-xl cursor-pointer">Start building</a>
          <a className="flex flex-row justify-center items-center gap-x-2 text-[#ffffffb3] p-3 hover:bg-[#8a8f985f] rounded-xl cursor-pointer "> <span>New conversation on quality</span> <CaretRight/></a>
        </div>
      </main>
    )
  }
  
  function CaretRight(){
    return (
      <svg className="fill-[#ffffffb3]"  width="16" height="16" viewBox="0 0 16 16"  role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path></svg>
    )
  }
  
  const ScrambleText = () => {
      const text = "LINEAR";
      const scrambledTexts = [
        "LINEAR",
        "DGWJSO",
        "WYXLKE",
        "EYCHSL",
        "RYWOSK",
        "WYW9DU"
      ];
      
      return (
        <div className="">
          <style>{`
            @keyframes slideUp {
              from { transform: translateY(0); }
              to { transform: translateY(-85%); }
            }
            
            .character-strip {
              transition-property: transform;
              transition-timing-function: steps(11);
            }
            
            .group:hover .character-strip {
              animation: slideUp 0.25s steps(11) forwards;
            }
          `}</style>
          
          <a href="#" className="group relative font-mono text-2xl md:text-3xl overflow-hidden no-underline">
            {text.split('').map((char, index) => (
              <span key={index} className="relative inline-block whitespace-pre overflow-hidden" style={{ height: '1.2em', width: char === ' ' ? '0.5em' : '1em'}}>
                <span className="character-strip absolute top-0 left-0 flex flex-col" style={{ animationDelay: `${index * 30}ms`,lineHeight: '1.2em'}}>
                  {
                    scrambledTexts.map(text => (
                    <span key={text} className="text-white">{text[index] || ' '}</span>
                  ))}
                  
                  <span className="text-white">{char}</span>
                </span>
              </span>
            ))}
          </a>
        </div>
      );
    };
    