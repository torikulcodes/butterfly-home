import React from "react";
import WordReveal from "./animationComponent/revealText";
import Accordion from "./shared/accordian";
import WorkButton from "./animationComponent/button";

export default function Expertise() {
  return (
    <section className="max-weidth p-4 py-10 ">
      <div>
        {" "}
        <h1 className="text-[16px] font-semibold w-full border-b border-gray-200 pb-3">
          ABOUT COMPANY
        </h1>
        <WordReveal
          text="Here to help with everything from small updates to full-scale redesigns, tailored to your evolving needs."
          className="text-3xl md:text-[40px] my-5 max-w-4xl lg:max-w-4xl lg:text-5xl mx-auto text-gray-800"
        />
      </div>
      <Accordion />
      <div className="flex justify-center items-center text-center">
        <WorkButton
          text="LETS TALK"
          className="group bg-white text-gray-700 rounded-3xl p-1 pr-6 w-max flex items-center gap-2 mt-10 font-semibold shadow-sm transition-all hover:shadow-md"
        />
      </div>
    </section>
  );
}
