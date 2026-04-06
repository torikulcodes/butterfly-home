/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";

const AnimatedIconButton = ({ Icon = MoveRight, size = 18, className = "" }) => {
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    const el = iconRef.current;

    // Timeline ব্যবহার করছি যাতে একটির পর একটি নিখুঁতভাবে হয়
    const tl = gsap.timeline();

    tl.to(el, {
      x: 35,          // ডানে সরে যাবে
      opacity: 0,     // অদৃশ্য হবে
      duration: 0.4,
      ease: "power2.in",
    })
    .set(el, { x: -35 }) // অদৃশ্য অবস্থায় দ্রুত বামে চলে যাবে (ইউজার দেখবে না)
    .to(el, {
      x: 0,           // আবার মাঝখানে আসবে
      opacity: 1,     // দৃশ্যমান হবে
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      className={`group relative overflow-hidden text-white bg-black w-10 h-10 rounded-full flex justify-center items-center transition-all cursor-pointer duration-300 hover:scale-105 ${className}`}
    >
      <div ref={iconRef} className="flex items-center justify-center ">
        <Icon size={size} />
      </div>
    </button>
  );
};

export default AnimatedIconButton;