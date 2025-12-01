import bgImg from "../../assets/images/detailsbg.png";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
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

  console.log("Related Content:", relatedData);

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

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
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#F4F4F3] mb-4">
                  {content.title}
                </h1>
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
          {content.thumbnail_image && (
            <div className="flex justify-center">
              <img
                src={content.thumbnail_image}
                alt={content.title || "Image"}
                className="w-full max-w-5xl h-auto object-cover rounded-lg"
              />
            </div>
          )}
          {content.description && (
            <div className="flex justify-start mt-8 md:mt-10 w-full">
              <p className="text-gray-300 text-base text-wrap md:text-lg mb-8 md:mb-10 leading-relaxed max-w-4xl">
                {content.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content Section with Different Background */}
      <div className="relative pb-20 bg-cover bg-center px-4 sm:px-6 md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Content Display */}
          <div className="w-full mx-auto">
            <div className="flex justify-center">
              {content.media_embedded_url && (
                <a
                  href={content.media_embedded_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full sm:w-auto text-white cursor-pointer inline-flex justify-center px-8 py-3 bg-[#FF80EB]"
                >
                  View Document
                </a>
              )}
            </div>
          </div>

          {/* Related Content Section */}
          <div className="mt-24">
            <h2 className="text-3xl mb-8">Related Content</h2>

            {relatedLoading ? (
              <p className="text-gray-400">Loading related contents...</p>
            ) : relatedData?.length > 0 ? ( // Changed grid to be more responsive
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedData.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#2C1B2C] rounded-lg overflow-hidden cursor-pointer border border-[#2C1B2C] hover:scale-[1.02] transition-transform"
                  >
                    <div className="p-6">
                      <h3 className="font-semibold mb-2 text-lg text-white line-clamp-1">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-[#C6C6C6] text-sm font-normal leading-tight font-unbounded mb-4">
                          Description:{" "}
                          {truncateText(item.description, 10)}
                        </p>
                      )}
                      <p className="text-[#C6C6C6] text-sm font-normal leading-tight font-unbounded mb-4">
                        Author: {item.author}
                      </p>
                      <p className="text-white text-sm font-normal leading-tight font-unbounded mb-4">
                        Type of content: {item.type_of_content_title}
                      </p>

                      <Link to={`/database/contents/${item.id}`}>
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
