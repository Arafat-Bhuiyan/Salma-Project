import aboutBg from "@/assets/images/aboutPageBg.png";
import { TextView } from "@/components/TextView";
import { useGetCoreValuesQuery } from "@/Redux/Api/authApi";
import { ScrollRestoration } from "react-router-dom";

export default function OurMission() {
  // ✅ API থেকে "Core Values" ডেটা আনার জন্য হুক ব্যবহার করা হয়েছে
  const {
    data: coreValuesData,
    isLoading,
    isError,
  } = useGetCoreValuesQuery();

  // ✅ API রেসপন্স থেকে প্রথম রেজাল্টটি নেওয়া হয়েছে
  const missionInfo = coreValuesData?.data?.results?.[0];
  return (
    <div className="relative w-full min-h-screen">
      <ScrollRestoration />
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>

      {/* All Content */}
      <div className="relative z-10 w-full py-28">
        {/* Section 1: Mission & Vision */}
        <div>
          <div className="relative flex items-center justify-center px-24 py-[52px] bg-[#1A0E1E]/70 overflow-hidden">
            <div className="relative max-w-7xl w-full flex flex-col gap-12 items-center justify-center">
              {/* Heading Side */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="space-y-8"
              >
                <div>
                  <h1 className="text-4xl md:text-5xl font-unbounded font-normal text-center text-[#C6C6C6] mb-4 leading-tight">
                    Our Mission and Vision
                  </h1>
                  <p className="text-2xl text-white font-normal font-unbounded text-center leading-tight">
                    What drives us and where we aim to go.
                  </p>
                </div>
              </div>

              {/* Mission & Vision Description */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="space-y-6"
              >
                {isLoading && (
                  <p className="text-center text-gray-400">Loading...</p>
                )}
                {isError && (
                  <p className="text-center text-red-500">
                    Failed to load content.
                  </p>
                )}
                {missionInfo ? (
                  <TextView htmlContent={missionInfo.description} />
                ) : (
                  !isLoading && (
                    <p className="text-center text-gray-500">
                      No information found.
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
