import React, { useState } from "react";
import rightArrow from "@/assets/icons/right.svg";
import leftArrow from "@/assets/icons/left.svg";
import { useGetPartnersQuery } from "@/Redux/Api/authApi";

export const AboutOurPartners = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  // ✅ Fetch partners from API
  const { data, isLoading, isError } = useGetPartnersQuery();

  const handleNext = () => setOffset((prev) => prev - 200);
  const handlePrev = () => setOffset((prev) => prev + 200);

  // ✅ Extract partner data safely
  const partners = data?.data || [];

  return (
    <div
      className="w-full h-[480px] relative bg-[#1A0E1E]/70 shadow-[0px_-2px_132.4px_1px_rgba(18,18,18,1)] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Title */}
      <div className="text-[#C6C6C6] text-5xl font-medium font-unbounded leading-loose flex items-center justify-center py-14">
        Our Partners
      </div>

      {/* Loading / Error State */}
      {isLoading && (
        <p className="text-center text-gray-400">Loading partners...</p>
      )}
      {isError && (
        <p className="text-center text-red-500">
          Failed to load partners. Please try again later.
        </p>
      )}

      {/* Partners Carousel */}
      {!isLoading && partners.length > 0 && (
        <div className="overflow-hidden">
          <div
            className="flex w-max gap-8 items-center transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${offset}px)`,
              animation: `partner-slide 20s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-48 h-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Right Arrow */}
      <div
        onClick={handleNext}
        className="w-12 h-12 px-4 py-3 right-3 top-[215px] absolute flex justify-center items-center bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] cursor-pointer hover:bg-fuchsia-400/20 transition-all z-10"
      >
        <img src={rightArrow} alt="Next" className="w-4 h-6" />
      </div>

      {/* Left Arrow */}
      <div
        onClick={handlePrev}
        className="w-12 h-12 px-4 py-3 left-[16px] top-[216px] absolute origin-top-left bg-[#D9D9D9]/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] flex justify-center items-center cursor-pointer hover:bg-fuchsia-400/20 transition-all z-10"
      >
        <img src={leftArrow} alt="Prev" className="w-4 h-6" />
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes partner-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};
