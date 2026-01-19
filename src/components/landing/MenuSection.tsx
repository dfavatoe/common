import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const starters = [
    {
      name: "Seasonal Salad",
      price: "14€",
      description:
        "Burrata from Tuscany, Arugula, Roasted Walnuts, Pomegranate, Balsamic Reduction",
    },
  ];

  const desserts = [
    {
      name: "Panna Cotta",
      price: "11€",
      description:
        "Vanilla Bean, Berry Compote from Local Farm, Pistachio Crumble, White Chocolate",
    },
  ];

  const pizzas = [
    {
      name: "Pizza No.1",
      price: "12€",
      description:
        "Marinara Base, Fresh Basil, Extra Virgin Olive Oil, Cherry Tomatoes",
      addon: "Aged Parmesan +6€",
    },
    {
      name: "Pizza No.2",
      price: "15€",
      description:
        "White Sauce, Fior di Latte from Naples, Truffle Oil, Sea Salt",
      addon: "Spicy Salami +8€",
    },
    {
      name: "Pizza No.3",
      price: "19€",
      description:
        "Roasted Artichokes, Prosciutto Cotto, Fontina from Alps, Caramelized Onions",
    },
    {
      name: "Pizza No.4",
      price: "17€",
      description:
        "Wild Mushroom Mix from Black Forest, Garlic Cream, Taleggio Cheese, Fresh Thyme, Pecorino Romano",
    },
    {
      name: "Pizza No.5",
      price: "20€",
      description:
        "Grilled Zucchini, 'Nduja Calabrese, Stracciatella from Puglia, Sage Butter, Sourdough Breadcrumbs",
    },
    {
      name: "Pizza No.6",
      price: "18€",
      description:
        "Roasted Butternut Squash, Gorgonzola Dolce, Fresh Mozzarella From Campania, Crispy Pancetta",
      addon: "'Nduja Calabrese +8€",
    },
  ];

  const MenuItem = ({ item, index, delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay + index * 0.1 }}
      className="border-b border-[#591B27]/10 pb-6 last:border-0"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-serif text-xl md:text-2xl text-[#591B27]">
          {item.name}
        </h4>
        <span className="text-[#591B27] font-medium text-lg">{item.price}</span>
      </div>
      <p className="text-[#666] text-sm leading-relaxed">{item.description}</p>
      {item.addon && (
        <p className="text-[#591B27]/60 text-xs mt-2 tracking-wide">
          {item.addon}
        </p>
      )}
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="bg-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#591B27] text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] tracking-tight">
            The Menu
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Starters & Desserts */}
          <div className="space-y-12">
            {/* Starters */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a] mb-6 pb-2 border-b border-[#1a1a1a]"
              >
                Starter
              </motion.h3>
              <div className="space-y-6">
                {starters.map((item, index) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    index={index}
                    delay={0.3}
                  />
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a] mb-6 pb-2 border-b border-[#1a1a1a]"
              >
                To Finish
              </motion.h3>
              <div className="space-y-6">
                {desserts.map((item, index) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    index={index}
                    delay={0.5}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pizzas */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs tracking-[0.3em] uppercase text-[#1a1a1a] mb-6 pb-2 border-b border-[#1a1a1a]"
            >
              Pizza
            </motion.h3>
            <div className="space-y-6">
              {pizzas.map((item, index) => (
                <MenuItem
                  key={item.name}
                  item={item}
                  index={index}
                  delay={0.4}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
