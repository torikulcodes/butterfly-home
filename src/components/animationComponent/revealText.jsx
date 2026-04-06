/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const WordReveal = ({ text, className }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Words gulo druto ashar jonno staggerChildren komiye 0.04-0.06 kora hoyeche
        staggerChildren: 0.05, 
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      x: 20, // Distance ektu komano hoyeche jate druto position-e ashe
      filter: "blur(5px)" 
    },
    visible: {
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: {
        // Duration 0.4 kora hoyeche smoothness er jonno
        // Ease function-ti text-ke ekta 'snappy' kintu 'smooth' feel dibe
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1], 
      },
    },
  };

  return (
    <motion.h2
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }} // 20% visible holei shuru hobe
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default WordReveal;