import React, { useRef } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

export default function WorkButton({ text, className }) {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    // Smooth rotate (center fixed)
    gsap.to(iconRef.current, {
      rotate: 180,
      duration: 0.6,
      ease: "power3.out",
      transformOrigin: "50% 50%", // 👈 center fixed
    });

    const chars = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.04,
        ease: "power3.out",
        overwrite: true,
      }
    );
  };

  const handleMouseLeave = () => {
    // Rotate back smoothly
    gsap.to(iconRef.current, {
      rotate: 0.8,
      duration: 0.6,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    });

    const chars = textRef.current.querySelectorAll(".char");

    // 👇 Bottom → Up animation (reverse feel)
    gsap.fromTo(
      chars,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "power3.out",
        overwrite: true,
      }
    );
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} cursor-pointer cursor-hover flex items-center gap-2`}
    >
      {/* Icon */}
      <span
        ref={iconRef}
        className="text-white bg-black w-10 h-10 flex items-center justify-center rounded-full"
      >
        <Plus size={16} />
      </span>

      {/* Text */}
      <span ref={textRef} className="flex overflow-hidden">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}