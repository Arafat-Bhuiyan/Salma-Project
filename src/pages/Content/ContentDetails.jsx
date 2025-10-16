import bgImg from "../../assets/images/detailsbg.png";
import pdf from "../../assets/icons/pdf-icon.png";
import featuredImg from "../../assets/images/featuredImg1.jpg";
import React, { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineOpenInNew } from "react-icons/md";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import featuredImg2 from "@/assets/images/featuredImg2.jpg";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";
import { FileText, Download, ArrowLeft } from "lucide-react";
// Simulated data - this would come from your backend/API
import { BiLike } from "react-icons/bi";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
// const mockContent = {
//   type: "pdf", // or "video"
//   title: "Cybersecurity Handbook",
//   subtitle: "INDUSTRY SOLUTIONWEARS NETWORKS SECURITY",
//   tags: ["Security", "Cybersecurity", "Handbook", "Safety"],
//   description:
//     "Comprehensive handbook covering essential cybersecurity practices for the digital age.",
//   fileUrl: "https://example.com/cybersecurity-handbook.pdf",
//   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//   relatedContent: [
//     {
//       id: 1,
//       title: "Digital Art Revolution",
//       image: "featuredImg.jpg",
//       tags: ["Art", "Digital"],
//     },
//   ],
// };
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
    description: "New approaches to organizing and sharing digital knowledge.",
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

export default function ContentDetails() {
  const { id } = useParams();
  console.log(id);
  const mockContent =
    latestVaults.find((vault) => vault.id === parseInt(id)) || latestVaults[0];
  const [content] = useState(mockContent);

  // Toggle between PDF and VIDEO for demo
  const [contentType, setContentType] = useState(content.type);

  const handleDownload = () => {
    // Implement download logic
    console.log("Downloading...");
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white font-unbounded"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top bottom",
      }}
    >
      <ScrollRestoration />
      {/* Hero Section with Background */}
      <div className="relative bg-cover bg-center">
        <div className="w-10/12 mx-auto py-8 lg:pt-20">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center justify-between mb-12">
                <div className="text-[#FF3B9A] text-sm flex items-center gap-2 cursor-pointer">
                  <ArrowLeft /> Back to Blog
                </div>
              </div>

              {/* Title Section */}
              <div className="max-w-4xl mb-8">
                <div className="inline-block mr-4 bg-[#C12E83] px-4 py-1 mb-4 text-[#C6C6C6]">
                  All content
                </div>
                <div className="inline-block border border-[#C12E83] px-4 py-1 mb-4 text-[#C6C6C6]">
                  {contentType.toUpperCase()}
                </div>
                <h1 className="text-5xl text-[#F4F4F3] mb-4">
                  {content.title}
                </h1>
                <div>
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-[#C6C6C6] pr-3 py-1 rounded-full mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="gap-4 flex">
                  <div className="items-center gap-2 text-sm text-[#C8C8C8] mt-4 cursor-pointer border inline-flex p-2 px-4 border-[#FF80EB]">
                    <BiLike className="text-xl" /> Like
                  </div>
                  <div className="items-center gap-2 text-sm text-white mt-4 cursor-pointer inline-flex p-2 px-4 bg-[#FF80EB]">
                    <LuShare2 className="text-xl" /> Share
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={content.image} alt="" />
            </div>
          </div>
          {contentType === "photo" && (
            <div className="text-3xl mt-20">
              <div className="w-9/12 mx-auto mb-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {content.description}
                </p>
              </div>
              {/* Featured Image */}

              <div className="w-9/12 mx-auto">
                <img
                  src={content.image}
                  alt="Featured"
                  className="w-full object-cover shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section with Different Background */}
      <div className="relative pb-20 bg-cover bg-center">
        <div className=" mx-auto w-11/12 xl:w-9/12">
          {/* Conditional Content Display */}

          {/* Description */}
          {contentType !== "photo" && (
            <div className="">
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                {content.description}
              </p>
            </div>
          )}
          <div className="mx-auto">
            {contentType === "pdf" ? (
              /* PDF Content */
              <div className="bg-[#1F1F1F] p-12 text-center shadow-2xl">
                <div className="mb-20">
                  <img src={pdf} className="mx-auto" alt="" />
                </div>
                <h2 className="text-2xl mb-10">
                  This content is available as a downloadable PDF document.
                </h2>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="bg-[#FF3B9A] hover:bg-pink-600 px-8 py-3 rounded-md transition flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-md transition flex items-center gap-2">
                    <MdOutlineOpenInNew className="text-xl" /> Open in Browser
                  </button>
                </div>
              </div>
            ) : contentType === "video" ? (
              /* Video Content */
              <div className="bg-gray-800 overflow-hidden shadow-2xl border border-gray-700">
                <div className="aspect-video bg-black relative">
                  <iframe
                    className="w-full h-full"
                    src={content.videoUrl}
                    title="Video Content"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Custom Play Button Overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Red YouTube-style play button would go here if needed */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden"></div>
            )}
          </div>

          {/* Related Content Section */}
          <div className="mt-24">
            <h2 className="text-3xl mb-8">Related Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.relatedContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#2C1B2C] overflow-hidden cursor-pointer"
                >
                  <img
                    src={featuredImg}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                    <p className="text-[#C6C6C6] text-sm mb-4">
                      A comprehensive guide to transforming creative industries.
                    </p>
                    <div>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-[#C6C6C6] text-xs pr-3 py-1 rounded-full mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="border-2 border-[#FF80EB] px-12 py-1 mt-4 transition">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore More */}
          <div className="my-16 text-center">
            <h3 className="text-3xl mb-6">Explore More</h3>
            <div className="flex gap-4 justify-center">
              <Link to={'/vaults'}>
                <button className="border-2 border-[#FF80EB] px-8 py-3 transition">
                  More Blogs
                </button>
              </Link>
              <Link to={'/content'}>
                <button className="text-white cursor-pointer inline-flex px-8 py-3 bg-[#FF80EB]">
                  More Content
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
