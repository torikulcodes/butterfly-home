/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

/**
 * @param {number} repeat - কতবার কন্টেন্টটি রিপিট হবে স্ক্রিন ভরার জন্য (Default: 20)
 */
const InfiniteMarquee = ({ 
  children, 
  speed = 20, 
  direction = "left", 
  gap = "gap-10", 
  className = "",
  repeat = 20 
}) => {
  
  const isLeft = direction === "left";
  
  // আপনার দেওয়া কন্টেন্টকে (Text/Button) একটি অ্যারেতে কনভার্ট করা হচ্ছে
  const contentArray = Array.from({ length: repeat }, (_, i) => (
    <div key={i} className={`flex items-center ${gap}`}>
      {children}
    </div>
  ));

  return (
    <div className={`overflow-hidden flex w-full select-none ${className}`}>
      <motion.div
        className={`flex whitespace-nowrap ${gap}`}
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* প্রথম সেট: এটি আপনার পুরো স্ক্রিন ফিল করবে */}
        <div className={`flex items-center ${gap}`}>
          {contentArray}
        </div>
        
        {/* দ্বিতীয় সেট: এটি লুপটিকে ইনডলেস বা স্মুথ বানাবে */}
        <div className={`flex items-center ${gap}`}>
          {contentArray}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;