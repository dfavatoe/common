import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left - Large Text */}
          <div>
            <span className="text-[#591B27] text-xs tracking-[0.3em] uppercase mb-6 block">
              Our Philosophy
            </span>
            <h2 className="text-[#1a1a1a] font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Where Italian roots meet Berlin's creative spirit
            </h2>
          </div>

          {/* Right - Body Text */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#4a4a4a] text-base md:text-lg leading-relaxed"
            >
              Common is not just a place to eat — it's a cultural meeting point.
              We bake with organic ancient grains from Germany, naturally
              leavened, sourced from local farmers who share our values.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#4a4a4a] text-base md:text-lg leading-relaxed"
            >
              By night, we transform into a wine bar serving natural wines
              alongside pizzas crafted with the same care. DJs spin, artists
              exhibit, and guest chefs bring their stories to our kitchen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <span className="text-[#591B27] text-sm tracking-wide border-b border-[#591B27]/30 pb-1 cursor-pointer hover:border-[#591B27] transition-colors">
                Discover our ingredients
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
