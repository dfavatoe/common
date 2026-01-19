import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#591B27] relative overflow-hidden flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center z-10"
      >
        <div className="text-white/60 text-sm tracking-widest uppercase">
          Karl-Max-Straße 176 — Berlin
        </div>
        <a
          href="https://bookings.zenchef.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm tracking-widest uppercase hover:text-white/70 transition-colors"
        >
          Reserve
        </a>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_696531f02664a85e015673f1/fb56fc552_Logo_common.png"
            alt="Common Berlin"
            className="w-32 md:w-40 lg:w-48 h-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6">
            Bakery by Day
            <span className="block mt-2 text-white/40">
              Pizza & Wine by Night
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/50 text-sm md:text-base tracking-wide uppercase mt-8 text-center max-w-xl"
        >
          Organic ancient grains · Naturally leavened · Locally sourced
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://bookings.zenchef.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 inline-flex items-center gap-3 bg-white text-[#591B27] px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white/90 transition-colors"
        >
          Reserve a Table
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
        />
      </motion.div>
    </section>
  );
}
