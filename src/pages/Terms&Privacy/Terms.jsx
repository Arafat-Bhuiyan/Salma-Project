import React, { useEffect, useState } from "react";
import bgImg from "@/assets/images/bgImg.png";

const TermsAndConditions = () => {
  const [termsData, setTermsData] = useState("");

  useEffect(() => {
    // Example API call — replace with your real backend endpoint later
    const fetchTermsData = async () => {
      try {
        const res = await fetch("https://your-backend-api.com/terms");
        const data = await res.json();
        setTermsData(data?.content || ""); // backend e content field thakbe
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchTermsData();
  }, []);

  return (
    <div
      className="relative min-h-screen text-white px-6 text-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="">
        <h1 className="text-[#FF39B0] text-5xl font-semibold font-unbounded pt-20 pb-28">
          Terms of Service
        </h1>

        <div className="text-white text-xl font-normal font-unbounded leading-loose tracking-wide px-24 text-start">
          {termsData ? (
            <p
              dangerouslySetInnerHTML={{
                __html: termsData,
              }}
            ></p>
          ) : (
            <>
              <p>
                <strong>Clause 1</strong> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
              </p>
              <br />
              <p>
                <strong>Clause 2</strong> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
              </p>
              <br />
              <p>
                <strong>Clause 3</strong> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                condimentum eget purus in. Consectetur eget id morbi amet amet,
                in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
                aenean leo pharetra in sit semper et. Amet quam placerat sem.
              </p>
            </>
          )}
        </div>

        {/* Back Button */}
        <div className="py-16">
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

export default TermsAndConditions;
