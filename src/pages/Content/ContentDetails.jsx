import bgImg from "../../assets/images/detailsbg.png";
import pdf from "../../assets/icons/pdf-icon.png";
import featuredImg from "../../assets/images/featuredImg1.jpg";
import React, { useState } from "react";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Download, ArrowLeft } from "lucide-react";
// Simulated data - this would come from your backend/API
import { BiLike } from "react-icons/bi";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { useGetContentByIdQuery } from "@/Redux/Api/authApi";

export default function ContentDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetContentByIdQuery(id);
  const content = data || {};

  console.log("ID:", id, "Full Data:", content);
  console.log("Image URL - 1 :", content.upload_files?.[0]?.url);
  console.log("Image URL - 2 :", content.upload_files?.[1]?.url);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Loading content details...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-400 text-xl">
        Failed to load content
      </div>
    );

  const handleDownload = (content) => {
    const pdfUrl = content?.metadata?.upload_pdf;
    if (!pdfUrl) {
      alert("PDF link not found!");
      return;
    }

    // Extract file ID from Google Drive link
    const match = pdfUrl.match(/\/d\/(.*?)\//);
    const fileId = match ? match[1] : null;

    if (!fileId) {
      alert("Invalid Google Drive link!");
      return;
    }

    // Direct download link
    const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = directLink;
    link.download = `${content.title || "document"}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInBrowser = (content) => {
    const pdfUrl = content?.metadata?.upload_pdf;
    if (!pdfUrl) {
      alert("PDF link not found!");
      return;
    }

    // Open the same Google Drive link in a new tab
    window.open(pdfUrl, "_blank");
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
                  {content.content_type.toUpperCase()}
                </div>
                <h1 className="text-5xl text-[#F4F4F3] mb-4">
                  {content.title}
                </h1>
                <div>
                  {content.tags_names.map((tag) => (
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
              <img
                src={content.upload_files?.[0]?.url}
                alt={content.title || "Image"}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              {content.content}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with Different Background */}
      <div className="relative pb-20 bg-cover bg-center">
        <div className=" mx-auto w-11/12 xl:w-9/12">
          {/* Conditional Content Display */}
          <div className="mx-auto">
            {content.content_type?.toLowerCase() === "pdf" ? (
              /* PDF Content */
              <div className="bg-[#1F1F1F] p-12 text-center shadow-2xl">
                <div className="mb-20">
                  <img src={pdf} className="mx-auto" alt="" />
                </div>
                <h2 className="text-2xl mb-10 text-white">
                  This content is available as a downloadable PDF document.
                </h2>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleDownload(content)}
                    className="bg-[#FF3B9A] hover:bg-pink-600 px-8 py-3 rounded-md transition flex items-center gap-2 text-white"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleOpenInBrowser(content)}
                    className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-md transition flex items-center gap-2 text-white"
                  >
                    <MdOutlineOpenInNew className="text-xl" /> Open in Browser
                  </button>
                </div>
              </div>
            ) : content.content_type?.toLowerCase() === "video" ? (
              /* Video Content */
              <div className="bg-gray-800 overflow-hidden shadow-2xl border border-gray-700">
                <div className="aspect-video bg-black relative">
                  <iframe
                    className="w-full h-full"
                    src={content.vedio_url}
                    title="Video Content"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : content.content_type?.toLowerCase() === "image" ? (
              /* Image Content */
              <div>
                <img
                  src={
                    content.upload_files?.[1]?.url 
                  }
                  alt={content.title || "Uploaded Image"}
                  className="max-w-full h-auto mx-auto rounded-lg object-contain shadow-lg"
                />
              </div>
            ) : (
              <div className="overflow-hidden"></div>
            )}
          </div>

          {/* Related Content Section */}
          {/* <div className="mt-24">
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
                      {item.tags_names.map((tag) => (
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
          </div> */}

          {/* Explore More */}
          <div className="my-16 text-center">
            <h3 className="text-3xl mb-6">Explore More</h3>
            <div className="flex gap-4 justify-center">
              <Link to={"/vaults"}>
                <button className="border-2 border-[#FF80EB] px-8 py-3 transition">
                  More Blogs
                </button>
              </Link>
              <Link to={"/content"}>
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
