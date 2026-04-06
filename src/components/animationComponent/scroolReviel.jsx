/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = "",
  once = true,
  threshold = 0.2,
  triggerOn = "both", // "down" | "up" | "both"
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const hasAnimated = useRef(false);

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let currentDirection = "down";

    const handleScroll = () => {
      const scrollY = window.scrollY;
      currentDirection = scrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ✅ direction check
          let shouldAnimate = false;

          if (triggerOn === "both") shouldAnimate = true;
          else if (triggerOn === "down" && currentDirection === "down")
            shouldAnimate = true;
          else if (triggerOn === "up" && currentDirection === "up")
            shouldAnimate = true;

          if (shouldAnimate) {
            // ✅ once control
            if (once && hasAnimated.current) return;

            controls.start({
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
              },
            });

            hasAnimated.current = true;
          }
        } else {
          // 🔄 reset only if once = false
          if (!once) {
            controls.start({
              opacity: 0,
              ...directions[direction],
              transition: { duration: duration * 0.6 },
            });
          }
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, direction, duration, delay, once, threshold, triggerOn]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;