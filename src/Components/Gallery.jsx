import { Galleryimages } from "./GalleryImages.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex flex-col justify-center items-center bg-gray-200 py-20"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mb-16 px-6"
      >

        <p className="text-center text-slate-700 text-xl italic font-mono bg-white p-6 rounded-xl shadow-md max-w-2xl">
          Explore our collection where every piece tells a story of style,
          comfort, and confidence.
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <div className="w-full max-w-7xl px-6 relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {Galleryimages &&
            Galleryimages.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4 flex flex-col font-semibold">
                    <h2 className="pb-2 font-mono">
                      Price: {item.price}
                    </h2>
                    <span>Name: {item.name}</span>
                    <span>Gender: {item.gender}</span>
                    <span className="italic text-sm text-gray-600 pt-2">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};