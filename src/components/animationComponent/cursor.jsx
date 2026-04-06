import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 924px)");
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const handleResize = () => {
      setIsLg(mediaQuery.matches && !isTouchDevice);
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (!isLg) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;


    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };


    const handleMouseOver = (e) => {
      if (e.target.closest(".cursor-hover")) {
        gsap.to(cursor, {
          backgroundColor: "rgba(55, 65, 81, 0.4)", 
          borderColor: "rgba(55, 65, 81, 0)",       
          scale: 1.8, 
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(dot, {
          scale: 0, 
          duration: 0.2
        });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(".cursor-hover")) {
        gsap.to(cursor, {
          backgroundColor: "transparent",
          borderColor: "#374151", 
          scale: 1, 
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(dot, {
          scale: 1, 
          duration: 0.2
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isLg]);

  if (!isLg) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "2px solid #374151",
        backgroundColor: "transparent",
        boxShadow: "0 0 8px rgba(55, 65, 81, 0.3)",
      }}
    >
      <div
        ref={dotRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "6px",
          height: "6px",
          backgroundColor: "#374151",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)", 
          boxShadow: "0 0 4px currentColor",
        }}
      />
    </div>
  );
}