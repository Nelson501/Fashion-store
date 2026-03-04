import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

export const Navbar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const links = ["Home", "About", "Gallery", "Services", "Contact"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-700 shadow-lg px-6 lg:px-12 py-4 flex items-center justify-between"
      >

        {/* Logo Animation */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="uppercase font-serif italic font-bold text-xl tracking-wider"
        >
          Fashion<span className="text-red-600">Home</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">

          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-gray-300 font-semibold cursor-pointer group"
            >
              {link}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

        </div>

        {/* Subscribe Button */}
        <motion.div
          className="hidden lg:block"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#subscribe"
            className="bg-red-700 px-5 py-2 rounded-xl font-semibold transition hover:bg-red-600"
          >
            Subscribe
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-white z-50"
          whileTap={{ scale: 0.85 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </motion.button>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 h-full bg-black z-50 flex flex-col items-center justify-center space-y-8 text-xl"
            >
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link}
                </motion.a>
              ))}

              <motion.a
                href="#subscribe"
                whileHover={{ scale: 1.1 }}
                className="bg-red-700 px-6 py-3 rounded-xl font-semibold"
              >
                Subscribe
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};