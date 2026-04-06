/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const HoverFillText = ({ text = "OUTLINE TEXT",duration = 0.5, className = "" }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-block ${className}`}
    >

      <h1
        className="text-6xl font-black uppercase"
        style={{
          WebkitTextStroke: "1.5px  black",
          color: "transparent",
        }}
      >
        {text}
      </h1>

      <motion.h1
        variants={{
          rest: { width: "0%" }, 
          hover: { width: "100%" }, 
        }}
        transition={{ duration: duration, ease: "easeInOut" }}
        className="absolute top-0 left-0 text-6xl font-black uppercase text-black overflow-hidden whitespace-nowrap"
        style={{
          WebkitTextStroke: "1.5px black",
        }}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};

export default HoverFillText;
