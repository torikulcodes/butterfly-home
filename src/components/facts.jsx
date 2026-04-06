/* eslint-disable no-unused-vars */
import React from "react";
import WordReveal from "./animationComponent/revealText";
import { motion } from "framer-motion";
import WorkButton from "./animationComponent/button";
import ScrollReveal from "./animationComponent/scroolReviel";
export default function Facts() {
  return (
    <section
      className="bg-cover bg-center text-white m-3 rounded-3xl"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/26ym8gLz/Gemini-Generated-Image-ncv575ncv575ncv5.png')",
      }}
    >
      <div className="max-weidth p-4 py-18 ">
        <div className="w-full">
          <h1 className="text-[16px] font-semibold pb-3">FUN FACTS</h1>

          {/* Animated Border */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // 👈 only once
            className="h-[1px] bg-gray-200"
          />
        </div>

        <div className="flex justify-end">
          <WordReveal
            text="Capturing moments that tell your story and bring emotions to real life. A next-gen solutions yet."
            className=" my-5 lg:max-w-3xl max-w-xl custom-heading"
          />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="bg-white px-5 py-8 flex flex-col justify-start gap-5 rounded-2xl w-full md:max-w-[380px]">
            <img
              className="w-30 h-30 rounded-full"
              src="https://i.postimg.cc/RFPn8rKt/emblem-ogp-001.png"
              alt="logo"
            />
            <p className="text-gray-500 text-xl">
              We design every project with long-term success in mind.
            </p>
            <WorkButton
              className="text-black font-semibold"
              text="GET IN TOUCH"
            />
          </div>

          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-16 md:gap-6 justify-start overflow-hidden lg:max-w-[600px]">
              <ScrollReveal direction="left">
                <div className="border-b border-gray-500 pb-2 flex items-center justify-between gap-4">
                  <p className="font-semibold  text-gray-500 text-nowrap">
                    CLIENT REVIEWS
                  </p>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.4 8.162L12 18.897l-7.334 3.856 1.4-8.162L.132 9.211l8.2-1.193z" />
                  </svg>
                </div>
                <h4 className="text-7xl font-bold py-1 text-white">4.9</h4>
                <p className="font-semibold  text-gray-500">
                  My goal is to capture the real, raw emotions
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left">
                <div className="border-b border-gray-500 pb-2 flex items-center gap-4 justify-between">
                  <p className="font-semibold  text-gray-500 text-nowrap">
                    PRODUCT LAUNCH
                  </p>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19l-2 2 3-8 7-7-2 9-6 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-7xl font-bold py-1 text-white">4.1K+</h4>
                <p className="font-semibold  text-gray-500">
                  MY GOAL IS TO CAPTURE THE REAL, RAW EMOTIONS
                </p>
              </ScrollReveal>
            </div>

            {/* second two section */}
            <div className="w-full md:flex md:justify-end mt-18">
              <div className="flex flex-col md:flex-row gap-16 md:gap-6 lg:max-w-[600px] overflow-hidden">
                <ScrollReveal direction="left">
                  <div>
                    <div className="border-b border-gray-500 pb-2 flex items-center justify-between w-full gap-4">
                      <p className="font-semibold  text-gray-500 text-nowrap">
                        READY TEAM MATES
                      </p>

                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m1-6a4 4 0 110-8 4 4 0 010 8zm8 0a4 4 0 110-8 4 4 0 010 8z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-7xl font-bold py-1 text-white">20</h4>
                    <p className="font-semibold  text-gray-500">
                      MY GOAL IS TO CAPTURE THE REAL, RAW EMOTIONS
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="left">
                  <div>
                    <div className="border-b border-gray-500 pb-2 flex items-center justify-between gap-4">
                      <p className="font-semibold text-gray-500 text-nowrap">
                        GET SUPPORT
                      </p>
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 10c0-3.866-3.582-7-8-7S2 6.134 2 10v4c0 1.105.895 2 2 2h2v-4H4v-2c0-2.21 2.686-4 6-4s6 1.79 6 4v2h-2v4h2c1.105 0 2-.895 2-2v-4z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-7xl font-bold py-1 text-white">24/7</h4>
                    <p className="font-semibold  text-gray-500">
                      MY GOAL IS TO CAPTURE THE REAL, RAW EMOTIONS
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
