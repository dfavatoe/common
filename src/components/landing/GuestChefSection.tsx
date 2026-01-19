import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

export default function GuestChefSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#1a1a1a] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 block">
            Presenting
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]">
            Guest Chefs
          </h2>
        </motion.div>

        {/* Guest Chefs Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-5xl mx-auto"
        >
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Guest chef preparing food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="bg-[#591B27] p-8 md:p-10 lg:p-12">
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 block">
              The Residency Program
            </span>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
              A Platform for Culinary Stories
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
              Our guest chef residency is a space where talented chefs bring
              their unique perspectives to Common. Each residency is a journey —
              a story told through flavors, techniques, and the personal
              histories of the chefs who join us.
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
              From Italian roots to Scandinavian influences, from ancient grains
              to contemporary presentations — every residency offers something
              unexpected. It's where tradition meets creativity, and where food
              becomes a conversation.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white/80 text-sm mb-4">
                Follow us on Instagram and keep updated about the next guest
                chef
              </p>
              <motion.a
                href="https://www.instagram.com/common.berlin/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Events Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-white/30 text-sm tracking-wide max-w-lg mx-auto">
            We regularly host rotating chefs, DJ nights, and art exhibitions.
            Follow us on Instagram to stay updated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
