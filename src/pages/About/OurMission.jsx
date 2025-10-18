import { useEffect, useState } from "react";
import aboutBg from "@/assets/images/aboutPageBg.png";
import { ScrollRestoration } from "react-router-dom";

export default function OurMission() {
  // 🔹 State for admin data
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    // 🔹 Fake API call simulation (replace with your actual API later)
    const fetchAdminData = async () => {
      try {
        // const response = await fetch("https://your-api.com/admin-mission");
        // const data = await response.json();
        // setAdminData(data);

        console.log("Waiting for API data...");
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, []);

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
                <h2 className="text-[#FF80EB] text-xl md:text-2xl font-unbounded font-medium leading-loose text-center">
                  Our Mission
                </h2>
                <div className="max-w-5xl space-y-4 text-white text-base font-unbounded leading-loose text-center">
                  <p>
                    At ContentFlow, our mission is to empower individuals and
                    organizations to share their stories effortlessly through
                    technology and creativity. We aim to simplify digital
                    content creation, making it accessible for everyone —
                    regardless of technical skill.
                  </p>
                  <p>
                    We believe that every creative mind deserves a platform
                    where innovation meets expression. Our tools and resources
                    are designed to make that vision a reality.
                  </p>
                </div>

                <h2 className="text-[#FF80EB] text-xl md:text-2xl font-unbounded font-medium leading-loose text-center pt-10">
                  Our Vision
                </h2>
                <div className="max-w-5xl space-y-4 text-white text-base font-unbounded leading-loose text-center">
                  <p>
                    Our vision is to become a global hub for creators — where
                    ideas transform into impactful digital experiences. We want
                    to build a future where technology enhances creativity, not
                    replaces it.
                  </p>
                  <p>
                    By continuously innovating and understanding the needs of
                    creators, we strive to inspire the next generation of
                    storytellers and changemakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: From Admin Details */}
      <div className="pb-10">
        <div className="relative flex items-center justify-center px-24 py-[52px] bg-[#1A0E1E]/70 overflow-hidden">
          <div
            className="relative max-w-7xl w-full flex flex-col gap-12 items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {/* 🔹 যদি API data থাকে */}
            {adminData ? (
              <>
                <h2 className="text-[#FF80EB] text-2xl font-unbounded font-medium leading-loose text-center">
                  {adminData.title}
                </h2>
                <p className="max-w-5xl text-white text-base font-unbounded leading-loose text-center">
                  {adminData.description}
                </p>
              </>
            ) : (
              /* 🔹 Static fallback content (API না থাকলে দেখাবে) */
              <>
                <h2 className="text-[#FF80EB] text-2xl font-unbounded font-medium leading-loose text-center">
                  Message from the Founder
                </h2>
                <div className="max-w-5xl text-white text-base font-unbounded leading-loose text-center space-y-4">
                  <p>
                    “Our mission and vision are built on one belief — creativity
                    should be limitless. We are here to make sure every idea
                    finds its voice and every creator gets the right tools to
                    shine.”
                  </p>
                  <p>— Founder & CEO, ContentFlow</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
