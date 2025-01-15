import Link from "next/link"

export default function Header(){
    return (
        <h1 className=" bg-white font-bold text-center text-base lg:text-xl text-black py-2 border-b border-b-gray-100"><Link href='/' className='text-black'>UI-LIB</Link></h1>
    )
}