import React, { useState } from "react";
import rightArrow from "@/assets/icons/right.svg";
import leftArrow from "@/assets/icons/left.svg";
import partner1 from "@/assets/images/partner-1.png";
import partner2 from "@/assets/images/partner-2.png";
import partner3 from "@/assets/images/partner-3.png";
import partner4 from "@/assets/images/partner-4.png";
import partner5 from "@/assets/images/partner-5.png";

const valuesData = [
  {
    img: partner1,
  },
  {
    img: partner2,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
  {
    img: partner3,
  },
  {
    img: partner4,
  },
  {
    img: partner5,
  },
];

export const AboutCoreValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerPage = 5;
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

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index * cardsPerPage);
  // };

  const visibleCards = valuesData.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  // const activeDot = Math.floor(currentIndex / cardsPerPage);

  return (
    <div className="w-full h-[480px] relative bg-[#1A0E1E]/70 shadow-[0px_-2px_132.4px_1px_rgba(18,18,18,1)] overflow-hidden">
      {/* Title */}
      <div className="text-[#C6C6C6] text-5xl font-medium font-unbounded leading-loose flex items-center justify-center py-14">
        Our Partners
      </div>

      {/* Cards */}
      <div className="grid grid-cols-5 gap-2 transition-all duration-500 ease-in-out">
        {visibleCards.map((card, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              className="w-48 h-14 object-contain"
              src={card.img}
              alt={`Partner ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleNext}
        className="w-12 h-12 px-4 py-3 right-3 top-[215px] absolute flex justify-center items-center bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] cursor-pointer hover:bg-fuchsia-400/20 transition-all"
      >
        <img src={rightArrow} alt="Next" className="w-4 h-6" />
      </div>

      {/* Left Arrow */}
      <div
        onClick={handlePrev}
        className="w-12 h-12 px-4 py-3 left-[16px] top-[216px] absolute origin-top-left bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] flex justify-center items-center cursor-pointer hover:bg-fuchsia-400/20 transition-all"
      >
        <img src={leftArrow} alt="Prev" className="w-4 h-6" />
      </div>

      {/* Carousel Dots */}
      {/* <div className="flex justify-center items-center gap-2.5 pt-14">
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
      </div> */}
    </div>
  );
};
