import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      alt: "Fresh sourdough bread",
      span: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
      alt: "Wood-fired pizza",
      span: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
      alt: "Natural wine",
      span: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      alt: "Restaurant interior",
      span: "col-span-1 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1669030565213-0141591aed9c?q=80&w=600&auto=format&fit=crop",
      alt: "DJ playing music",
      span: "col-span-1 row-span-1",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
      alt: "Coffee",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[#591B27] text-xs tracking-[0.3em] uppercase mb-4 block">
            Visual Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
            Moments at Common
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/common.berlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#591B27] text-sm tracking-widest uppercase hover:text-[#591B27]/70 transition-colors border-b border-[#591B27]/30 pb-1 hover:border-[#591B27]"
          >
            Follow @common.berlin
          </a>
        </motion.div>
      </div>
    </section>
  );
}
