import bgImg1 from "@/assets/images/bgImg.png";
import bgImg4 from "@/assets/images/bgImg4.png";

export function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[759px] overflow-hidden flex items-center justify-center text-center">
        {/* Top Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[759px] z-0 bg-cover"
          style={{
            backgroundImage: `url(${bgImg1})`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h1 className="text-6xl font-bold font-unbounded leading-[70px] [text-shadow:_0px_2px_10px_rgb(0_0_0_/_0.25)] mb-8">
            <span className="text-[#FF39B0]">Discover Amazing</span>
            <br />
            <span className="text-[#F4F4F3]">Blogs & Content</span>
          </h1>

          <p className="max-w-3xl text-[#F4F4F4] text-2xl font-medium font-unbounded leading-loose [text-shadow:_0px_2px_10px_rgb(0_0_0_/_0.25)] mb-11">
            Dive into a world of cutting-edge ideas, revolutionary thoughts, and
            mind-bending content that pushes the boundaries of digital
            creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-60 h-14 px-8 py-3 bg-[#FF39B0] hover:bg-[#EE87E5] active:bg-[#C12E83] text-white text-lg font-medium font-unbounded">
              Read Blogs
            </button>
            <button className="w-60 h-14 px-8 py-3 bg-transparent border-2 border-[#FF39B0] hover:bg-[#EE87E5] hover:border-none active:bg-[#C12E83] active:border-none text-white text-lg font-medium font-unbounded">
              View Content
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[498px] overflow-hidden flex items-center justify-center text-center">
        {/* Bottom Background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[498px] z-0 bg-cover"
          style={{
            backgroundImage: `url(${bgImg4})`,
          }}
        />

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-4xl font-semibold font-unbounded leading-10 mb-5">
            Be part of the commons
          </h2>

          <p className="text-[#D1D5DB] text-base font-normal font-unbounded leading-normal mb-7 max-w-[536px]">
            Start today to express your creativity and become a part of our
            community.
          </p>

          <button className="w-80 h-14 px-8 py-3 bg-[#F6FF1F] text-black text-lg font-medium font-unbounded">
              Get Started
            </button>
        </div>
      </section>
    </div>
  );
}
