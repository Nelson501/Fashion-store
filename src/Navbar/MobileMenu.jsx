
import { IoCloseSharp } from "react-icons/io5";
import FACEBOOK from "../assets/facebook.svg"
import LINKEDIN from "../assets/linkedin.svg"
import INSTAGRAM from "../assets/instagram.svg"



export const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute w-full top-0 z-40 flex flex-col md:hidden justify-center items-center transition-all duration-300 ease-in-out bg-black/95 
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
      <div className="absolute flex flex-col justify-center items-center top-[6rem]">
        {["home", "about", "gallery", "contact"].map((section) => (
          <a
            key={section}
            onClick={() => setIsOpen(false)}
            href={`#${section}`}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
              ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <div className="flex justify-center items-center space-x-3">
          <a href="#"><img src={FACEBOOK} alt="facebook" /></a>
          <a href="#"><img src={INSTAGRAM} alt="facebook" /></a>
          <a href="#"><img src={LINKEDIN} alt="facebook" /></a>
        </div>
        
      </div>
    </div>
  );
};

