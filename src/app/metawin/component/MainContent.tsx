import { useEffect, useState } from 'react'

import { ThreeDotIcon, Discord, Twitter, Telegram, Switch, Fruit, Flames, Visa, Mastercard, GooglePay, ApplePay } from './icons';

import Image from 'next/image';

export default function MainContent({showAuthModal}:any){
  const [sidebarDisplayed, setSidebarDisplayed] = useState(true);
  return (
    <div className="flex flex-row min-h-screen bg-[#1a1d26]">
      {/* Sidebar */}
      <Sidebar sidebarDisplayed={sidebarDisplayed}/>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Header onClick={()=>setSidebarDisplayed(!sidebarDisplayed)} showAuthModal={showAuthModal}/>
        <div className="px-4 md:px-8 py-4">
          <HallOfFame />
          <Competition />
          <OtherPayment />
          <Activity showAuthModal={showAuthModal}/>
        </div>
      </main>
    </div>
  );
}

function Sidebar({sidebarDisplayed}:{sidebarDisplayed: boolean}){
  return (
    <aside className={`hidden lg:block h-screen bg-black p-2 sticky top-0 ${sidebarDisplayed? 'w-[250px]': 'w-0 overflow-hidden'} transition-all flex-none`}>
      <div className="bg-[#0f1115] p-4 rounded-lg">
        <p className="text-[#5f677c] text-sm font-bold mb-2">Join our Community</p>
        <div className="flex flex-row gap-2">
          <div className="group rounded-md cursor-pointer flex justify-center bg-slate-800/50 hover:bg-slate-700 grow p-2.5">
            <Discord />
          </div>
          <div className="group rounded-md cursor-pointer flex justify-center bg-slate-800/50 hover:bg-slate-700 grow p-2.5">
            <Twitter />
          </div>
          <div className="group rounded-md cursor-pointer flex justify-center bg-slate-800/50 hover:bg-slate-700 grow p-2.5">
            <Telegram />
          </div>
        </div>
      </div>
    </aside>
  )
}

interface HeaderProps {
  onClick: () => void;
  showAuthModal: () => void;
}

function Header({onClick, showAuthModal}:HeaderProps){
  return (
    <header className="px-4 md:px-8 py-4 border-b border-gray-800 bg-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <ThreeDotIcon onClick={onClick}/>
          <Image src="/metawin/logo.svg" alt="METAWIN"  width={0} height={0} className="h-4 md:h-6 w-auto" priority/>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={showAuthModal} className="text-white text-sm font-semibold">Sign In </button>
          <button onClick={showAuthModal} className="bg-blue-600 hover:bg-blue-500 transition-all text-white text-sm py-2 px-4 rounded-lg font-semibold">Register</button>
        </div>
      </div>
    </header>
  )
}



function HallOfFame(){
  const [enabled, setEnabled] = useState(false);

  const games = [
    { title: "METAWIN MILLIONAIRE", image:'/metawin/metawin_millionaire.jpg', winner: "Beznik", amount: {usd: "$1,000,000", crypto: "1000000 USDC" } },
    { title: "SUPERMANIA", image:'/metawin/supermania.jpg', winner: "mjouan", amount: {usd: "$697,275", crypto: '263.0114 ETH'}  },
    { title: "SWEET BONANZA", image:'/metawin/sweet_bonanza.png', winner: "Blaise_Inferno", amount: {usd: "$639,870", crypto: '259.0189 ETH'} },
    { title: "SUGAR RUSH", image:'/metawin/sugar_rush.png', winner: "mjouan", amount: {usd: "$524,475", crypto: '203.2848 ETH'} },
    { title: "SWEET BONANZA", image:'/metawin/sweet_bonanza.png', winner: "Blaise_Inferno", amount: {usd: "$311,220", crypto: '275.9474 ETH'} },
    { title: "HAUNTED REELS", image:'/metawin/haunted_reels.png',  winner: "mjouan", amount: {usd: "$305,000", crypto: '265.9474 ETH'} },
    { title: "HOT FIESTA", image:'/metawin/hot_fiesta.png', winner: "7b402723", amount: {usd: "$288,000", crypto: '245.9474 ETH'} },
    { title: "SUGAR RUSH", image:'/metawin/sugar_rush.png', winner: "eddie", amount: {usd: "$373,475", crypto: '285.9474 ETH'} },
    { title: "HAND OF ANUBIS", image:'/metawin/hand_of_anubis.png', winner: "mjouan", amount: {usd: "$274,997", crypto: '235.9474 ETH'} },
    { title: "NINE TO FIVE", image:'/metawin/nine_to_five.jpg', winner: "NFt4lif3.eth", amount: {usd: "$273,006", crypto: '235.6474 ETH'} },
    {title: 'GATES OF OLYMPUS', image: '/metawin/gates_of_olympus.jpg', winner: 'mjouan', amount: {usd: '$305,000', crypto: '265.9474 ETH'}},
    {title: 'AMERICAN ROULETTE', image:'/metawin/american_roulette.jpg', winner: '7b402f23', amount: {usd: '$288,000', crypto: '250.9474 ETH'}},
    {title: 'WILD WILD RICHES', image: '/metawin/wild_riches.png', winner: 'mdubbb', amount: {usd: '$278,904', crypto: '247.9474 ETH'}}
  ]
  return (
    <section className="mb-6">
      <h2 className="flex justify-between text-white text-base font-semibold mb-6">
        <span>Hall of Fame</span>
        <div className="text-[#5f677c]">
            <span className={`${!enabled && 'text-white'}`}>USD&nbsp;</span>
            <Switch 
              enabled={enabled} 
              onChange={() => setEnabled(!enabled)}
            /> 
            <span className={`${enabled && 'text-white'}`}>&nbsp;Crypto</span>
          </div>
      </h2>
                
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4">
          {
            games.map((game, index) => (
              <div key={index} className="group cursor-pointer flex-none bg-black rounded-lg overflow-hidden">
                <div className=" relative w-[100px] h-[100px]">
                  <Image src={game.image} alt={game.title} fill className="group-hover:scale-105 transition-all object-cover"/>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-white">{game.winner}</p>
                  <p className="text-[10px] text-[#f1960c] font-semibold">{enabled? game.amount.crypto:game.amount.usd}</p>
                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function Competition(){
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <section className="grow">
        <p className="flex flex-row items-center text-white gap-x-2 font-semibold text-base mb-2">
          <Flames/>
          <span>Crypto Competitions</span>
        </p>
        <div className=''>
          <img src='/metawin/crypto_competitions.png' alt='crypto competition pics' className=" mb-2"/>
        </div>
        <div className="space-y-2 text-white">
          <p className="text-base">Win Crypto & Blue-Chip NFT Prizes</p>
          <p className="text-xs">At MetaWin you can win huge crypto prizes. &apos;Beznik&apos; won a massive $1 Million USDC. Will you be our next big winner?</p>
          <p className="cursor-pointer bg-blue-600 hover:bg-blue-500 transition-all py-3 px-6 text-sm text-white rounded-lg font-semibold text-center">Enter For Free</p>
        </div>
      </section>
    
      <section className="grow">
        <p className="flex flex-row items-center text-white gap-x-2 font-semibold text-base mb-2">
          <Fruit/>
          <span>Over $700,000 Race Prizes!</span>
        </p>
        <img src='/metawin/daily_racing.png' alt='$700,00 Race Prizes pics'  className=" mb-2"/>
        <div className="space-y-2 text-white">
          <p className="text-base">Over $700,000 Race Prizes!</p>
          <p className="text-xs whitespace-pre-line">
            Join our daily and weekly races for a chance to win a share over $700,000 across more than 15,000 prizes! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className="cursor-pointer bg-blue-600 hover:bg-blue-500 transition-all py-3 px-6 text-sm text-white rounded-lg font-semibold text-center">Play Now</p>
        </div>
      </section>
    </div>
  )
}

function OtherPayment(){
  return (
    <div className="flex md:flex-row flex-col items-center justify-between my-8">
      <h2 className="text-[24px] font-bold text-white">No crypto? No worries!</h2>
      <div className=" w-full md:w-auto no-scrollbar flex flex-row items-center overflow-x-auto space-x-4">
        <Mastercard/>
        <Visa/>
        <ApplePay/>
        <GooglePay/>
      </div>
    </div>
  )
}


function Activity({showAuthModal}:any) {
  const initialActivities = [
    {id:0, gameimg:'/metawin/starlight_princess.png', game: "Starlight Princess", user: "Madhee", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "0.0001", type: "./metawin/ethereum.svg", time: '2 hours ago' },
    {id:1, gameimg:'/metawin/plinko.png', game: "Plinko", user: "9578e06c", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "< 0.0001", type: "./metawin/solana.svg", time: '2 hours ago' },
    {id:2, gameimg:'/metawin/plinko.png', game: "Plinko", user: "Mrmousers91", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "0.0016", type: "./metawin/ethereum.svg", time: '2 hours ago' },
    {id:3, gameimg:'/metawin/snoop_dog_dollars.png', game: "Snoop Dogg Dollars", user: "PokerfaceJess", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "< 0.0001", type: "./metawin/solana.svg", time: '2 hours ago' },
    {id:4, gameimg:'/metawin/plinko.png', game: "Plinko", user: "BienRo", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "0.0016", type: "./metawin/ethereum.svg", time: '2 hours ago' },
    {id:5, gameimg:'/metawin/plinko.png', game: "Plinko", user: "Porrit0", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "0.0016", type: "./metawin/solana.svg", time: '2 hours ago' },
    {id:6, gameimg:'/metawin/alien_fruits.png', game: "Alien Fruits 2", user: "Andybs", image:'/metawin/metawin_avatar.png', action: "WIN", amount: "1.20002", type: "./metawin/solana.svg", time: '2 hours ago' },
  ];

const [activities, setActivities] = useState(initialActivities);
const [lastId, setLastId] = useState(initialActivities.length - 1);
  
  useEffect(() => {
    const generateRandomActivity = () => {
      // Get a random activity from the initial set
      const randomIndex = Math.floor(Math.random() * initialActivities.length);
      const randomActivity = initialActivities[randomIndex];
      
      // Create new activity with incremented ID
      const newId = lastId + 1;
      setLastId(newId);
      
      return {
        ...randomActivity,
        id: newId,
        time: 'just now'  // Update time for new entries
      };
    };

    const interval = setTimeout(() => {
      const newActivity = generateRandomActivity();
      setActivities(prev => {
        // Keep array at initial length by removing last item
        const newActivities = [newActivity, ...prev.slice(0, initialActivities.length - 1)];
        return newActivities;
      });
    }, Math.random() * 1500 + 500);

    return () => clearTimeout(interval);
  }, [lastId]); // Add lastId as dependency

  return (
    <div className="w-full">
      <p className="text-base mb-2 font-semibold text-white">Activity</p>

      <div className="overflow-x-auto">
        <table className="text-sm w-[700px] md:w-full text-white">
          <thead className="bg-black text-semibold">
            <tr>
              <th className=" p-3 text-left">Game</th>
              <th className=" p-3 text-left">User</th>
              <th className=" p-3 text-left">Action</th>
              <th className="p-3 text-left">Amount</th>
              <th className=" p-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(item => (
              <tr onClick={showAuthModal} key={item.id} className="border-b-[0.1px] border-b-slate-800 even:bg-slate-900/55 odd:bg-slate-900/25 cursor-pointer transition-colors hover:bg-slate-800">
                <td className="group p-3 whitespace-nowrap w-[200px]">
                  <div className="flex items-center gap-x-2">
                    <Image src={item.gameimg} alt="game pics" width={32} height={32} className="flex-none rounded-lg border-2 border-transparent group-hover:border-white" />
                    <span className="font-semibold">{item.game}</span>
                  </div>
                </td>
                <td className="group p-3 whitespace-nowrap">
                  <div className="flex items-center gap-x-2">
                    <Image src={item.image} alt="avatar" width={32} height={32} className="fle-none rounded-full border-2 border-transparent group-hover:border-white" />
                    <span>{item.user}</span>
                  </div>
                </td>
                <td className="p-3 text-[#00EA69]">{item.action}</td>
                <td className="p-3 whitespace-nowrap">
                  <div className="flex items-center gap-x-2">
                    <Image src={item.type} alt="" width={12} height={12}/>
                    <span>{item.amount}</span>
                  </div>
                </td>
                <td className="p-3 text-[#38DBFF] text-right whitespace-nowrap">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}