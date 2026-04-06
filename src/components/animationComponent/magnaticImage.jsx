import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MagneticImage = ({ src, alt, className, containerClass }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Hover korle image-er behavior
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.15, // Zoom ektu bariye deya holo
        duration: 0.8, // Smoothness baranor jonno duration barano holo
        ease: "power3.out", // Ektu besi dynamic ease
      });
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();

      // Mouse container-er center theke koto dure
      const mouseX = clientX - (left + width / 2);
      const mouseY = clientY - (top + height / 2);

      // Magnetic effect: Ekhane '/ 6' kore deya hoyeche jate movement beshi hoy
      // Jog korle move effect ta responsive hobe
      gsap.to(image, {
        x: mouseX / 6,
        y: mouseY / 6,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative ${containerClass}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default MagneticImage;
