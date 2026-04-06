import React from "react";
import WordReveal from "./animationComponent/revealText";
import { MessageSquareText, Search, Sun } from "lucide-react";
import ScrollReveal from "./animationComponent/scroolReviel";

export default function HowWorks() {
  const data = [
    {
      id: "1",
      title: "Discussions",
      icon: MessageSquareText,
      description:
        "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    },
    {
      id: "2",
      title: "Find solution",
      icon: Search,
      description:
        "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    },
    {
      id: "3",
      title: "Innovation",
      icon: Sun,
      description:
        "User-centric digital experiences that empower brands, drive growth, and make a lasting impact.",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto p-4 py-18">
      <h1 className="text-[16px] font-semibold w-full border-b border-gray-200 pb-3">
        ABOUT COMPANY
      </h1>

      <div className="flex justify-end w-full">
        <div className="max-w-4xl w-full">
          <WordReveal
            text="What started as a small idea has grown into a powerhouse of creativity and innovation."
            className="my-8 custom-heading mx-auto text-gray-800"
          />

          <div className="border-b border-gray-200">
            {data.map((item) => (
              <ScrollReveal once={true} direction="right" duration={1} distance={50} >
                <div
                  key={item.id}
                  // ৩ কলামের গ্রিড সেট করা হয়েছে
                  className="border-t py-8 grid grid-cols-1 md:grid-cols-3 border-gray-200 gap-6 items-start"
                >
                  {/* Icon + Title: এটি ৩ ভাগের ১ ভাগ জায়গা নেবে (col-span-1) */}
                  <div className="md:col-span-1 flex items-center gap-6 cursor-hover">
                    <item.icon
                      size={50}
                      className="text-gray-400 stroke-1"
                    />
                    <span className="font-bold text-xl text-gray-800 leading-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Description: এটি ৩ ভাগের ২ ভাগ জায়গা নেবে (col-span-2) */}
                  <p className="md:col-span-2 text-gray-500 text-lg leading-relaxed lg:pl-10">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
