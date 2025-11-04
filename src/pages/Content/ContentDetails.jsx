import bgImg from "../../assets/images/detailsbg.png";
import pdf from "../../assets/icons/pdf-icon.png";
import React, { useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { Download, ArrowLeft } from "lucide-react";
import like from "@/assets/icons/like.svg";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import {
  useGetContentByIdQuery,
  useLikeContentMutation,
  useGetRelatedContentsQuery,
} from "@/Redux/Api/authApi";
import { toast } from "react-toastify";
import ShareButton from "@/components/ShareButton";

export default function ContentDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetContentByIdQuery(id);
  const content = data || {};
  const [hasLiked, setHasLiked] = useState(false);
  const [likeContent, { isLoading: isLiking }] = useLikeContentMutation(); // 🆕 RTK Mutation
  const { data: relatedData, isLoading: relatedLoading } =
    useGetRelatedContentsQuery(id);

  const handleLike = async () => {
    try {
      const response = await likeContent({
        content: id,
        like: true, // Always like, no unliking
      }).unwrap();

      if (response.success) {
        toast.success("You liked this content!");
        setHasLiked(true);
      } else {
        toast.error("Action failed. Please try again.");
      }
    } catch (error) {
      console.error("Like error:", error);
      toast.error("Something went wrong!");
    }
  };

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

  const handleDownload = async (content) => {
    const pdfUrl = content?.upload_files?.[0]?.url;
    if (!pdfUrl) {
      alert("PDF link not found!");
      return;
    }

    try {
      const response = await fetch(pdfUrl, {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("File not found or server error");
      }

      const blob = await response.blob(); // get file data as blob
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = content.title?.replace(/\s+/g, "_") + ".pdf" || "file.pdf"; // filename
      document.body.appendChild(a);
      a.click(); // force download
      a.remove();

      // Cleanup
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the file.");
    }
  };

  const handleOpenInBrowser = (content) => {
    const pdfUrl = content?.upload_files?.[0]?.url;
    if (!pdfUrl) {
      alert("PDF link not found!");
      return;
    }

    // Open the same Google Drive link in a new tab
    window.open(pdfUrl, "_blank");
  };

  // Helper to convert YouTube/Vimeo/etc. link to embed format
  const getEmbedUrl = (url) => {
    if (!url) return "";
    // YouTube watch URL
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // YouTube short URL
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Vimeo URL
    if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1].split("?")[0].split("/")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    // If already embed or other platform, return as is
    return url;
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
      <div className="relative bg-cover bg-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto py-8 lg:pt-20">
          {/* Header */}
          <div className="flex flex-col justify-center pt-24 sm:pt-32">
            <div className="">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <Link
                  to={"/content"}
                  className="text-[#FF3B9A] text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft /> Back to Database
                </Link>
              </div>

              {/* Title Section */}
              <div className="max-w-4xl mb-8">
                <div className="inline-block mr-4 bg-[#C12E83] px-4 py-1 mb-4 text-[#C6C6C6]">
                  All content
                </div>
                <div className="inline-block border border-[#C12E83] px-4 py-1 mb-4 text-[#C6C6C6]">
                  {content.content_type.toUpperCase()}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#F4F4F3] mb-4">
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
                {/* Like and Share Buttons */}
                <div className="flex flex-wrap gap-2 items-center mt-4">
                  <div
                    className={`w-28 h-12 px-3.5 flex items-center transition-all duration-200 ${
                      content.is_liked
                        ? "bg-[#c6c6c6]"
                        : "outline outline-2 outline-offset-[-2px] outline-[#FF80EB] hover:bg-[#FF80EB] active:bg-[#C12E83] active:outline-none"
                    }`}
                  >
                    <button
                      onClick={content.is_liked ? undefined : handleLike}
                      disabled={isLiking || content.is_liked}
                      className={`flex w-full items-center justify-center gap-1 text-base font-normal font-unbounded ${
                        content.is_liked
                          ? "text-[#7d7d7d]"
                          : "text-[#C8C8C8] hover:text-white"
                      }`}
                    >
                      <img
                        src={like}
                        alt="like"
                        className={`w-5 h-5 ${
                          content.is_liked ? "brightness-50" : ""
                        }`}
                      />
                      {isLiking
                        ? "Processing..."
                        : content.is_liked || hasLiked
                        ? "Liked"
                        : "Like"}
                    </button>
                  </div>

                  <ShareButton />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={content.thumbnail_image}
              alt={content.title || "Image"}
              className="w-full max-w-5xl h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center mt-8 md:mt-10">
            <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-4xl">
              {content.content}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with Different Background */}
      <div className="relative pb-20 bg-cover bg-center px-4 sm:px-6 md:px-8">
        <div className=" mx-auto w-full max-w-7xl">
          {/* Conditional Content Display */}
          <div className="mx-auto">
            {content.content_type?.toLowerCase() === "pdf" ? (
              /* PDF Content */
              <div className="bg-[#1F1F1F] p-6 md:p-12 text-center shadow-2xl rounded-lg">
                <div className="mb-10 md:mb-20">
                  <img src={pdf} className="mx-auto" alt="" />
                </div>
                <h2 className="text-xl md:text-2xl mb-8 md:mb-10 text-white">
                  This content is available as a downloadable PDF document.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <div className="bg-gray-800 overflow-hidden shadow-2xl border border-gray-700">
                <div className="aspect-video bg-black relative">
                  <iframe
                    src={getEmbedUrl(content.vedio_url)}
                    title="Video Preview"
                    className="w-full h-full rounded-lg border border-zinc-700"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            ) : content.content_type?.toLowerCase() === "image" ? (
              /* Image Content */
              <div>
                <img
                  src={content.upload_files?.[0]?.url}
                  alt={content.title || "Uploaded Image"}
                  className="max-w-full h-auto mx-auto rounded-lg object-contain shadow-lg"
                />
              </div>
            ) : (
              <div className="overflow-hidden"></div>
            )}
          </div>

          {/* Related Content Section */}
          <div className="mt-24">
            <h2 className="text-3xl mb-8">Related Content</h2>

            {relatedLoading ? (
              <p className="text-gray-400">Loading related contents...</p>
            ) : relatedData?.data?.results?.length > 0 ? ( // Changed grid to be more responsive
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedData.data.results.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#2C1B2C] rounded-lg overflow-hidden cursor-pointer border border-[#2C1B2C] hover:scale-[1.02] transition-transform"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold mb-2 text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#C6C6C6] text-sm mb-4">
                        {item.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {item.tags_name.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-white/10 text-white text-[10.20px] font-medium leading-none rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags_name.length > 4 && (
                          <Link
                            to={`/content-details/${item.id}`}
                            className="text-white text-[10.20px] font-medium font-poppins underline cursor-pointer"
                          >
                            ...more
                          </Link>
                        )}
                      </div>

                      <Link to={`/content-details/${item.id}`}>
                        <button className="border-2 border-[#FF80EB] hover:bg-[#FF80EB] hover:border-none active:border-none active:bg-[#C12E83] px-12 py-1 mt-4 transition text-white">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No related contents found.</p>
            )}
          </div>

          {/* Explore More */}
          <div className="my-16 text-center">
            <h3 className="text-3xl mb-6">Explore More</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/vaults"}>
                <button className="w-full sm:w-auto border-2 border-[#FF80EB] px-8 py-3 transition">
                  More Blogs
                </button>
              </Link>
              <Link to={"/content"}>
                <button className="w-full sm:w-auto text-white cursor-pointer inline-flex justify-center px-8 py-3 bg-[#FF80EB]">
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
