import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import FACEBOOK from "../assets/media/facebook.svg";
import LINKEDIN from "../assets/media/linkedin.svg";
import INSTAGRAM from "../assets/media/instagram.svg";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const socials = [
    { href: "#", src: FACEBOOK, alt: "facebook" },
    { href: "#", src: LINKEDIN, alt: "linkedin" },
    { href: "#", src: INSTAGRAM, alt: "instagram" },
  ];

  const links = ["Home", "About", "Gallery", "Services", "Contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black/95 backdrop-blur-md md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-7 text-white text-3xl"
          >
            <IoCloseSharp />
          </button>

          {/* Links */}
          <div className="flex flex-col gap-10 text-center">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white font-bold text-2xl hover:text-red-500 transition"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-6 mt-12"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};