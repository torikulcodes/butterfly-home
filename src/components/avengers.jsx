import React from "react";
import WorkButton from "./animationComponent/button";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import MagneticImage from "./animationComponent/magnaticImage";
import ScrollReveal from "./animationComponent/scroolReviel";

const TeamCard = ({ item }) => (
  <div className="bg-white p-3 pb-6 shadow-sm h-full w-full rounded-2xl border border-gray-100 flex flex-col gap-4">
    <div className="rounded-2xl overflow-hidden h-[300px] xs:h-[350px]">
      <MagneticImage
        src={item.image}
        className="w-full h-full object-cover cursor-pointer cursor-hover"
        containerClass="w-full h-full rounded-2xl"
        alt={item.name}
      />
    </div>

    <div className="flex flex-col gap-1 px-1">
      <h4 className="font-bold text-xl text-gray-900">{item.name}</h4>
      <p className="text-gray-500 font-medium">{item.role}</p>
    </div>

    <div className="flex gap-3 mt-auto px-1">
      {item.socials.map((social, index) => (
        <a
          href={social.link}
          key={index}
          className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center cursor-hover text-gray-700 hover:bg-black hover:text-white transition-all duration-800"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  </div>
);

export default function Avengers() {
  const teamData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "https://i.postimg.cc/TY4rq2Lg/home3-author-5-450x450.png",
      socials: [
        { icon: TiSocialFacebook, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: RiLinkedinFill, link: "#" },
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      image: "https://i.postimg.cc/QdKc6L16/home3-author-4-450x450.png",
      socials: [
        { icon: TiSocialFacebook, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: RiLinkedinFill, link: "#" },
      ],
    },
    {
      id: 3,
      name: "Emily Carter",
      role: "Project Manager",
      image: "https://i.postimg.cc/jjVPm849/home3-author-3-450x450.png",
      socials: [
        { icon: TiSocialFacebook, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: RiLinkedinFill, link: "#" },
      ],
    },
    {
      id: 4,
      name: "David Smith",
      role: "Backend Developer",
      image: "https://i.postimg.cc/xdrMhsP1/home3-author-2-450x450.png",
      socials: [
        { icon: TiSocialFacebook, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: RiLinkedinFill, link: "#" },
      ],
    },
    {
      id: 5,
      name: "Sophia Lee",
      role: "Marketing Specialist",
      image: "https://i.postimg.cc/sXsSDv8t/home3-author-1-450x450.png",
      socials: [
        { icon: TiSocialFacebook, link: "#" },
        { icon: FaTwitter, link: "#" },
        { icon: RiLinkedinFill, link: "#" },
      ],
    },
  ];

  const firstTwo = teamData.slice(0, 2);
  const rest = teamData.slice(2);

  return (
    <section className="max-w-7xl mx-auto p-4 my-10 overflow-hidden">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch w-full">
        {/* Text Section with Reveal */}
        <ScrollReveal
          direction="up"
          distance={40}
          className="col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col justify-center mb-6 lg:mb-0 lg:pr-8"
        >
          <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
            OUR AVENGERS
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet with our team member
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            What began over coffee-fueled brainstorming sessions has grown into
            a thriving digital agency.
          </p>
          <div className="w-fit">
            <WorkButton
              className="text-sm font-semibold px-6 py-3 uppercase tracking-wider"
              text="JOIN WITH US"
            />
          </div>
        </ScrollReveal>

        {/* First Two Cards */}
        {firstTwo.map((item, index) => (
          <ScrollReveal
            key={item.id}
            triggerOn="down"
            distance={45}
            duration={0.6}
            delay={0.1 * (index + 1)}
            direction="left"
            once={false}
            className="col-span-1"
          >
            <TeamCard item={item} />
          </ScrollReveal>
        ))}

        {/* Spacer for MD */}
        <div className="hidden md:block lg:hidden col-span-1"></div>

        {/* Remaining Cards */}
        {rest.map((item, index) => (
          <ScrollReveal
            key={item.id}
            triggerOn="down"
            distance={60}
            duration={0.6}
            delay={0.2 * (index + 1)}
            direction="left"
            once={false}
            className="col-span-1"
          >
            <TeamCard item={item} />
          </ScrollReveal>
        ))}

        {/* Final Spacer for MD */}
        <div className="hidden md:block lg:hidden col-span-1"></div>
      </div>
    </section>
  );
}
