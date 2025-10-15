import React, { useState } from "react";
import rightArrow from "@/assets/icons/right.svg";
import leftArrow from "@/assets/icons/left.svg";

const valuesData = [
  {
    title: "Innovation",
    description:
      "We constantly seek new and better ways to help creators, embracing technology and fresh ideas to stay ahead.",
  },
  {
    title: "Empowerment",
    description:
      "We empower our users by providing them with the tools and community support they need to succeed.",
  },
  {
    title: "Community",
    description:
      "We foster a collaborative and supportive environment where every voice is heard and every contribution is valued.",
  },
  {
    title: "Transparency",
    description:
      "We believe honesty builds trust, and we ensure that our processes and communication are open and clear.",
  },
  {
    title: "Creativity",
    description:
      "We celebrate imagination and encourage creators to express their unique ideas without limitations.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to building a platform that supports long-term growth and a positive impact on society.",
  },
  {
    title: "Collaboration",
    description:
      "We value teamwork and believe great things happen when diverse minds come together with a shared purpose.",
  },
  {
    title: "Integrity",
    description:
      "We uphold strong moral principles and always strive to do the right thing for our users and community.",
  },
  {
    title: "Growth",
    description:
      "We constantly learn, adapt, and innovate to help our users and our platform evolve together.",
  },
];

export const AboutCoreValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 3;
  const totalDots = Math.ceil(valuesData.length / cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= valuesData.length ? 0 : prev + cardsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0
        ? (totalDots - 1) * cardsPerPage
        : prev - cardsPerPage
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerPage);
  };

  const visibleCards = valuesData.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  const activeDot = Math.floor(currentIndex / cardsPerPage);

  return (
    <div className="w-full h-[535px] relative bg-[#1A0E1E]/70 shadow-[0px_-2px_132.4px_1px_rgba(18,18,18,1)] overflow-hidden">
      {/* Title */}
      <div className="text-[#C6C6C6] text-5xl font-medium font-unbounded leading-loose flex items-center justify-center py-14">
        Our Core Values
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 px-24 gap-6 transition-all duration-500 ease-in-out">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#2C1B2C] shadow-[0px_0px_20px_0px_rgba(255,57,176,1)] text-white text-center px-5 py-9"
          >
            <div className="text-3xl font-medium font-unbounded leading-loose">
              {card.title}
            </div>
            <div className="text-base font-normal font-unbounded leading-normal">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleNext}
        className="w-12 h-12 px-4 py-3 left-[1377px] top-[275px] absolute flex justify-center items-center bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] cursor-pointer hover:bg-fuchsia-400/20 transition-all"
      >
        <img src={rightArrow} alt="Next" className="w-4 h-6" />
      </div>

      {/* Left Arrow */}
      <div
        onClick={handlePrev}
        className="w-12 h-12 px-4 py-3 left-[16px] top-[276px] absolute origin-top-left bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] flex justify-center items-center cursor-pointer hover:bg-fuchsia-400/20 transition-all"
      >
        <img src={leftArrow} alt="Prev" className="w-4 h-6" />
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center items-center gap-2.5 pt-14">
        {Array.from({ length: totalDots }).map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`cursor-pointer rounded-full transition-all duration-300 ${
              dotIndex === activeDot
                ? "w-6 h-6 bg-[#FF80EB]"
                : "w-5 h-5 bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
