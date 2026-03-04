import { motion } from "framer-motion";
import CARD1 from "../assets/media/recycle.svg";
import CARD2 from "../assets/media/user.svg";
import CARD3 from "../assets/media/phone.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export const Services = () => {
  return (
    <section id="services" className="flex flex-col bg-red-800 text-white">

      {/* ================= SERVICES SECTION ================= */}
      <div className="flex flex-col items-center p-10 lg:p-20">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold font-serif mb-4">
            Fashion Home Services
          </h2>
          <p>
            We offer premium clothing and footwear services for women and men in Nigeria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl">

          {/* Alterations */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-red-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              Any Kind of Alterations
            </h3>

            <p className="mb-6">
              Have you lost weight and your clothes no longer fit? Or do you want
              to give new life to old outfits? We handle all types of alterations,
              from resizing and reshaping to simple hemming.
            </p>

            <button className="bg-red-700 px-5 py-3 rounded-lg hover:bg-red-600 transition">
              Request a Quote
            </button>
          </motion.div>

          {/* Bespoke */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-red-950 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              Bespoke Tailoring
            </h3>

            <p className="mb-6">
              Want clothing no one else will have? Our designers work with you
              to create a unique and comfortable style. Bespoke tailoring takes
              5–15 days depending on complexity.
            </p>

            <button className="bg-red-700 px-5 py-3 rounded-lg hover:bg-red-600 transition">
              Request a Quote
            </button>
          </motion.div>

        </div>
      </div>

      {/* ================= HOW TO BUY SECTION ================= */}
      <div className="bg-black/95 py-20 px-6 lg:px-20">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold mb-4">
            How to Buy Fashion Home Clothes
          </h2>
          <p>
            Visit our showroom near the city center or book an appointment for a personalized experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-black p-10 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src={CARD3} alt="Contact" className="bg-red-800 p-3 rounded-full w-14" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p>
              Book an appointment to order exclusive pieces or purchase from our collections.
            </p>
          </motion.div>

          {/* Visit */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black p-10 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src={CARD2} alt="Visit" className="bg-red-800 p-3 rounded-full w-14" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
            <p>
              Meet our designers, explore collections, try outfits, and take measurements.
            </p>
          </motion.div>

          {/* Purchase */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-black p-10 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src={CARD1} alt="Purchase" className="bg-red-800 p-3 rounded-full w-14" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Make a Purchase</h3>
            <p>
              Bespoke orders are ready in 5–15 days. You may be invited for one or two fitting sessions.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= OPENING HOURS ================= */}
      <div className="flex flex-col items-center py-16 px-6 text-black bg-white">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-serif mb-8">
            Fashion Home Online — Available 24 Hours Daily
          </h3>

          <h4 className="font-mono text-xl mb-6">
            Opening Hours
          </h4>

          <div className="space-y-4 text-lg">
            <p><strong>Mon – Fri:</strong> 9:00 AM – 10:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM – 8:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </motion.div>

      </div>

    </section>
  );
};