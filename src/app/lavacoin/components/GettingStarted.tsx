export default function GettingStarted(){
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