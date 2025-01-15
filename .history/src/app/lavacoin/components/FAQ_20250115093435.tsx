'use client';

import { useState } from "react";
import Image from "next/image";

export default function FAQ(){
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