import React, { useEffect, useState } from "react";
import bgImg from "@/assets/images/bgImg.png";

const PrivacyPolicy = () => {
  const [privacyData, setPrivacyData] = useState("");

  useEffect(() => {
    // Example API call — replace with your real backend endpoint later
    const fetchPrivacyData = async () => {
      try {
        const res = await fetch("https://your-backend-api.com/privacy-policy");
        const data = await res.json();
        setPrivacyData(data?.content || ""); // backend e content field thakbe
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      }
    };

    fetchPrivacyData();
  }, []);

  return (
    <div
      className="relative min-h-screen text-white px-6 text-center"
      style={{
        backgroundImage: `url(${bgImg})`, // replace with your bg image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="">
        <h1 className="text-[#FF39B0] text-5xl font-semibold font-unbounded pt-20 pb-28">
          Privacy Policy
        </h1>

        <div className="text-white text-xl font-normal font-unbounded leading-loose tracking-wide px-24 text-start">
          {privacyData ? (
            <p
              dangerouslySetInnerHTML={{
                __html: privacyData,
              }}
            ></p>
          ) : (
            <>
              <p>
                Your privacy is important to us. It is Brainstorming's policy to
                respect your privacy regarding any information we may collect
                from you across our website, and other sites we own and operate.
              </p>{" "}
              <br />
              <p>
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we're collecting it and how it will be used.
              </p>{" "}
              <br />
              <p>
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we'll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use, or modification.
              </p>
            </>
          )}
        </div>

        {/* Back Button */}
        <div className="pt-16">
          <button
            onClick={() => (window.location.href = "/")}
            className="text-center text-white text-lg font-normal font-unbounded px-8 py-2.5 bg-[#C12E83]"
          >
            Back To Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
