import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WordReveal from "./animationComponent/revealText";
import WorkButton from "./animationComponent/button";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const img = imgRef.current;
    const section = sectionRef.current;
    gsap.set(img, {
      willChange: "transform",
    });

    const parallaxTween = gsap.to(img, {
      y: () => {
        const imgHeight = img.offsetHeight;
        const sectionHeight = section.offsetHeight;
        const moveDistance = (imgHeight - sectionHeight) / 2;
        return -moveDistance;
      },
      ease: "power1.out",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      parallaxTween.kill();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] sm:h-[800px] lg:min-h-[calc(100vh-10px)] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src="https://i.postimg.cc/xdGSYByW/premium-photo-1671710570674-b3e244af45c2.avif"
          className="absolute top-0 left-0 w-full h-[130%] object-cover"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
          alt="banner"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>

      <div className="absolute bottom-0 right-0 left-0 md:top-1/3 text-white py-18 px-3">
        <div className="flex flex-col justify-between items-start gap-37 md:flex-row max-w-7xl mx-auto">
          <div className="flex flex-col flex-2 md:order-1">
            <WordReveal
              text="An independent digital design studio based in New York."
              className="font-semibold text-3xl md:text-[40px]  max-w-[720px] lg:text-6xl mx-auto"
            />

            <WorkButton
              text="Our works"
              className="group bg-white text-gray-700 rounded-3xl p-1 pr-6 w-max flex items-center gap-2 mt-10 font-semibold shadow-sm transition-all hover:shadow-md"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1.5 mt-6">
            <a
              className="opacity-50 hover:opacity-90 transition-opacity duration-800 inline-block w-max cursor-hover"
              href="#"
            >
              DRIBBLE
            </a>
            <a
              className="opacity-50 hover:opacity-90 transition-opacity duration-800 inline-block w-max cursor-hover"
              href="#"
            >
              INSTAGRAM
            </a>
            <a
              className="opacity-50 hover:opacity-90 transition-opacity duration-800 inline-block w-max cursor-hover"
              href="#"
            >
              BEHANCE
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes scroll-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(15px);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
