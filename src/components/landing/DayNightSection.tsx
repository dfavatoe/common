import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function DayNightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const dayItems = [
    "Fresh Sourdough Bread",
    "Artisan Pastries",
    "Specialty Coffee",
    "Seasonal Bakes",
  ];

  const nightItems = [
    "Neapolitan Pizza",
    "Natural Wine Selection",
    "DJ Sets & Live Music",
    "Art Exhibitions",
  ];

  return (
    <section ref={ref} className="relative">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Day Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-16 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <Sun className="w-8 h-8 text-[#591B27]/20" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#591B27] text-xs tracking-[0.3em] uppercase mb-4 block">
              8:00 — 16:00
            </span>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8 tracking-tight">
              Bakery
            </h3>
            <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-md mb-10">
              Start your day with slow-fermented breads and handcrafted
              pastries. Every loaf tells a story of time, patience, and quality
              grains.
            </p>
            <ul className="space-y-3">
              {dayItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-[#4a4a4a] text-sm tracking-wide flex items-center gap-3"
                >
                  <span className="w-6 h-px bg-[#591B27]/30"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Night Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="bg-[#591B27] py-20 md:py-32 px-6 md:px-12 lg:px-16 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <Moon className="w-8 h-8 text-white/20" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 block">
              18:00 — 23:00
            </span>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-tight">
              Pizza & Wine
            </h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-10">
              As the sun sets, Common transforms. Natural wines, wood-fired
              pizzas, and a curated selection of sounds create an atmosphere
              unlike any other.
            </p>
            <ul className="space-y-3">
              {nightItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-white/70 text-sm tracking-wide flex items-center gap-3"
                >
                  <span className="w-6 h-px bg-white/30"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
