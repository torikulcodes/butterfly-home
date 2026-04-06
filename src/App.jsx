import React from "react";
import Banner from "./components/banner";
import About from "./components/about";
import SelectedCreative from "./components/selectedCreative";
import { useAOS } from "./components/animationComponent/aos";
import Expertise from "./components/expertise";
import Feedbacks from "./components/feedbacks";
import Facts from "./components/facts";
import Avengers from "./components/avengers";
import InfiniteMarquee from "./components/shared/infiniteMarquee";
import HoverFillText from "./components/animationComponent/hoverFillText";
import HowWorks from "./components/howWorks";
import TellUs from "./components/tellUs";

export default function App() {
  useAOS();

  const text = [
    "Innovative Solutions",
    "Next Gen Agency",
    "Creative Minds",
    "Digital Excellence",
    "Future Driven",
  ];

  return (
    <div className="w-full mx-0 mr-0!">
      <Banner></Banner>
      <About></About>
      <SelectedCreative />
      <Expertise />
      <Feedbacks />
      <Facts />
      <Avengers />
      <InfiniteMarquee speed={120} repeat={5} gap="gap-12" className="py-4 cursor-hover">

        {
          text.map((item, index) => (
            <HoverFillText key={index} text={item} />
          ))
        }
        <span className="text-4xl bg-white w-20 h-20 shadow rounded-full text-center flex items-center justify-center">SM</span>
      </InfiniteMarquee>
      <HowWorks/>
      <TellUs/>
    </div>
  );
}
