import { useEffect } from "react";
import { MdMenu } from "react-icons/md";
export const Navbar = ({isOpen, setIsOpen})=>{
    useEffect(()=>{
        document.body.style.overflow = isOpen? "hidden":"";
    }, [isOpen])


    return<nav className="flex flex-row top-0 fixed z-40 bg-black/95 border-b-2 backdrop-blur-sm border-slate-300 shawdow-lg w-full py-4 justify-between px-10">
        <div className="flex flex-row text-center uppercase font-serif italic font-bold text-[20px]">
            <a className="cursor-pointer" href="home">Fashion<span className="ml-1 text-amber-900 font-bold">Home</span></a>
        </div>
        
        {
            !isOpen && <div onClick={() => setIsOpen((prev) => !prev)} className="flex absolute right-7 text-[2rem] items-center md:hidden z-40" >
            <MdMenu />
        </div>
        }
        

        <div className=" flex items-center space-x-[20px] sm:space-x-[30px]">
            <div className="hidden md:flex items-center space-x-[20px] sm:space-x-[30px]">
                <a className="text-gray-300 hover:text-white hover:text-xl font-serif transition-all hover:translate-y-1 cursor-pointer font-bold text-lg hover:italic p-2 rounded-2xl" href="#home">
                    Home
                </a>
                <a className="text-gray-300 hover:text-white hover:text-xl transition-all hover:translate-y-1 cursor-pointer font-bold font-serif hover:italic  p-2 rounded-2xl text-lg" href="#about">
                    About
                </a>
                <a className="text-gray-300 hover:text-white hover:text-xl transition-all hover:translate-y-1 cursor-pointer font-bold font-serif hover:italic p-2 rounded-2xl text-lg" href="#gallery">
                    Gallery
                </a>
                <a className="text-gray-300 hover:text-white hover:text-xl transition-all hover:translate-y-1 cursor-pointer font-bold font-serif hover:italic p-2 rounded-2xl text-lg" href="#services">
                    Services
                </a>
                <a className="text-gray-300 hover:text-white hover:text-xl transition-all hover:translate-y-1 cursor-pointer font-bold font-serif hover:italic p-2 rounded-2xl text-lg" href="#contact">
                    Contact
                </a>
            </div>

        </div>
        <div className="hidden lg:flex relative right-10 items-center p-0 text-center">
           <a className="bg-red-800 px-2 rounded-xl cursor-pointer hover:bg-red-700" href="#youtube">Subscribe</a>
        </div>

    </nav>
    
    
}

