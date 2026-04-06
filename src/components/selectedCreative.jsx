import React from "react";
import ScrollReveal from "./animationComponent/scroolReviel";
import AnimatedIconButton from "./animationComponent/animatedIconButton";
import WorkButton from "./animationComponent/button";

export default function SelectedCreative() {
  return (
    <section className="m-2 bg-white rounded-2xl shadow p-3 py-10 overflow-hidden">
      {/* 👆 IMPORTANT: overflow hidden */}

      <div className="text-center text-6xl md:text-8xl font-semibold max-w-lg md:max-w-2xl mx-auto">
        <span className="text-gray-700">Selected</span>
        <span className="text-gray-300"> creative works</span>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* image 1 */}
        <div className="w-full relative group col-span-2 overflow-hidden">
          <ScrollReveal direction="up" once={false} distance={60}>
            {/* 👆 distance কমানো */}
            <img
              className="rounded-2xl w-full max-h-[760px] object-cover"
              src="https://i.postimg.cc/9QCQcLPj/github-image9.webp"
              alt="model"
            />
          </ScrollReveal>

          <div
            className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-6 
            opacity-0 -translate-y-10 pointer-events-none 
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto 
            transition-all duration-500 ease-out"
          >
            {/* 👆 FIX: m-5 remove → left-5 right-5 use */}

            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-2xl">Aveneu Studio Creative direction</h2>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="border cursor-hover px-4 py-0.5 rounded-[40px] cursor-pointer">
                    BRANDING
                  </span>
                  <span className="border cursor-pointer cursor-hover px-4 py-0.5 rounded-[40px]">
                    PRODUCT
                  </span>
                  <span className="border cursor-pointer px-4 py-0.5 rounded-[40px] cursor-hover">UX</span>
                </div>
              </div>
              <div className="cursor-hover cursor-pointer">
                <AnimatedIconButton />
              </div>{" "}
            </div>
          </div>
        </div>

        {/* image 2 */}
        <div className="w-full relative group overflow-hidden">
          <ScrollReveal distance={60}>
            <img
              className="rounded-2xl w-full max-h-[760px] object-cover"
              src="https://i.postimg.cc/FH3H42kL/home3-postgrid-3-min.jpg"
              alt="model"
            />
          </ScrollReveal>

          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-6 opacity-0 -translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-2xl">Aveneu Studio Creative direction</h2>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="border cursor-pointer px-4 cursor-hover py-0.5 rounded-[40px]">
                    BRANDING
                  </span>
                  <span className="border cursor-pointer cursor-hover px-4 py-0.5 rounded-[40px]">
                    PRODUCT
                  </span>
                  <span className="border cursor-pointer cursor-hover px-4 py-0.5 rounded-[40px] cursor-hover">
                    UX
                  </span>
                </div>
              </div>
              <div className="cursor-hover cursor-pointer">
                <AnimatedIconButton />
              </div>{" "}
            </div>
          </div>
        </div>

        {/* image 3 */}
        <div className="w-full relative group overflow-hidden">
          <ScrollReveal distance={60}>
            <img
              className="rounded-2xl w-full max-h-[760px] object-cover"
              src="https://i.postimg.cc/sXVXKwXh/home3-postgrid-2-1.jpg"
              alt="model"
            />
          </ScrollReveal>

          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-6 opacity-0 -translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-2xl">Aveneu Studio Creative direction</h2>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="border cursor-pointer cursor-hover px-4 py-0.5 rounded-[40px]">
                    BRANDING
                  </span>
                  <span className="border cursor-pointer cursor-hover px-4 py-0.5 rounded-[40px]">
                    PRODUCT
                  </span>
                  <span className="border cursor-pointer px-4 py-0.5 rounded-[40px] cursor-hover">
                    UX
                  </span>
                </div>
              </div>

              <div className="cursor-hover cursor-pointer">
                <AnimatedIconButton />
              </div>
            </div>
          </div>
        </div>

        {/* image 4 */}
        <div className="w-full relative group col-span-2 overflow-hidden">
          <ScrollReveal distance={60}>
            <img
              className="rounded-2xl w-full max-h-[760px] object-cover"
              src="https://i.postimg.cc/9QCQcLPj/github-image9.webp"
              alt="model"
            />
          </ScrollReveal>

          <div className="bg-white rounded-2xl absolute bottom-5 left-5 right-5 p-6 opacity-0 -translate-y-10 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h2 className="text-2xl">
                  Aveneu Studio LOOP Agency Creative branding
                </h2>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="border px-4 py-0.5 rounded-[40px] cursor-hover cursor-pointer">
                    MODULE
                  </span>
                  <span className="border px-4 py-0.5 rounded-[40px] cursor-hover cursor-pointer">
                    UX
                  </span>
                </div>
              </div>

              <div className="cursor-hover cursor-pointer">
                <AnimatedIconButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center items-center my-8">
        <WorkButton text="MORE WORKS" className="font-semibold" />
      </div>
    </section>
  );
}
