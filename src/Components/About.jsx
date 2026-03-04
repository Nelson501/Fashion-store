import { motion } from "framer-motion";
import NELSS from "../assets/img/pic3.jpg";
import BESPOKE from "../assets/media/web-awesome.svg";
import FABRICS from "../assets/media/tornado.svg";
import UNIQUE from "../assets/media/globe.svg";

const slideLeft = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const About = () => {
  return (
    <section id="about" className="flex flex-col items-center">

      {/* ================= TOP SECTION ================= */}
      <div className="grid lg:grid-cols-2 w-full bg-slate-200">

        {/* TEXT SIDE */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-red-700 text-white min-h-screen px-10 lg:px-20"
        >
          <h1 className="text-4xl font-semibold italic mb-6">
            About Us
          </h1>

          <p className="text-lg mb-6">
            Welcome to Fashion Home, your ultimate destination for style,
            trends, and self-expression. We believe fashion is more than just
            clothing — it's a lifestyle, a statement, and a way to showcase
            individuality.
          </p>

          <p className="text-lg">
            We combine creativity and technology to deliver a seamless fashion
            experience. Whether you're looking for the latest trends, timeless
            classics, or personalized recommendations, we help you explore and
            express your style with confidence.
          </p>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center min-h-screen"
        >
          <img
            src={NELSS}
            alt="Fashion"
            className="h-full object-cover"
          />
        </motion.div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="w-full bg-black/90 text-white py-20 px-6 lg:px-20">

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-4">
            How Are We Different?
          </h2>
          <p className="italic tracking-wide">
            There are hundreds of fashion designers in Nigeria. Here’s why we stand out.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* CARD 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src={BESPOKE}
              alt="Bespoke"
              width={50}
              className="bg-white rounded-full p-2"
            />

            <h3 className="text-2xl font-semibold">
              Bespoke Atelier
            </h3>

            <p>
              We create unique outfits and custom alterations, from simple hems
              to elegant evening gowns.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>Professional alterations</li>
              <li>Made-to-measure designs</li>
              <li>Restoration services</li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <img
              src={FABRICS}
              alt="Fabrics"
              width={50}
              className="bg-white rounded-full p-2"
            />

            <h3 className="text-2xl font-semibold">
              Premium Fabrics
            </h3>

            <p>
              We craft our collections using high-quality natural fabrics sourced from Italy.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>100% organic cotton</li>
              <li>Suede and silk</li>
              <li>Exclusive patterns</li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <img
              src={UNIQUE}
              alt="Unique"
              width={50}
              className="bg-white rounded-full p-2"
            />

            <h3 className="text-2xl font-semibold">
              Unique Collections
            </h3>

            <p>
              Each design is produced in limited quantity, ensuring exclusivity
              and individuality.
            </p>

            <ul className="list-disc ml-5 space-y-2">
              <li>Clothes, shoes & accessories</li>
              <li>Street style & casual</li>
              <li>Mix-and-match styling</li>
            </ul>
          </motion.div>

        </div>
      </div>

    </section>
  );
};