import React from "react";
import bgImg from "@/assets/images/bgImg.png";
import { useGetPrivacyPolicyQuery } from "@/Redux/Api/authApi";
import { TextView } from "@/components/TextView";

const PrivacyPolicy = () => {
  const { data, isLoading, isError } = useGetPrivacyPolicyQuery();

  const privacyContent = data?.content;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-2xl">
        Loading Privacy Policy...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-400 text-xl">
        Failed to load Privacy Policy
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen text-white px-6 text-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[#FF39B0] text-5xl font-semibold font-unbounded pt-20 pb-28">
        Privacy Policy
      </h1>

      <div className="text-white text-xl font-normal font-unbounded leading-loose tracking-wide px-24 text-start">
        {privacyContent ? (
          <TextView htmlContent={privacyContent} />
        ) : (
          <p>No privacy policy found.</p>
        )}
      </div>

      <div className="pt-16">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-center text-white text-lg font-normal font-unbounded px-8 py-2.5 bg-[#C12E83]"
        >
          Back To Homepage
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
