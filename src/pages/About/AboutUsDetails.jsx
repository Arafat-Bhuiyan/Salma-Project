import aboutBg from "@/assets/images/aboutPageBg.png";
import { ScrollRestoration } from "react-router-dom";
import { useGetAboutUsQuery } from "@/Redux/Api/authApi";
import { TextView } from "@/components/TextView";

export default function AboutUsDetails() {
  // ✅ Fetch "About Us" data from the API
  const { data: aboutUsData, isLoading, isError } = useGetAboutUsQuery();

  // ✅ Extract the first result from the API response
  const aboutInfo = aboutUsData?.data?.results?.[0];
  return (
    <div className="relative w-full min-h-screen">
      <ScrollRestoration />
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
            <div className="relative max-w-7xl w-full flex flex-col gap-12 items-center justify-center">
              {/* Heading Side */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="space-y-8"
              >
                {/* Title and Subtitle */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-unbounded font-normal text-center text-[#C6C6C6] mb-4 leading-tight">
                    About Us
                  </h1>
                  <p className="text-2xl text-white font-normal font-unbounded text-center leading-tight">
                    How we started and what our goals are.
                  </p>
                </div>
              </div>

              {/* Middle Side */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="space-y-6"
              >
                <h2 className="text-[#FF80EB] text-xl md:text-2xl font-unbounded font-medium leading-loose text-center">
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
                  <TextView htmlContent={aboutInfo.description} />
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
      </div>
    </div>
  );
}
