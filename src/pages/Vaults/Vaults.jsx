import vaultsHeaderImg from "@/assets/images/vaults_header.png";
import vaultsBg from "@/assets/images/aboutPageBg.png";
import { Scroll, Search } from "lucide-react";
import { useState } from "react";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import featuredImg2 from "@/assets/images/featuredImg2.jpg";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";
import { ScrollRestoration, useNavigate } from "react-router-dom";

export default function Vaults() {
  const [topics, setTopics] = useState([
    { name: "All Vaults", active: true },
    { name: "Art", active: false },
    { name: "Design", active: false },
    { name: "History", active: false },
    { name: "Technology", active: false },
    { name: "Philosophy", active: false },
    { name: "Science", active: false },
    { name: "Literature", active: false },
    { name: "Music", active: false },
  ]);

  const navigate = useNavigate();

  const handleTopicClick = (selectedName) => {
    const updatedTopics = topics.map((topic) =>
      topic.name === selectedName
        ? { ...topic, active: true }
        : { ...topic, active: false }
    );
    setTopics(updatedTopics);
  };

  const handleGotoDetails = () => {
    navigate("/vault-detail");
  };

  const featuredVaults = [
    {
      id: 1,
      image: featuredImg1,
      title: "Exploring Hidden Archives",
      description:
        "Dive into rare collections and forgotten works curated by experts.",
      tags: ["History", "Art"],
    },
    {
      id: 2,
      image: featuredImg2,
      title: "Design Vault: Timeless Creations",
      description:
        "A showcase of creative works and their impact through the decades.",
      tags: ["Design", "Philosophy"],
    },
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
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollRestoration />
      {/* === Header Section (Full Width Image) === */}
      <div className="w-full">
        <img
          src={vaultsHeaderImg.src || vaultsHeaderImg}
          alt="Vaults Header"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* === Layered Backgrounds for Content === */}
      <div className="relative z-10">
        <div
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `
              url(${vaultsBg})
            `,
          }}
        ></div>

        {/* === Page Content === */}
        <div className="px-4 md:px-8 lg:px-16">
          {/* Search & Filter Section */}
          <div className="pt-10">
            <div className="">
              <div className="w-full bg-[#C6C6C6] flex justify-start items-center gap-2.5 px-10 py-3">
                <Search size={16} color="#727272" />
                <input
                  type="text"
                  placeholder="Search vaults..."
                  className="text-[#727272] placeholder:text-[#727272] text-base font-normal font-unbounded leading-normal w-full bg-[#C6C6C6] pl-1 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="pt-6 pb-4">
              <p className="text-white text-base font-medium font-unbounded leading-7 mb-2">
                Filter by topic:
              </p>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => handleTopicClick(topic.name)}
                    className={`px-4 py-2 rounded-md text-xs font-medium font-unbounded leading-none transition-colors duration-200 ${
                      topic.active
                        ? "bg-[#C0FF4C] text-black"
                        : "bg-[#C6C6C6] text-[#727272]"
                    }`}
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Vaults */}
          <div className="pt-1">
            <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-5">
              Featured Vaults
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              {featuredVaults.map((vault) => (
                <div
                  key={vault.id}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="200"
                  className="shadow-[0px_0px_20px_0px_rgba(193,46,131,1.00)]"
                >
                  <div className="relative h-64 overflow-hidden ">
                    <img
                      src={vault.image}
                      alt={vault.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="bg-[#2C1B2C] p-6">
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
                    <button
                      onClick={handleGotoDetails}
                      className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Vaults */}
          <div className="pb-12">
            <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-4 pt-7">
              Latest Vaults
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {latestVaults.map((vault) => (
                <div
                  key={vault.id}
                  className="border border-[#2C1B2C] flex flex-col h-[420px]"
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
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
