import NEL_IMG from "../assets/img/nel1.jpg";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center"
    >
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse justify-between lg:flex-row gap-10 px-[3.5rem] mt-[4rem] lg:mt-[2rem] pb-6 pt-10">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center justify-center items-center mt-[4rem] p-5"
        >
          <p className="text-[1.3rem] text-red-700">
            Looking for something special?
          </p>

          <p className="text-[1.8rem] lg:text-[2rem] text-center mt-[2rem] text-black font-bold">
            Feel the spirit of the city in <br />
            bold and functional outfits
          </p>

          <p className="text-slate-900 p-6 shadow-sm shadow-slate-400 font-mono italic mt-4 rounded-2xl">
            <span className="font-semibold">FASHION </span>
            <span className="text-amber-900 font-semibold">HOME</span> boutique is a great place to give yourself a new look.
            <br />
            We create exclusive outfits for men and women, as well as shoes.
            <br />
            We can execute even the most unpredictable ideas!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row mt-6 gap-6">

            <motion.button
              whileHover={{ scale: 1.05, y: 3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-500 p-4 rounded-xl text-white shadow-lg"
            >
              Make an Appointment
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: 3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 p-4 rounded-xl border hover:bg-gray-800 hover:text-white shadow-md"
            >
              Learn More
            </motion.button>

          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <motion.img
            src={NEL_IMG}
            alt="Fashion Model"
            width={320}
            className="rounded-br-[20px] rounded-tl-[20px] shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <div className="flex flex-col justify-center items-center text-black bg-slate-100 w-full px-10 py-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-center text-4xl font-bold pb-4">
            We've just started...
          </p>
          <p className="text-center text-slate-600 text-lg pb-10">
            ...but we still have achievements we're proud of ©
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {[
            { number: "694+", label: "Positive reviews" },
            { number: "1300+", label: "Perfect-looking clients" },
            { number: "2200+", label: "Items purchased in 2024" },
            { number: "7+", label: "Collections launched" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center"
            >
              <p className="text-5xl lg:text-6xl font-bold text-red-700 pb-6">
                {item.number}
              </p>
              <p className="font-mono text-slate-500 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};