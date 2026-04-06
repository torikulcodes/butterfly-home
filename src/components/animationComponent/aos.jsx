// useAOS.js (GSAP Version)
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAOS = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");

    elements.forEach((el) => {
      const animation = el.getAttribute("data-aos");
      let vars = {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse", // Scroll up korle abar reset hobe
        },
      };

      if (animation === "fade-up") vars.y = 50;
      if (animation === "fade-down") vars.y = -50;
      if (animation === "fade-left") vars.x = 50;
      if (animation === "fade-right") vars.x = -50;
      if (animation === "zoom-in") vars.scale = 0.8;

      gsap.from(el, vars);
    });
  }, []);
};