import React from "react";
import ScrollReveal from "./animationComponent/scroolReviel";
import AnimatedIconButton from "./animationComponent/animatedIconButton";
import WorkButton from "./animationComponent/button";

export default function SelectedCreative() {
  return (
    <section className="m-2 bg-white rounded-2xl shadow p-3 py-10 overflow-hidden">
      <div className="text-center text-5xl md:text-8xl font-semibold max-w-lg md:max-w-2xl mx-auto leading-tight">
        <span className="text-gray-700">Selected</span>
        <span className="text-gray-300"> creative works</span>
      </div>

      {/* Grid container: মোবাইলে ১ কলাম, ডেক্সটপে ২ কলাম */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 w-full">
        {/* image 1 - Full Width on both */}
        <div className="w-full relative group md:col-span-2 overflow-hidden h-[450px] md:h-[760px] rounded-2xl">
          <ScrollReveal
            direction="up"
            once={false}
            triggerOn="down"
            distance={60}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover rounded-2xl cursor-hover cursor-pointer"
              src="https://i.postimg.cc/9QCQcLPj/github-image9.webp"
              alt="work 1"
            />
          </ScrollReveal>
          {/* Card Hover Content */}
          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-4 md:p-6 opacity-0 -translate-y-5 md:-translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-10">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-xl md:text-2xl font-medium">
                  Aveneu Studio Creative direction
                </h2>
                <div className="mt-2 md:mt-4 flex gap-2 flex-wrap">
                  <span className="border text-[10px] md:text-xs px-3 cursor-hover cursor-pointer py-1 rounded-full">
                    BRANDING
                  </span>
                  <span className="border text-[10px] md:text-xs px-3 py-1 cursor-hover cursor-pointer rounded-full">
                    PRODUCT
                  </span>
                  <span className="border text-[10px] md:text-xs px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    UX
                  </span>
                </div>
              </div>
              <AnimatedIconButton className="cursor-hover cursor-pointer" />
            </div>
          </div>
        </div>

        {/* image 2 */}
        <div className="w-full relative group overflow-hidden h-[450px] md:h-[760px] rounded-2xl">
          <ScrollReveal
            direction="up"
            once={false}
            triggerOn="down"
            distance={60}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover rounded-2xl cursor-hover cursor-pointer"
              src="https://i.postimg.cc/FH3H42kL/home3-postgrid-3-min.jpg"
              alt="work 2"
            />
          </ScrollReveal>
          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-4 md:p-6 opacity-0 -translate-y-5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-10">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-xl md:text-2xl font-medium">
                  Creative Identity
                </h2>
                <div className="mt-2 flex gap-2">
                  <span className="border text-[10px] px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    UX
                  </span>
                </div>
              </div>
              <AnimatedIconButton className="cursor-hover cursor-pointer" />
            </div>
          </div>
        </div>

        {/* image 3 */}
        <div className="w-full relative group overflow-hidden h-[450px] md:h-[760px] rounded-2xl">
          <ScrollReveal
            direction="up"
            once={false}
            triggerOn="down"
            distance={60}
            className="w-full h-full"
          >
            <img
              className="w-full h-full cursor-hover cursor-pointer  object-cover rounded-2xl"
              src="https://i.postimg.cc/sXVXKwXh/home3-postgrid-2-1.jpg"
              alt="work 3"
            />
          </ScrollReveal>
          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-4 md:p-6 opacity-0 -translate-y-5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-10">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-xl md:text-2xl font-medium">
                  Digital Solution
                </h2>
                <div className="mt-2 flex gap-2">
                  <span className="border text-[10px] px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    PRODUCT
                  </span>
                </div>
              </div>
              <AnimatedIconButton className="cursor-hover cursor-pointer" />
            </div>
          </div>
        </div>

        {/* image 4 - Full Width on both */}
        <div className="w-full relative group md:col-span-2 overflow-hidden h-[450px] md:h-[760px] rounded-2xl">
          <ScrollReveal
            direction="up"
            once={false}
            triggerOn="down"
            distance={60}
            className="w-full h-full"
          >
            <img
              className="w-full h-full cursor-hover cursor-pointer object-cover rounded-2xl"
              src="https://i.postimg.cc/9QCQcLPj/github-image9.webp"
              alt="work 4"
            />
          </ScrollReveal>
          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-4 md:p-6 opacity-0 -translate-y-5 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 z-10">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-xl md:text-2xl font-medium">
                  LOOP Agency Creative
                  LOOP Agency Creative
                  LOOP Agency Creative
                </h2>
                <div className="mt-2 flex gap-2">
                  <span className="border text-[10px] px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    BRANDING
                  </span>
                  <span className="border text-[10px] px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    UX
                  </span>
                  <span className="border text-[10px] px-3 py-1 rounded-full cursor-hover cursor-pointer">
                    PRODUCT
                  </span>
                </div>
              </div>

              <AnimatedIconButton className="cursor-hover cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* More Works Button */}
      <div className="flex justify-center items-center mt-12 mb-8">
        <WorkButton text="MORE WORKS" className="font-semibold cursor-hover" />
      </div>
    </section>
  );
}
