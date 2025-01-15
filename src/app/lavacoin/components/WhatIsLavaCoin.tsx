import Image from "next/image"
export default function WhatIsLavaCoin(){
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