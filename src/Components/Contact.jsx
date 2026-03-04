import { motion } from "framer-motion";
import FACEBOOK from "../assets/media/facebook.svg";
import INSTAGRAM from "../assets/media/instagram.svg";
import LINKEDIN from "../assets/media/linkedin.svg";
import TWITTER from "../assets/media/x-twitter.svg";
import { FaWhatsapp } from "react-icons/fa";
export const Contact = () => {

  // ===== WhatsApp Setup =====
  const phone = "2348012345678"; // 🔥 Replace with your real number

  const message = encodeURIComponent(
    "Hello Fashion Home, I'm interested in your fashion products. I would like to make an inquiry."
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  // ===== Social Media Links =====
  const medias = [
    { href: "https://facebook.com", src: FACEBOOK, alt: "Facebook" },
    { href: "https://instagram.com", src: INSTAGRAM, alt: "Instagram" },
    { href: "https://linkedin.com", src: LINKEDIN, alt: "LinkedIn" },
    { href: "https://twitter.com", src: TWITTER, alt: "X" },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col bg-white items-center justify-center text-black pt-20 relative"
    >
      {/* ================= CONTACT FORM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center p-10 w-full max-w-3xl"
      >
        <div className="text-center pb-10">
          <h1 className="text-3xl font-serif pb-4">Contact Us</h1>
          <p className="text-xl bg-slate-900 text-white p-4 rounded-md">
            You are Welcome here to QSCOTT
          </p>
        </div>

        <p className="text-center mb-8">
          Fill out the form and come to our store. Together, we'll find a perfect style for you.
        </p>

        <form
          action="https://formsubmit.co/sunnynax01@gmail.com"
          method="POST"
          className="w-full space-y-6"
        >
          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            required
            placeholder="Enter Your Full Name"
            className="w-full border-2 border-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition"
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            required
            placeholder="example@email.com"
            className="w-full border-2 border-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition"
          />

          {/* Phone */}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            name="phone"
            required
            placeholder="Enter Your Phone Number"
            className="w-full border-2 border-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition"
          />

          {/* Message */}
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            rows={6}
            placeholder="Enter Your Message Here..."
            className="w-full border-2 border-slate-400 rounded-xl p-4 focus:outline-none focus:border-red-600 transition"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-red-700 rounded-md py-3 text-white font-semibold transition hover:bg-slate-900"
          >
            Request a Quote
          </motion.button>
        </form>
      </motion.div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 p-6 w-full text-white flex flex-col items-center mt-10">
        <p className="font-sans text-lg text-center">
          &copy; 2025 Fashion Home | Fashion that speaks your style
        </p>

        <div className="flex gap-2 items-center mt-6">
          <span className="font-sans">Follow Us:</span>

          {medias.map((media, key) => (
            <motion.a
              key={key}
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white p-2 rounded-full"
            >
              <img src={media.src} alt={media.alt} width={22} />
            </motion.a>
          ))}
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl z-50"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </section>
  );
};