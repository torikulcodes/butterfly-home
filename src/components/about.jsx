import React from "react";
import WordReveal from "./animationComponent/revealText";
import ScrollReveal from "./animationComponent/scroolReviel";
import MagneticImage from "./animationComponent/magnaticImage";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto p-4 py-10">
      <h1 className="text-[16px] font-semibold w-full border-b border-gray-200 pb-3">
        ABOUT COMPANY
      </h1>

      <WordReveal
        text="We’re a team of designers and developers who specialize in building websites that work."
        className="my-5 max-w-4xl lg:max-w-4xl custom-heading mx-auto text-gray-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 relative w-full mt-8 mb-12">
        {/* first image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          <ScrollReveal
            direction="right" // এটি বাম থেকে ডানে আসবে
            distance={150} // Distance বাড়ানো হয়েছে যাতে স্লাইড বোঝা যায়
            triggerOn="both"
            once={false}
            className="w-full h-full" // ✅ FIX: ScrollReveal কেই সরাসরি ফুল হাইট দেওয়া হয়েছে
          >
            <MagneticImage
              src="https://i.postimg.cc/YqG83xTS/home-2-bg1-min.jpg"
              alt="team member 1"
              containerClass="w-full h-full rounded-2xl"
              className="w-full h-full object-cover"
            />
          </ScrollReveal>
        </div>

        {/* Second Image Section with Logos */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <ScrollReveal
              direction="left" // এটি ডান থেকে বামে আসবে
              distance={150} // Distance বাড়ানো হয়েছে
              triggerOn="both"
              once={false}
              className="w-full h-full" // ✅ FIX: ScrollReveal কেই সরাসরি ফুল হাইট দেওয়া হয়েছে
            >
              <MagneticImage
                src="https://i.postimg.cc/BQLNgCRH/home1-bg-img15.jpg"
                alt="team member 2"
                containerClass="w-full h-full rounded-2xl"
                className="w-full h-full object-cover"
              />
            </ScrollReveal>
          </div>

          {/* Overlapping logos */}
          <div className="absolute flex right-4 -bottom-6 md:right-6 md:-bottom-8 z-50">
            <img
              className="w-16 h-16 md:w-24 md:h-24 z-50 border-2 md:border-4 border-white rounded-full object-cover shadow-lg"
              src="https://i.postimg.cc/T3cJMhVk/premium-photo-1725645453499-1708a7e6be63.avif"
              alt="logo 1"
            />
            <img
              className="w-16 h-16 md:w-24 md:h-24 -ml-4 z-40 border-2 md:border-4 border-white rounded-full object-cover shadow-lg"
              src="https://i.postimg.cc/3JxKCcLw/istockphoto-2216820032-2048x2048.jpg"
              alt="logo 2"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 my-10 mt-16 md:mt-10">
        <div>
          <h3 className="text-2xl text-gray-800 pb-6">Our mission</h3>
          <p className="text-gray-500">
            We build bold identities that speak your story—visually and
            verbally. From websites to packaging, we design experiences that are
            beautiful and functional. We don’t just make things look good.
          </p>
        </div>

        <div>
          <h3 className="text-2xl pb-6 text-gray-800">Our mission</h3>
          <p className="text-gray-500">
            We build bold identities that speak your story—visually and
            verbally. From websites to packaging, we design experiences that are
            beautiful and functional. We don’t just make things look good.
          </p>
        </div>

        <div>
          <h3 className="text-2xl pb-6 text-gray-800">Our mission</h3>
          <div className="text-gray-500 flex flex-col gap-2">
            <span className="border-b border-gray-300 pb-3">
              <span className="text-gray-800">Awwwards</span>
              <span> – Website design agency</span>
            </span>
            <span className="border-b border-gray-300 pb-3">
              <span className="text-gray-800">Dribbble</span>
              <span> – Number #01 designer</span>
            </span>
            <span className="border-b border-gray-300 pb-3">
              <span className="text-gray-800">Google Inc.</span>
              <span> – Website of the Day</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}