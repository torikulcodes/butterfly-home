import React from "react";
import WorkButton from "./animationComponent/button";
import { Star } from "lucide-react";

export default function Feedbacks() {
    
const cardData = [
  {
    id: "1",
    text: "Working with this team was an incredible experience from start to finish. Their attention to detail, creative thinking, and deep understanding of modern design principles helped us build a strong and impactful digital presence. They didn’t just deliver what we asked for — they went beyond expectations and added real value to our brand.",
    img: "https://i.postimg.cc/2yfF4mkF/home1-highlight3.jpg",
    name: "Sarah Johnson",
    position: "Marketing Director",
  },
  {
    id: "2",
    text: "The design quality and user experience they delivered truly exceeded our expectations. Every interaction felt smooth, intuitive, and well thought out. Communication was always clear and professional, making the entire collaboration process enjoyable and stress-free. I would highly recommend them to anyone looking for high-quality digital solutions.",
    img: "https://i.postimg.cc/FRSVd14s/home1-highlight2.jpg",
    name: "Michael Chen",
    position: "Product Manager",
  },
  {
    id: "3",
    text: "They transformed our initial ideas into a visually stunning and highly functional product. The final result not only looked amazing but also performed exceptionally well. We immediately noticed improvements in user engagement, retention, and overall customer satisfaction. Their expertise and dedication truly made a difference for our business.",
    img: "https://i.postimg.cc/cJ2cLwPY/home1-highlight1.jpg",
    name: "Emily Carter",
    position: "Founder & CEO",
  },
];

  return (
    <section className="max-weidth p-4 py-10 ">
      <h1 className="text-[16px] font-semibold w-full border-b border-gray-200 pb-3">
        USER FEEDBACKS
      </h1>

      <div className="w-full my-6 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-3 relative">
        <div className="flex-1 lg:sticky lg:top-0 lg:z-30">
          <h2 className="custom-heading">
            Accelerating growth, and unlocking.{" "}
            <img
              className="w-12 h-12 rounded-full inline-block"
              src="https://i.postimg.cc/cJ2cLwPY/home1-highlight1.jpg"
              alt=""
            />
            <img
              className="w-12 h-12 rounded-full inline-block mx-2"
              src="https://i.postimg.cc/FRSVd14s/home1-highlight2.jpg"
              alt=""
            />
            <img
              className="w-12 h-12 rounded-full inline-block"
              src="https://i.postimg.cc/2yfF4mkF/home1-highlight3.jpg"
              alt=""
            />{" "}
            new potential. Let’s build your brand—together.
          </h2>
          <WorkButton text="GET A QUOTE" className="font-semibold my-8" />
        </div>

        <div className="flex flex-col gap-6 flex-1 w-full">
          {cardData.map((card) => (
            <div
              className="bg-white hover:bg-black transition-colors duration-800 hover:text-white shadow rounded-2xl w-full px-6 py-8"
              key={card.id}
            >
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}

              <p className="my-6 text-2xl">"{card.text}"</p>

              <div className="border-t border-gray-200 py-4 flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl">{card.name}</h3>
                  <span className="text-gray-500">{card.position}</span>
                </div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={card.img}
                  alt="employee"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
