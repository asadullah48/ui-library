export default function Hero(){
    return (
        <div  className='h-[30vh] sm:h-[50vh] lg:h-[70vh] xl:h-screen' style={{  backgroundImage:  "url('/volcano/icontrast.jpg')",backgroundPosition: "bottom center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="text-center text-white pt-[10%]">
                    <h1 className="text-[50px] lg:text-[70px] xl:text-[90px] font-bold">LavaCoin</h1>
                    <p className="text-base xl:text-[30px]">The hottest currency on the planet</p>
                </div>
            </div>
    )
}