import bgImg from "../../assets/images/detailsbg.png";
import bgImg2 from "../../assets/images/bgImg2.png";
import featuredImg from "../../assets/images/featuredImg1.jpg";
import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
// Simulated data - this would come from your backend/API
const mockContent = {
  type: "pdf", // or "video"
  title: "Cybersecurity Handbook",
  subtitle: "INDUSTRY SOLUTIONWEARS NETWORKS SECURITY",
  description:
    "Comprehensive handbook covering essential cybersecurity practices for the digital age.",
  fileUrl: "https://example.com/cybersecurity-handbook.pdf",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  relatedContent: [
    {
      id: 1,
      title: "Digital Art Revolution",
      image: "featuredImg.jpg",
    },
  ],
};

export default function ContentDetails() {
  const [content] = useState(mockContent);

  // Toggle between PDF and VIDEO for demo
  const [contentType, setContentType] = useState(content.type);

  const handleDownload = () => {
    // Implement download logic
    console.log("Downloading...");
  };

  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top bottom",

      }}
    >
      {/* Hero Section with Background */}
      <div className="relative min-h-screen bg-cover bg-center">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="text-pink-400 text-sm">← BACK TO HOME</div>
            <div className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded text-sm font-semibold transition">
                Get Started
              </button>
              <button
                onClick={() =>
                  setContentType(contentType === "pdf" ? "video" : "pdf")
                }
                className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded text-sm font-semibold transition"
              >
                Toggle Type (Demo)
              </button>
            </div>
          </div>

          {/* Title Section */}
          <div className="max-w-4xl mb-8">
            <div className="inline-block bg-pink-500 px-4 py-1 rounded text-xs font-semibold mb-4">
              {contentType.toUpperCase()}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-gray-400 text-sm tracking-wider mb-6">
              {content.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mb-12">
            <img
              src={featuredImg}
              alt="Featured"
              className="w-full h-64 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with Different Background */}
      <div className="relative py-20 bg-cover bg-center">
        <div className="container mx-auto px-4">
          {/* Conditional Content Display */}
          <div className="max-w-4xl mx-auto">
            {contentType === "pdf" ? (
              /* PDF Content */
              <div className="bg-gray-800 rounded-lg p-12 text-center shadow-2xl border border-gray-700">
                <div className="mb-6">
                  <FileText
                    className="w-24 h-24 mx-auto text-pink-400"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  This content is available as a downloadable PDF document.
                </h2>
                <p className="text-gray-400 mb-8">
                  Download the complete handbook to access all the information
                  offline.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleDownload}
                    className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition">
                    Preview Browser
                  </button>
                </div>
              </div>
            ) : (
              /* Video Content */
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
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
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      Watch on
                    </span>
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Content Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">Related Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.relatedContent.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer border border-gray-700"
                >
                  <img
                    src={featuredImg}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      A comprehensive guide to transforming creative industries.
                    </p>
                    <button className="text-pink-400 hover:text-pink-300 text-sm font-semibold">
                      Read →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore More */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Explore More</h3>
            <div className="flex gap-4 justify-center">
              <button className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition">
                More Topics
              </button>
              <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-lg font-semibold transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
