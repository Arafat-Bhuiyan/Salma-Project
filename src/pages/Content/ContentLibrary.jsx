import contentHeader from "@/assets/images/content-header.png";
import contentBg from "@/assets/images/content-bg.png";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import featuredImg2 from "@/assets/images/featuredImg2.jpg";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import videoIcon from "@/assets/icons/video.svg";
import photosIcon from "@/assets/icons/photos.svg";
import pdfIcon from "@/assets/icons/pdf.svg";
import textIcon from "@/assets/icons/text.svg";
import rightIcon from "@/assets/icons/right.svg";
import leftIcon from "@/assets/icons/left.svg";
import noContentImg from "@/assets/images/no-content.png";
import { useState } from "react";

export default function ContentLibrary() {
  const [email, setEmail] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filterMode, setFilterMode] = useState("tag"); // "tag" | "content"
  const [selectedContentType, setSelectedContentType] = useState("all");
  const navigate = useNavigate();

  const handleGotoDetails = (id) => {
    navigate(`/content-details/${id}`);
  };

  const tags = [
    "Cyberpunk",
    "AI",
    "Future",
    "Design",
    "Development",
    "Digital",
    "Experience",
    "Generation",
    "Handbook",
    "Design Technology",
    "Programming",
    "Security",
    "Media",
    "Interactive",
    "Innovation",
  ];

  const latestVaults = [
    {
      id: 1,
      type: "pdf",
      image: featuredImg3,
      title: "Digital Preservation Tools",
      subtitle: "TECHNOLOGY IN CULTURAL HERITAGE",
      description:
        "How technology is helping preserve artistic and historical materials.",
      tags: ["Technology", "Science"],
      fileUrl: "https://example.com/digital-preservation-tools.pdf",
      relatedContent: [
        {
          id: 101,
          title: "Preserving the Past Digitally",
          image: featuredImg1,
          tags: ["History", "Digital"],
        },
      ],
    },
    {
      id: 2,
      type: "photo",
      image: featuredImg4,
      title: "Art in the Archives",
      subtitle: "CREATIVITY MEETS HISTORY",
      description:
        "Exploring how artists reinterpret archival materials for modern times.",
      tags: ["Art", "History"],
      fileUrl: "https://example.com/art-in-the-archives.pdf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      relatedContent: [
        {
          id: 102,
          title: "Reimagining the Archives",
          image: featuredImg3,
          tags: ["Art", "Culture"],
        },
      ],
    },
    {
      id: 3,
      type: "video",
      image: featuredImg2,
      title: "Design Vault: Timeless Creations",
      subtitle: "A SHOWCASE OF DECADES OF DESIGN",
      description:
        "A showcase of creative works and their impact through the decades.",
      tags: ["Design", "Philosophy"],
      fileUrl: "https://example.com/design-vault.pdf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      relatedContent: [
        {
          id: 103,
          title: "Design that Lasts",
          image: featuredImg4,
          tags: ["Design", "Inspiration"],
        },
      ],
    },
    {
      id: 4,
      type: "photo",
      image: featuredImg1,
      title: "The Future of Curation",
      subtitle: "NEW APPROACHES IN DIGITAL ORGANIZATION",
      description:
        "New approaches to organizing and sharing digital knowledge.",
      tags: ["Technology", "Philosophy"],
      fileUrl: "https://example.com/future-of-curation.pdf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      relatedContent: [
        {
          id: 104,
          title: "Smart Collections",
          image: featuredImg2,
          tags: ["AI", "Knowledge"],
        },
      ],
    },
    {
      id: 5,
      type: "video",
      image: featuredImg2,
      title: "Designing for the Human Mind",
      subtitle: "COGNITIVE DESIGN PRINCIPLES IN ACTION",
      description:
        "Exploring how cognitive science can shape modern digital experiences.",
      tags: ["Design", "Psychology"],
      fileUrl: "https://example.com/designing-for-the-human-mind.pdf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      relatedContent: [
        {
          id: 105,
          title: "Human-Centered Design",
          image: featuredImg3,
          tags: ["UX", "Behavior"],
        },
      ],
    },
    {
      id: 6,
      type: "pdf",
      image: featuredImg3,
      title: "AI and the Art of Creativity",
      subtitle: "WHERE MACHINE INTELLIGENCE MEETS IMAGINATION",
      description:
        "How artificial intelligence is transforming creative expression and collaboration.",
      tags: ["AI", "Development"],
      fileUrl: "https://example.com/ai-art-creativity.pdf",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      relatedContent: [
        {
          id: 106,
          title: "The Future of AI Art",
          image: featuredImg4,
          tags: ["AI", "Creativity"],
        },
      ],
    },
  ];

  // === TAG FILTER LOGIC ===
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleClearAll = () => setSelectedTags([]);
  const handleRemoveTag = (tag) =>
    setSelectedTags(selectedTags.filter((t) => t !== tag));

  const filteredVaults =
    selectedTags.length === 0
      ? latestVaults
      : latestVaults.filter((vault) =>
          vault.tags.some((t) => selectedTags.includes(t))
        );

  // === CONTENT TYPE FILTER LOGIC ===
  const contentFilteredVaults =
    selectedContentType === "all"
      ? latestVaults
      : latestVaults.filter(
          (vault) => vault.type === selectedContentType
        );

  const noContentFound = contentFilteredVaults.length === 0;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email before subscribing!");
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollRestoration />
      {/* === Header Section === */}
      <div className="w-full">
        <img
          src={contentHeader.src || contentHeader}
          alt="Vaults Header"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="relative z-10">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${contentBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top bottom",
          }}
        ></div>

        <div className="px-4 md:px-8 lg:px-16">
          {/* === Mode Switch === */}
          <div className="flex justify-center gap-5 pt-10">
            <button
              onClick={() => setFilterMode("tag")}
              className={`px-6 py-2 font-unbounded text-sm ${
                filterMode === "tag"
                  ? "bg-[#C12E83] text-white"
                  : "bg-[#C6C6C6] text-[#727272]"
              }`}
            >
              Filter by Tags
            </button>
            <button
              onClick={() => setFilterMode("content")}
              className={`px-6 py-2 font-unbounded text-sm ${
                filterMode === "content"
                  ? "bg-[#C12E83] text-white"
                  : "bg-[#C6C6C6] text-[#727272]"
              }`}
            >
              Filter by Content Type
            </button>
          </div>

          {/* === CONTENT TYPE FILTER MODE === */}
          {filterMode === "content" && (
            <div className="py-16 flex flex-col items-center justify-center">
              <h1 className="text-[#F4F4F3] text-6xl font-normal font-unbounded leading-[60px]">
                Explore Content Library
              </h1>
              <p className="text-[#C6C6C6] text-xl font-normal font-unbounded leading-7 pt-2 pb-12">
                Discover videos, PDFs, photos, and more in our futuristic
                digital collection
              </p>

              {/* Category Buttons */}
              <div className="w-full flex items-center justify-center gap-5">
                {[
                  { label: "All Content", type: "all" },
                  { label: "Video", type: "video", icon: videoIcon },
                  { label: "PDFs", type: "pdf", icon: pdfIcon },
                  { label: "Photos", type: "photo", icon: photosIcon },
                  { label: "Text", type: "text", icon: textIcon },
                ].map((item) => {
                  const isActive = selectedContentType === item.type;
                  return (
                    <div
                      key={item.type}
                      onClick={() => setSelectedContentType(item.type)}
                      className={`cursor-pointer ${
                        item.type === "all" ? "w-32" : "w-28"
                      } h-12 flex items-center justify-center gap-2 text-base font-medium font-unbounded transition-all duration-200 ${
                        isActive
                          ? "bg-[#C12E83] text-[#F4F4F3]"
                          : "bg-[#C6C6C6] text-[#727272]"
                      }`}
                    >
                      {item.icon && (
                        <img src={item.icon} alt="" className="w-5 h-5" />
                      )}
                      {item.label}
                    </div>
                  );
                })}
              </div>

              {/* Cards */}
              {!noContentFound ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
                  {contentFilteredVaults.map((vault) => (
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
                          onClick={() => handleGotoDetails(vault.id)}
                          className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-32">
                  <img
                    src={noContentImg}
                    alt="No content found"
                    className="w-32 h-auto"
                  />
                  <h2 className="text-[#FF80EB] text-5xl font-normal leading-[60px] font-unbounded mb-2">
                    No content found
                  </h2>
                  <p className="text-white text-2xl font-normal font-unbounded mb-6">
                    Try adjusting your filters to discover more content
                  </p>
                  <button
                    onClick={() => setSelectedContentType("all")}
                    className="px-6 py-2 bg-[#C12E83] text-white text-sm font-normal font-unbounded"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* === TAG FILTER MODE === */}
          {filterMode === "tag" && (
            <>
              {/* Search & Filter Section */}
              <div className="pt-20 flex flex-col items-center justify-center">
                <h1 className="text-[#F4F4F3] text-6xl font-normal font-unbounded leading-[60px]">
                  Explore Content Library
                </h1>
                <p className="text-[#C6C6C6] text-xl font-normal font-unbounded leading-7 pt-2 pb-12">
                  Discover videos, PDFs, photos, and more in our futuristic
                  digital collection
                </p>

                {/* Filters */}
                <div className="bg-[#1A0E1E]/70 px-16 pb-10 pt-6 mt-14 flex flex-col justify-center items-start gap-4 max-w-7xl w-full">
                  <div className="flex items-center justify-start gap-3 w-full">
                    <div className="text-[#F4F4F3] text-lg font-normal font-unbounded">
                      Filters
                    </div>

                    {selectedTags.length > 0 && (
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handleClearAll}
                          className="bg-[#C12E83] text-white px-3 py-1 text-sm font-unbounded flex items-center gap-2"
                        >
                          ✕ Clear All
                        </button>
                        <span className="text-[#F6FF1F] text-sm font-unbounded outline outline-1 outline-offset-[-1px] outline-[#F6FF1F] px-[11px] py-1">
                          {selectedTags.length} filter
                          {selectedTags.length > 1 ? "s" : ""} active
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag, index) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <div
                          key={index}
                          onClick={() => handleTagClick(tag)}
                          className={`cursor-pointer px-3.5 py-1.5 outline outline-1 outline-[#E5E7EB] ${
                            isSelected
                              ? "bg-yellow-300 text-black"
                              : "bg-transparent text-[#C6C6C6]"
                          } text-xs font-unbounded`}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Tags */}
                  {selectedTags.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {selectedTags.map((tag) => (
                        <div
                          key={tag}
                          className="bg-[#C12E83] text-white px-3 py-1 text-xs font-unbounded flex items-center gap-2"
                        >
                          {tag}
                          <button onClick={() => handleRemoveTag(tag)}>
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Vault Cards */}
              <div className="flex items-start justify-center gap-6 pt-32">
                <div className="pb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVaults.map((vault) => (
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
                            onClick={() => handleGotoDetails(vault.id)}
                            className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Week's Highlights */}
                {selectedTags.length === 0 && (
                  <div className="w-64 h-80 relative bg-[#2C1B2C]/70 outline outline-1 outline-[#FF80EB]">
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-[#F4F4F3] text-lg font-normal font-unbounded py-8">
                        Week's highlights
                      </h1>
                      <img className="w-28 h-16 relative" src={featuredImg1} />
                      <div className="text-[#F4F4F3] text-xs font-medium font-unbounded leading-7 pt-3">
                        Digital Art Revolution
                      </div>
                      <div
                        onClick={() => handleGotoDetails(1)}
                        className="px-5 py-1 outline outline-1 outline-[#FF80EB] inline-flex justify-center items-center gap-2.5 mt-2 cursor-pointer"
                      >
                        <div className="text-center text-white text-sm font-normal font-unbounded">
                          View
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-28 right-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full">
                      <img src={rightIcon} alt="" className="w-[5px] h-2.5" />
                    </div>
                    <div className="absolute top-28 left-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full">
                      <img src={leftIcon} alt="" className="w-[5px] h-2.5" />
                    </div>
                    <div className="left-[105px] top-[250px] absolute inline-flex justify-center items-center gap-2.5">
                      <div className="w-3.5 h-3.5 bg-[#FF80EB] rounded-full" />
                      <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full" />
                      <div className="w-[5px] h-[5px] bg-[#D9D9D9] rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {/* Load More & Subscribe */}
              {selectedTags.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                  <div className="px-8 py-3.5 text-center outline outline-2 outline-[#EB4DAC] text-white text-sm font-unbounded mb-64 mt-8 cursor-pointer">
                    Load More Content
                  </div>

                  {/* Subscribe section */}
                  <div className="text-[#F4F4F3] text-4xl font-normal font-unbounded leading-10">
                    Want More? Sign Up for Updates
                  </div>
                  <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-normal py-5">
                    Get notified about new content and exclusive releases
                  </div>

                  <div className="flex items-center justify-center pt-5 pb-44 gap-5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-72 h-12 bg-[#282828] outline outline-1 outline-[#FF39B0] text-[#ADAEBC] text-sm placeholder:text-base font-unbounded px-3 focus:outline-[#FF80EB] placeholder-[#ADAEBC] focus:text-white"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="px-10 py-3 bg-[#F6FF1F] text-black text-base font-medium font-unbounded transition"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
