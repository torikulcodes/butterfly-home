/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animationComponent/scroolReviel";

// Tag Component
const Tag = ({ children }) => (
  <span className="inline-block bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black rounded-full border border-gray-200">
    {children}
  </span>
);

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      initial={false} // 🔥 important fix
      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={`relative overflow-hidden cursor-pointer transition-all duration-500 ${
        isOpen
          ? "bg-white rounded-3xl p-4 lg:p-8 mb-8 border-0"
          : "bg-transparent p-4 lg:p-8 mb-0 border-t border-gray-300 pb-8"
      }`}
      onClick={onClick}
    >
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-3xl md:text-4xl text-gray-900 tracking-tight">
            {item.title}
          </h2>

          {/* Tags (Visible in both states) */}
          <div className="flex flex-wrap gap-2 cursor-hover">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {/* Plus/Minus Button & See More */}
        <div className="flex items-center gap-3 self-end md:self-center">
          <div className="relative w-10 h-10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="minus"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 12H5"
                    />
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ scale: 0, rotate: 90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -90 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black border border-gray-200 shadow-sm"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
            See More
          </span>
        </div>
      </div>

      {/* --- Expanded Content Section --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Description */}
              <div className="max-w-md">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {item.description ||
                    "Building future-ready digital solutions with cutting-edge technology and seamless user experiences."}
                </p>
              </div>

              {/* Image Container */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full cursor-hover h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const accordionData = [
  {
    title: "No-Code Website",
    tags: ["BRANDING", "UX"],
    description:
      "Empower your business with high-performance websites built without a single line of code. Speed meets creativity.",
    imageSrc: "https://i.postimg.cc/t4fpm6dK/home3-accordion1-400x260.jpg",
  },
  {
    title: "Web3 & Crypto",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX", "WEBSITE"],
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions for the decentralized web.",
    imageSrc: "https://i.postimg.cc/SNx4Sdgk/home-2-img2-min-400x260.jpg",
  },
  {
    title: "Low-Code Development",
    tags: ["BRANDING", "UX"],
    description:
      "Tailored Low-Code logic allows for agile adjustments, ensuring a more adaptable and cost-effective digital presence.",
    imageSrc: "https://i.postimg.cc/289DVWtm/home1-bg-img3-400x260.webp",
  },
  {
    title: "UI/UX Design",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT", "UX", "WEBSITE"],
    description:
      "Designing user-centric interfaces and journeys that are both functional and delightful for your users.",
    imageSrc: "https://i.postimg.cc/X71bp5Pd/home1-bg-img5-400x260.webp",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(1); // Default Web3 opens

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {accordionData.map((item, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            delay={index * 0.1} // 🔥 stagger effect
            once={false}
          >
            <AccordionItem
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index)}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
