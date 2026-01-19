import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";

export default function InfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday — Friday", time: "8:00 — 23:00" },
    { day: "Saturday — Sunday", time: "9:00 — 23:00" },
  ];

  return (
    <section
      ref={ref}
      className="bg-[#F5F3F0] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[#591B27] text-xs tracking-[0.3em] uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] tracking-tight">
            Find Common
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="w-5 h-5 text-[#591B27] mt-1" />
              <div>
                <h3 className="text-[#1a1a1a] font-medium mb-2">Location</h3>
                <p className="text-[#666] leading-relaxed">
                  Karl-Max-Straße 176
                  <br />
                  12043 Berlin
                  <br />
                  Neukölln
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Karl-Max-Straße+176+12043+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#591B27] text-sm tracking-wide border-b border-[#591B27]/30 pb-1 hover:border-[#591B27] transition-colors ml-9"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#591B27] mt-1" />
              <div>
                <h3 className="text-[#1a1a1a] font-medium mb-4">Hours</h3>
                <ul className="space-y-2">
                  {hours.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between gap-8 text-sm"
                    >
                      <span className="text-[#666]">{item.day}</span>
                      <span
                        className={`${item.time === "Closed" ? "text-[#999]" : "text-[#1a1a1a]"}`}
                      >
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#999]">
                  Bakery: 8:00 — 16:00 · Kitchen: 18:00 — 22:30
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-[#591B27] mt-1" />
              <div>
                <h3 className="text-[#1a1a1a] font-medium mb-4">Contact</h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:hello@common.berlin"
                    className="block text-[#666] hover:text-[#591B27] transition-colors"
                  >
                    hello@common.berlin
                  </a>
                  <a
                    href="tel:+4930123456789"
                    className="block text-[#666] hover:text-[#591B27] transition-colors"
                  >
                    +49 30 123 456 789
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.instagram.com/common.berlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#591B27] text-sm tracking-wide hover:text-[#591B27]/70 transition-colors"
                  >
                    @common.berlin
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
