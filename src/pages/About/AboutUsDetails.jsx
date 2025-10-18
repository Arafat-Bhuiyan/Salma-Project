import aboutBg from "@/assets/images/aboutPageBg.png";
import officeTeamMeeting from "@/assets/images/office-team-meeting.png";
import { AboutCoreValues } from "@/components/AboutCoreValues";

export default function AboutUsDetails() {
  // 🟣 Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative w-full min-h-screen">
      {/* Single Background for entire page */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `
            url(${aboutBg})
          `,
        }}
      ></div>

      {/* All Content */}
      <div className="relative z-10 w-full py-28">
        {/* Section 1: Our Story */}
        <div className="">
          <div className="relative flex items-center justify-center px-24 py-[52px] bg-[#1A0E1E]/70 overflow-hidden">
            {/* Main Container */}
            <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                className="space-y-8"
              >
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
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="space-y-6"
              >
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
      </div>
    </div>
  );
}
