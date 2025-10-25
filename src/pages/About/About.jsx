import aboutBg from "@/assets/images/aboutPageBg.png";
import officeTeamMeeting from "@/assets/images/office-team-meeting.png";
import { AboutOurPartners } from "@/components/AboutOurPartners";
import { useGetAboutUsQuery } from "@/Redux/Api/authApi";
import { Link } from "react-router-dom";

export default function About() {
  // ✅ Fetch "About Us" data from the API
  const { data: aboutUsData, isLoading, isError } = useGetAboutUsQuery();
  // ✅ Extract the first result from the API response
  const aboutInfo = aboutUsData?.data?.results?.[0];

  // Function to get plain text from HTML and truncate it
  const getTruncatedText = (htmlContent, wordLimit) => {
    if (!htmlContent) return "";
    // Create a temporary div to parse HTML and get text content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const words = text.trim().split(/\s+/); // Split by any whitespace
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ");
    }
    return text;
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
            <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start">
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
                {isLoading && (
                  <p className="text-center text-gray-400">Loading...</p>
                )}
                {isError && (
                  <p className="text-center text-red-500">
                    Failed to load content.
                  </p>
                )}
                {aboutInfo ? (
                  <div>
                    <p className="text-white text-base font-unbounded leading-loose">
                      {getTruncatedText(aboutInfo.description, 150)}
                      <Link
                        to="/about-us-details"
                        className="text-[#FF80EB] hover:underline ml-1"
                      >
                        ... see more
                      </Link>
                    </p>
                  </div>
                ) : (
                  !isLoading && (
                    <p className="text-center text-gray-500">
                      No "About Us" information found.
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Mission and Vision */}
        <div className="p-36">
          <div className="relative flex items-center justify-center px-24 py-10 bg-[#1A0E1E]/70 shadow-[0px_0px_30px_0px_rgba(255,128,234,0.50)] overflow-hidden">
            {/* Main Container */}
            <div className="text-center max-w-6xl py-28 px-80 flex flex-col gap-12 justify-center items-center">
              <Link to="/our-mission">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className=" bg-[#FF80EB] active:bg-[#C12E83] w-[475px] h-[70px] flex items-center justify-center"
                >
                  <div className="justify-start text-[#231D2A] text-3xl font-medium font-unbounded leading-loose">
                    Our Mission and Vision
                  </div>
                </div>
              </Link>

              <Link to="/about-us-details">
                <button
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  className="border-2 border-[#FF80EB] text-white w-[475px] h-[70px] hover:bg-[#EE87E5] hover:border-none active:bg-[#C12E83] active:border-none transition-colors text-3xl font-medium font-unbounded leading-loose flex items-center justify-center"
                >
                  About us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: Core Values */}
        <AboutOurPartners />
      </div>
    </div>
  );
}
