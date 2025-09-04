// import { useEffect } from "react";
// import { MdMenu } from "react-icons/md";
// export const Navbar = ({isOpen, setIsOpen})=>{
//     useEffect(()=>{
//         document.body.style.overflow = isOpen? "hidden":"";
//     }, [isOpen])


//     return<nav className="flex flex-row top-0 fixed z-40 bg[rgba(10,10,10,0.8)] border-b-2 backdrop-blur-lg border-slate-300 shawdow-lg w-full py-4 justify-between px-10 bg-gradient-to-r from-teal-700 via-blue-800 to-cyan-650">
//         <div className="flex flex-row text-center uppercase font-serif italic font-bold text-[20px]">
//             <a className="cursor-pointer" href="#home">Nelson<span className="ml-1 text-amber-900 font-bold">Dayo</span></a>
//         </div>
        
//         {
//             !isOpen && <div onClick={() => setIsOpen((prev) => !prev)} className="flex absolute right-7 text-[2rem] items-center md:hidden z-40" >
//             <MdMenu />
//         </div>
//         }
        

//         <div className="hidden md:flex">
//             <div className="space-x-[20px] sm:space-x-[30px]">
//                 <a className="text-gray-300 hover:text-white hover:text-xl font-serif transition-all hover:translate-y-2 cursor-pointer font-bold text-lg hover:italic p-2 rounded-2xl" href="#home">
//                     Home
//                 </a>
//                 <a className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer font-bold font-serif hover:italic  p-2 rounded-2xl text-lg" href="#about">
//                     About
//                 </a>
//                 <a className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer font-bold font-serif hover:italic p-2 rounded-2xl text-lg" href="#gallery">
//                     Gallery
//                 </a>
//                 <a className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer font-bold font-serif hover:italic p-2 rounded-2xl text-lg" href="#contact">
//                     Contact
//                 </a>
//             </div>

//         </div>
//         <div className="hidden lg:flex text-center bg-red-800 items-center px-3 rounded-[20px] font-bold ">Subscribe</div>
        
//     </nav>
    
    
// }

import { useEffect } from "react";
import { MdMenu } from "react-icons/md";

export const Navbar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav className="flex flex-row top-0 fixed z-40 w-full py-4 px-10 justify-between 
      bg-[rgba(10,10,10,0.8)] border-b-2 backdrop-blur-lg border-slate-300 shadow-lg 
      bg-gradient-to-r from-teal-700 via-blue-800 to-cyan-600">
      
      {/* Logo */}
      <div className="flex flex-row text-center uppercase font-serif italic font-bold text-[20px]">
        <a className="cursor-pointer" href="#home">
          Nelson<span className="ml-1 text-amber-900 font-bold">Dayo</span>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex absolute right-7 text-[2rem] items-center md:hidden z-40"
          aria-label="Open Menu"
        >
          <MdMenu />
        </button>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <div className="space-x-8">
          <a
            className="text-gray-300 hover:text-white hover:text-xl font-serif transition-all 
            hover:translate-y-2 cursor-pointer font-bold text-lg hover:italic p-2 rounded-2xl"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer 
            font-bold font-serif hover:italic p-2 rounded-2xl text-lg"
            href="#about"
          >
            About
          </a>
          <a
            className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer 
            font-bold font-serif hover:italic p-2 rounded-2xl text-lg"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="text-gray-300 hover:text-white hover:text-xl transition-all cursor-pointer 
            font-bold font-serif hover:italic p-2 rounded-2xl text-lg"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Subscribe Button */}
      <div className="hidden lg:flex text-center bg-red-800 text-white items-center px-3 
        rounded-[20px] font-bold cursor-pointer hover:bg-red-700 transition">
          <a href="#youtube">Subscribe</a>
      </div>
    </nav>
  );
};
