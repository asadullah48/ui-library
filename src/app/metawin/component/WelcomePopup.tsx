interface WelcomePopupProps {
  closeWelcomeModal: (e: React.MouseEvent) => void;
  showAuthModal: () => void;
}

export default function WelcomePopup({closeWelcomeModal, showAuthModal}:WelcomePopupProps) {
    return (
      <div onClick={closeWelcomeModal} className="remove fixed inset-0 z-[2] bg-[#252831e6] flex flex-row items-center justify-center">
        <div className="relative sm:max-w-[425px] bg-[#1a1b1f] py-10 px-5 text-white rounded-xl">
          <button onClick={closeWelcomeModal} className="remove text-white absolute right-2 top-2 bg-slate-700/50 rounded-full py-1 px-2">
            ✖
          </button>

          <div className="flex flex-col items-center space-y-2 mb-5">
            <img src="/metawin/logo.svg" alt="METAWIN" className="h-6 mb-2" />
            <div className="text-yellow-400 text-base text-xl font-semibold">  Welcome to Winning in Web3! </div>
          </div>

          <div className="space-y-6 text-base">
            <p className="text-gray-300 leading-tight">Connect your Web3 wallet to enjoy...</p>
            <ul className="pl-2 space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span>Super fast winnings!</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span>Withdraw 19 ETH per day in less than 60 seconds.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span>No pesky human interactions or wagering of deposits.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                <span>Secure, Transparent on-chain instant prize draws.</span>
              </li>
            </ul>
            <p className="text-center text-emerald-400 font-semibold">
              Welcome to the Future of Winning.
            </p>
            <button 
              className="remove w-full bg-blue-600 hover:bg-blue-500 transition-all text-white py-4 px-8 rounded-lg text-lg font-semibold"
              onClick={(e)=>{showAuthModal(); closeWelcomeModal(e)}}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    )
  }