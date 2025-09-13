
import { IoCloseSharp } from "react-icons/io5";
import FACEBOOK from "../assets/media/facebook.svg"
import LINKEDIN from "../assets/media/linkedin.svg"
import INSTAGRAM from "../assets/media/instagram.svg"



export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const socials = [
    { href: "#", src: FACEBOOK, alt: "facebook"},
    { href: "#", src: LINKEDIN, alt: "linkedIn"},
    {href: "#", src: INSTAGRAM, alt: "instagram"}
  ]

  return <div
      className={` absolute w-full top-0 z-40 flex flex-col md:hidden justify-center items-center transition-all duration-300 ease-in-out bg-black/95 
        ${isOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-7 text-2xl focus:outline-none cursor-pointer text-white"
        aria-label="Close Menu"
      >
        <IoCloseSharp className="text-[2rem]" />
      </button>

      {/* Links */}
      <div className="flex flex-col gap-10">

        <a className={` text-white hover:text-xl transition-all cursor-pointer font-bold text-lg
        ${
          isOpen ? "opacity-100 translate-y-0"
           : "opacity-0 translate-y-5"
        }`}
        onClick={()=>setIsOpen(false)}
        href="#home">
          Home
        </a>
        <a className={`text-white hover:text-xl transition-all cursor-pointer font-bold text-lg
        ${
          isOpen ? "opacity-100 translate-y-0" 
          : "opacity-0 tarnslate-y-5"
        }`}
        onClick={()=>setIsOpen(false)}
        href="#about">
            About
        </a>
        <a className={`text-white hover:text-xl transition-all cursor-pointer font-bold text-lg
        ${
          isOpen ? "opacity-100 translate-y-0" 
          : "opacity-0 tarnslate-y-5"
        }`}
        onClick={()=>setIsOpen(false)}
        href="#gallery">
            Gallery
        </a>
        <a className={`text-white hover:text-xl transition-all cursor-pointer font-bold text-lg
        ${
          isOpen ? "opacity-100 translate-y-0" 
          : "opacity-0 tarnslate-y-5"
        }`}
        onClick={()=>setIsOpen(false)}
        href="#services">
            Services
        </a>
        <a className={`text-white hover:text-xl transition-all cursor-pointer font-bold text-lg
        ${
          isOpen ? "opacity-100 translate-y-0" 
          : "opacity-0 tarnslate-y-5"
        }`}
        onClick={()=>setIsOpen(false)}
        href="#contact">
            Contact
        </a>

      </div>

      <div className="flex justify-center items-center space-x-3 mt-8">
        {socials.map((social,index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
            <img src={social.src} alt={social.alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
        
      </div>
  
};

