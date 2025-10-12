import { useState } from "react";
import aboutBg from "@/assets/images/aboutPageBg.png";
import officeTeamMeeting from "@/assets/images/office-team-meeting.png";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const coreValues = [
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
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreValues.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + coreValues.length) % coreValues.length
    );
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Single Background for entire page */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />

      {/* All Content */}
      <div className="relative z-10 w-full py-28">
        {/* Section 1: Our Story */}
        <div className="">
          <div className="relative flex items-center justify-center px-24 py-10 bg-[#1A0E1E]/70 overflow-hidden">
            {/* Main Container */}
            <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div className="space-y-8">
                {/* Title and Subtitle */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-unbounded font-normal text-[#C6C6C6] mb-4 leading-tight">
                    About Us
                  </h1>
                  <p className="text-2xl text-white font-normal font-unbounded leading-tight">
                    How we started and what our goals are.
                  </p>
                </div>

                {/* Team Image */}
                <div className="relative w-[90%] max-w-[541px]">
                  <div className="bg-gray-900 rounded-lg shadow-[0_0_20px_0_rgba(255,59,154,1)] outline outline-1 outline-gray-800 overflow-hidden">
                    <img
                      src={officeTeamMeeting}
                      alt="Team meeting"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-6">
                <h2 className="text-[#FF80EB] text-xl md:text-2xl font-unbounded font-medium leading-loose">
                  Our Story
                </h2>
                <div className="space-y-4 text-white text-base font-unbounded leading-loose">
                  <p>
                    In 2022, we, two young entrepreneurs, started this journey
                    with a common goal: to make content creation in the digital
                    world easier and more effective. Our aim was to create a
                    platform that not only uses technology but also leverages
                    the power of creativity to help users turn their ideas into
                    reality. ContentFlow is not just a website; it is a
                    community where creative people can come together and work.
                  </p>
                  <p>
                    We believe that every story should be told and every idea
                    should be expressed correctly. ContentFlow is the platform
                    that gives you the opportunity to express your thoughts in
                    your own language, in your own way. Our journey has just
                    begun, and we are continuously working on new features and
                    tools to help your creativity flourish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission and Vision */}
        <div className="p-36">
          <div className="relative flex items-center justify-center px-24 py-10 bg-[#1A0E1E]/70 shadow-[0px_0px_30px_0px_rgba(255,128,234,0.50)] overflow-hidden">
            {/* Main Container */}
            <div className="text-center max-w-6xl py-28 px-80 flex flex-col gap-12 justify-center items-center">
              <div className=" bg-[#FF80EB] w-[475px] h-[70px] flex items-center justify-center">
                <div className="justify-start text-[#231D2A] text-3xl font-medium font-unbounded leading-loose">
                  Our Mission and Vision
                </div>
              </div>

              <button className="border-2 border-[#FF80EB] text-white w-[475px] h-[70px] hover:bg-[#EE87E5] hover:border-none active:bg-[#C12E83] active:border-none transition-colors text-3xl font-medium font-unbounded leading-loose flex items-center justify-center">
                About us
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Core Values */}
        <div className="">
            <div className="w-[1440px] h-[535px] relative bg-[#1A0E1E]/70 shadow-[0px_-2px_132.39999389648438px_1px_rgba(18,18,18,1.00)] overflow-hidden">
          <div className="w-72 h-64 left-[-77px] top-[-72px] absolute bg-gradient-to-l from-zinc-300/10 to-neutral-400/10 rounded-full blur-[9.80px]" />
          <div className="w-52 h-48 left-[-45px] top-[-47px] absolute bg-gradient-to-l from-zinc-300/20 to-neutral-600/20 rounded-full blur-md" />
          <div className="w-14 h-5 left-0 top-[516.26px] absolute origin-top-left rotate-[-29.47deg] bg-pink-500/40" />
          <div className="w-96 h-60 left-[100px] top-[174px] absolute bg-zinc-800 shadow-[0px_0px_20px_0px_rgba(255,57,176,1.00)] overflow-hidden">
            <div className="left-[107px] top-[35px] absolute justify-start text-white text-3xl font-medium font-['Unbounded'] leading-loose">
              Innovation
            </div>
            <div className="w-96 left-[19px] top-[100px] absolute text-center justify-start text-white text-base font-normal font-['Unbounded'] leading-normal">
              We constantly seek new and better ways to help creators, embracing
              technology and fresh ideas to stay ahead.
            </div>
          </div>
          <div className="w-96 h-60 left-[521px] top-[174px] absolute bg-zinc-800 shadow-[0px_0px_20px_0px_rgba(255,57,176,1.00)] overflow-hidden">
            <div className="left-[54px] top-[35px] absolute justify-start text-white text-3xl font-medium font-['Unbounded'] leading-loose">
              Empowerment
            </div>
            <div className="w-96 left-[20px] top-[100px] absolute text-center justify-start text-white text-base font-normal font-['Unbounded'] leading-normal">
              We empower our users by providing them with the tools and
              community support they need to succeed.
            </div>
          </div>
          <div className="w-96 h-60 left-[943px] top-[174px] absolute bg-zinc-800 shadow-[0px_0px_20px_0px_rgba(255,57,176,1.00)] overflow-hidden">
            <div className="left-[83px] top-[33px] absolute justify-start text-white text-3xl font-medium font-['Unbounded'] leading-loose">
              Community
            </div>
            <div className="w-96 left-[19px] top-[100px] absolute text-center justify-start text-white text-base font-normal font-['Unbounded'] leading-normal">
              We foster a collaborative and supportive environment where every
              voice is heard and every contribution is valued.
            </div>
          </div>
          <div className="left-[486px] top-[73px] absolute justify-start text-stone-300 text-5xl font-medium font-['Unbounded'] leading-loose">
            Our Core Values
          </div>
          <div className="left-[679px] top-[488px] absolute inline-flex justify-center items-center gap-2.5">
            <div className="w-6 h-6 bg-fuchsia-400 rounded-full" />
            <div className="w-5 h-5 bg-zinc-300 rounded-full" />
            <div className="w-3.5 h-3.5 bg-zinc-300 rounded-full" />
          </div>
          <div className="w-12 h-12 px-4 py-3 left-[1377px] top-[243px] absolute bg-zinc-300/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] inline-flex justify-center items-center gap-2.5">
            <div className="w-4 h-6 bg-fuchsia-400" />
          </div>
          <div className="w-12 h-12 px-4 py-3 left-[63px] top-[293px] absolute origin-top-left rotate-180 bg-zinc-300/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] inline-flex justify-center items-center gap-2.5">
            <div className="w-4 h-6 bg-fuchsia-400" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
