import Image from "next/image";

interface AuthModalProps {
  closeModal: (e: React.MouseEvent) => AuthModalProps;
}

export default function AuthModal({closeModal}:any) {
    const wallets = [
      {
        name: "MetaMask",
        icon: "./metawin/metamask.svg",
        secondaryicon: './metawin/ethereum.svg',
        color: "bg-orange-500/10",
        textColor: "text-orange-500",
      },
      {
        name: "Coinbase",
        icon: "./metawin/coinbase.svg",
        secondaryicon: './metawin/ethereum.svg',
        color: "bg-blue-500/10",
        textColor: "text-blue-500",
      },
      {
        name: "WalletConnect",
        icon: "./metawin/walletconnect.svg",
        secondaryicon: './metawin/ethereum.svg',
        color: "bg-blue-500/10",
        textColor: "text-blue-500",
      },
      {
        name: "Phantom",
        icon: "./metawin/phantom.svg",
        secondaryicon: './metawin/solana.svg',
        color: "bg-purple-500/10",
        textColor: "text-purple-500",
      },
    ]
  
    return (
      <div onClick={closeModal} className="remove fixed inset-0 z-[2] bg-[#252831e6] flex flex-row items-center justify-center">
        <div className="sm:max-w-[425px] bg-[#1a1b1f] text-white border-gray-800 p-5 rounded-xl">
          <div className="space-y-2">
            <p className="text-base text-white font-semibold text-center"> Connect your Web3 wallet</p>
            <p className="text-[#B1BAB3] whitespace-pre-line text-center text-sm">
              {`Experience winning in Web3 by
               connecting your wallet`}
            </p>
          </div>

          <div className="space-y-6 py-6">
            <div className="flex justify-center gap-2">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  className={` p-4 rounded-lg ${wallet.color} ${wallet.textColor} relative text-xl hover:opacity-80 transition-opacity`}
                  title={wallet.name}
                >
                  <Image src={wallet.secondaryicon} alt='crypto icon' width={16} height={16} className="absolute top-0 left-0"/>
                  <Image src={wallet.icon} alt='wallet icons' width={30} height={30}/>
                </button>
              ))}
              
            </div>
            
            <button onClick={closeModal} className="remove w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 h-auto text-sm rounded-lg font-semibold">Connect</button>
            
            <div className="relative flex justify-center border-t-2 border-t-gray-700">
              <div className="bg-[#1a1b1f] w-10 h-5 absolute top-[-10px] text-transparent"></div>
            </div>
          
            <div className="space-y-6">
              <p className="text-center text-white font-semibold text-base"> Continue with your email</p>
              <input type="email" placeholder="Email" className="w-full bg-[#0F1115] py-3 pl-4 pr-3 border-gray-800 text-sm text-white placeholder:text-gray-500 rounded-lg"/>
              <button onClick={closeModal} className="remove w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 h-auto text-sm rounded-lg font-semibold">Sign up or Log in</button>
            </div>
  
            <div className="relative flex justify-center border-t-2 border-t-gray-700">
              <div className="bg-[#1a1b1f] w-10  text-center absolute top-[-10px] text-white text-xs font-semibold">OR</div>
            </div>
  
            <button onClick={closeModal} className="remove w-full bg-white hover:bg-gray-50 text-black py-3 px-6 h-auto text-sm font-semibold rounded-lg flex gap-2 items-center justify-center">
              <GoogleIcon/>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    )
  }

  function GoogleIcon(){
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /> <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
    )
  }