import contentHeader from "@/assets/images/content-header.png";
import contentBg from "@/assets/images/content-bg.png";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import featuredImg2 from "@/assets/images/featuredImg2.jpg";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";
import { useNavigate } from "react-router-dom";
import videoIcon from "@/assets/icons/video.svg";
import photosIcon from "@/assets/icons/photos.svg";
import pdfIcon from "@/assets/icons/pdf.svg";
import textIcon from "@/assets/icons/text.svg";
import rightIcon from "@/assets/icons/right.svg";
import leftIcon from "@/assets/icons/left.svg";

export default function ContentLibrary() {
  const navigate = useNavigate();

  const handleGotoDetails = () => {
    navigate("/vault-detail");
  };

  const tags = [
    "Cyberpunk",
    "AI",
    "Future",
    "Design",
    "Development",
    "Digital",
    "Experience",
    "Future",
    "Generation",
    "Handbook",
    "Design Technology",
    "Design",
    "Programming",
    "Security",
    "Cyberpunk",
    "Cyberpunk",
    "Media",
    "Interactive",
    "Innovation",
  ];

  const latestVaults = [
    {
      id: 1,
      image: featuredImg3,
      title: "Digital Preservation Tools",
      description:
        "How technology is helping preserve artistic and historical materials.",
      tags: ["Technology", "Science"],
    },
    {
      id: 2,
      image: featuredImg4,
      title: "Art in the Archives",
      description:
        "Exploring how artists reinterpret archival materials for modern times.",
      tags: ["Art", "History"],
    },
    {
      id: 3,
      image: featuredImg2,
      title: "Design Vault: Timeless Creations",
      description:
        "A showcase of creative works and their impact through the decades.",
      tags: ["Design", "Philosophy"],
    },
    {
      id: 4,
      image: featuredImg1,
      title: "The Future of Curation",
      description:
        "New approaches to organizing and sharing digital knowledge.",
      tags: ["Technology", "Philosophy"],
    },
    {
      id: 5,
      image: featuredImg2,
      title: "Designing for the Human Mind",
      description:
        "Exploring how cognitive science can shape modern digital experiences.",
      tags: ["Design", "Psychology"],
    },
    {
      id: 6,
      image: featuredImg3,
      title: "AI and the Art of Creativity",
      description:
        "How artificial intelligence is transforming creative expression and collaboration.",
      tags: ["AI", "Creativity"],
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* === Header Section (Full Width Image) === */}
      <div className="w-full">
        <img
          src={contentHeader.src || contentHeader}
          alt="Vaults Header"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* === Layered Backgrounds for Content === */}
      <div className="relative z-10">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              url(${contentBg})
            `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top bottom",
          }}
        ></div>

        {/* === Page Content === */}
        <div className="px-4 md:px-8 lg:px-16">
          {/* Search & Filter Section */}
          <div className="pt-20 flex flex-col items-center justify-center">
            <h1 className="text-[#F4F4F3] text-6xl font-normal font-unbounded leading-[60px]">
              Explore Content Library
            </h1>
            <p className="text-[#C6C6C6] text-xl font-normal font-unbounded leading-7 pt-2 pb-12">
              Discover videos, PDFs, photos, and more in our futuristic digital
              collection
            </p>

            <div className="w-full flex items-center justify-center gap-5">
              <div className="w-32 h-12 px-2 flex items-center justify-center bg-[#C12E83] text-[#F4F4F3] text-base font-medium font-unbounded">
                All Content
              </div>

              <div className="w-28 h-12 flex items-center justify-center gap-2 bg-[#C6C6C6] text-[#727272] text-base font-medium font-unbounded">
                <img src={videoIcon} alt="" className="w-5 h-5" />
                Video
              </div>

              <div className="w-28 h-12 flex items-center justify-center gap-2 bg-[#C6C6C6] text-[#727272] text-base font-medium font-unbounded">
                <img src={pdfIcon} alt="" className="w-5 h-5" />
                PDFs
              </div>

              <div className="w-32 h-12 flex items-center justify-center gap-2 bg-[#C6C6C6] text-[#727272] text-base font-medium font-unbounded">
                <img src={photosIcon} alt="" className="w-5 h-5" />
                Photos
              </div>

              <div className="w-28 h-12 flex items-center justify-center gap-2 bg-[#C6C6C6] text-[#727272] text-base font-medium font-unbounded">
                <img src={textIcon} alt="" className="w-5 h-5" />
                Text
              </div>
            </div>

            <div className="bg-[#1A0E1E]/70 px-16 pb-10 pt-6 mt-14 flex flex-col justify-center items-start gap-4 max-w-7xl">
              <div className="text-[#F4F4F3] text-lg font-normal font-unbounded">
                Filters
              </div>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="bg-black/0 outline outline-1 outline-offset-[-1px] outline-[#E5E7EB] px-3.5 py-1.5"
                  >
                    <div className="text-[#C6C6C6] text-xs font-normal font-unbounded">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center gap-6 pt-32">
            {/* Latest Vaults */}
            <div className="pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestVaults.map((vault) => (
                  <div
                    key={vault.id}
                    className="w-80 border border-[#2C1B2C] flex flex-col h-[420px]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={vault.image}
                        alt={vault.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="bg-[#2C1B2C] p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                          {vault.title}
                        </h3>
                        <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-4">
                          {vault.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {vault.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={handleGotoDetails}
                        className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Weeks Highlights */}
            <div className="w-64 h-80 relative bg-[#2C1B2C]/70 outline outline-1 outline-offset-[-1px] outline-[#FF80EB]">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#F4F4F3] text-lg font-normal font-unbounded py-8">
                  Week's highlights
                </h1>

                <img className="w-28 h-16 relative" src={featuredImg1} />
                <div className="text-[#F4F4F3] text-xs font-medium font-unbounded leading-7 pt-3">
                  Digital Art Revolution
                </div>

                <div className="px-5 py-1 outline outline-1 outline-offset-[-1px] outline-[#FF80EB] inline-flex justify-center items-center gap-2.5 mt-2">
                  <div className="text-center text-white text-sm font-normal font-unbounded">
                    View
                  </div>
                </div>
              </div>
              {/* Right Arrow */}
              <div className="absolute top-28 right-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full">
                <img src={rightIcon} alt="" className="w-[5px] h-2.5" />
              </div>
              {/* Left Arrow */}
              <div className="absolute top-28 left-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-offset-[-1px] outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full">
                <img src={leftIcon} alt="" className="w-[5px] h-2.5" />
              </div>

              {/* Dots */}
              <div className="left-[105px] top-[250px] absolute inline-flex justify-center items-center gap-2.5">
                <div className="w-3.5 h-3.5 bg-[#FF80EB] rounded-full" />
                <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full" />
                <div className="w-[5px] h-[5px] bg-[#D9D9D9] rounded-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="px-8 py-3.5 text-center outline outline-2 outline-offset-[-1px] outline-[#EB4DAC] text-white text-sm font-unbounded mb-64 mt-8">
              Load More Content
            </div>
            <div className=" text-[#F4F4F3] text-4xl font-normal font-unbounded leading-10">
              Want More? Sign Up for Updates
            </div>
            <div className=" text-[#C6C6C6] text-base font-normal font-unbounded leading-normal py-5">
              Get notified about new content and exclusive releases
            </div>

            <div className="flex items-center justify-center pt-5 pb-44 gap-5">
              <div className="w-72 h-12 justify-center text-gray-400 text-base font-normal font-['Unbounded'] leading-normal">
                Enter your email
              </div>
              <div className="w-28 h-6 bg-yellow-300 border-gray-200 text-center justify-start text-black text-base font-medium font-['Unbounded']">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
