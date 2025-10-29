import bgImg from "@/assets/images/content-bg2.png";
import dots from "@/assets/images/dots.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-no-repeat bg-fixed overflow-hidden
      "
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[759px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h1
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-unbounded leading-[48px] sm:leading-[60px] md:leading-[70px] [text-shadow:_0px_2px_10px_rgb(0_0_0_/_0.25)] mb-6 sm:mb-8"
          >
            <span className="text-[#FF39B0]">Discover Amazing</span>
            <br />
            <span className="text-[#F4F4F3]">Blogs & Content</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1400"
            className="max-w-full sm:max-w-xl md:max-w-3xl text-[#F4F4F4] text-base sm:text-lg md:text-2xl font-medium font-unbounded leading-normal sm:leading-relaxed md:leading-loose [text-shadow:_0px_2px_10px_rgb(0_0_0_/_0.25)] mb-8 sm:mb-11"
          >
            Dive into a world of cutting-edge ideas, revolutionary thoughts, and
            mind-bending content that pushes the boundaries of digital
            creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/vaults"
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-full sm:w-60 h-12 sm:h-14 px-6 sm:px-8 py-2 sm:py-3 bg-[#FF39B0] hover:bg-[#EE87E5] active:bg-[#C12E83] text-white text-base sm:text-lg font-medium font-unbounded"
            >
              Read Blogs
            </Link>
            <Link
              to="/content"
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-full sm:w-60 h-12 sm:h-14 px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#FF39B0] hover:bg-[#EE87E5] hover:border-none active:bg-[#C12E83] active:border-none text-white text-base sm:text-lg font-medium font-unbounded"
            >
              View Content
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[350px] md:h-[498px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <div className="relative inline-block">
            {/* Background tilted area */}
            <div
              className="absolute inset-0 top-[-48px] left-[-25px] w-[582.35px] h-28 rotate-[-0.29deg] bg-fixed bg-repeat hidden sm:block"
              style={{ backgroundImage: `url(${dots})` }}
            ></div>

            {/* Text */}
            <h2 className="relative text-[#F4F4F3] text-2xl sm:text-3xl md:text-4xl font-semibold font-unbounded leading-8 sm:leading-9 md:leading-10 mb-4 sm:mb-5">
              Be part of the commons
            </h2>
          </div>
          <p className="text-[#D1D5DB] text-sm sm:text-base font-normal font-unbounded leading-relaxed sm:leading-normal mb-6 sm:mb-7 max-w-full sm:max-w-md">
            Start today to express your creativity and become a part of our
            community.
          </p>
          <Link
            to="/contact"
            className="w-full sm:w-80 h-12 sm:h-14 px-6 sm:px-8 py-2 sm:py-3 bg-[#F6FF1F] text-black text-base sm:text-lg font-medium font-unbounded"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
