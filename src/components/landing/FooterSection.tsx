import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#591B27] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-8">
            Join us at the table
          </h2>
          <motion.a
            href="https://bookings.zenchef.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-white text-[#591B27] px-10 py-5 text-sm tracking-widest uppercase font-medium hover:bg-white/90 transition-colors"
          >
            Reserve a Table
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Footer Links */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_696531f02664a85e015673f1/fb56fc552_Logo_common.png"
              alt="Common Berlin"
              className="w-12 h-auto opacity-60"
            />
            <span className="text-white/40 text-sm">
              Karl-Max-Straße 176 — 12043 Berlin
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/common.berlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://bookings.zenchef.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors text-sm tracking-wide uppercase"
            >
              Reservations
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Common Berlin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
