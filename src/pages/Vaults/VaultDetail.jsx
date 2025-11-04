import { useEffect, useState } from "react";
import vaultsBg from "@/assets/images/aboutPageBg.png";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import like from "@/assets/icons/like.svg";
import { useParams } from "react-router-dom";
import {
  useGetBlogContentByIdQuery,
  useLikeBlogMutation,
  useGetRelatedBlogsQuery,
  useGetPopularTagsQuery,
  useRecordBlogViewMutation,
} from "@/Redux/Api/authApi";
import { toast } from "react-toastify";
import ShareButton from "@/components/ShareButton";

export function VaultDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBlogContentByIdQuery(id);
  const [hasLiked, setHasLiked] = useState(false);

  const [likeArticle, { isLoading: isLiking }] = useLikeBlogMutation();

  const handleLike = async () => {
    try {
      const res = await likeArticle({ blog: id, like: true }).unwrap();

      if (res.success) {
        setHasLiked(true);
        toast.success("Blog liked!");
      } else {
        toast.error("Action failed. Please try again.");
      }
    } catch (error) {
      console.error("Like error:", error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  const { data: relatedData, isLoading: isRelatedLoading } =
    useGetRelatedBlogsQuery(id);
  const { data: relatedPostsData, isLoading: isRelatedPostsLoading } =
    useGetRelatedBlogsQuery(id);
  const { data: tagsData, isLoading: isTagsLoading } = useGetPopularTagsQuery();

  const article = data || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [recordBlogView] = useRecordBlogViewMutation();

  const handleGotoDetails = async (id) => {
    try {
      const res = await recordBlogView({ blog_id: id }).unwrap();
      navigate(`/vault-detail/${id}`);
    } catch (error) {
      console.error("Error recording view:", error);
      toast.error("Failed to record view.");
      navigate(`/vault-detail/${id}`); // Navigate anyway
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollRestoration />
      {/* === Loading / Error State === */}
      {isLoading && <p className="text-white text-center py-20">Loading...</p>}

      {isError && (
        <p className="text-red-500 text-center py-20">
          Failed to load article details.
        </p>
      )}

      {!isLoading && !isError && (
        <>
          {/* === Header Section (Full Width Image) === */}
          <div className="w-full h-[508px] relative">
            <img
              src={article?.primary_image}
              alt={article?.title || "Vaults Header"}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <h1 className="text-[#FF39B0] max-w-5xl text-center text-7xl font-normal font-unbounded leading-[72px]">
                {article?.title}
              </h1>
            </div>
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
            <div className="w-full">
              {/* Full detail section */}
              <div className="w-full h-full">
                <div className="bg-[#1A0E1E]/70 shadow-[0px_0px_30px_0px_rgba(255,128,234,0.50)] pt-12 pb-3 px-24 w-full">
                  {/* Header */}
                  <div className=" text-[#F4F4F3] text-3xl font-medium font-unbounded leading-10">
                    {article?.title}
                  </div>

                  {/* Tags Section */}
                  <div className="flex gap-2 items-center pt-3 pb-6">
                    {article?.tags_name?.map((tag, i) => (
                      <div
                        key={i}
                        className="px-3.5 outline outline-2 outline-offset-[-2px] outline-[#FF80EB]"
                      >
                        <div className="py-1.5 flex items-center justify-center text-center text-white text-xs font-medium font-poppins leading-none">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Like and Share Buttons */}
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-28 h-12 px-3.5 flex items-center transition-all duration-200 ${
                        article.is_liked
                          ? "bg-[#c6c6c6]"
                          : "outline outline-2 outline-offset-[-2px] outline-[#FF80EB] hover:bg-[#FF80EB] active:bg-[#C12E83] active:outline-none"
                      }`}
                    >
                      <button
                        onClick={article.is_liked ? undefined : handleLike}
                        disabled={isLiking || article.is_liked}
                        className={`flex w-full items-center justify-center gap-1 text-base font-normal font-unbounded ${
                          article.is_liked
                            ? "text-[#7d7d7d]"
                            : "text-[#C8C8C8] hover:text-white"
                        }`}
                      >
                        <img
                          src={like}
                          alt="like"
                          className={`w-5 h-5 ${
                            article.is_liked ? "brightness-50" : ""
                          }`}
                        />
                        {isLiking
                          ? "Processing..."
                          : article.is_liked || hasLiked
                          ? "Liked"
                          : "Like"}
                      </button>
                    </div>

                    <ShareButton />
                  </div>

                  <div className="w-full flex items-start justify-center gap-20">
                    {/* Left part: Main Details */}
                    <div className="w-2/3">
                      {/* Description */}
                      <div className="text-white text-lg font-normal font-unbounded leading-loose py-11">
                        {article?.description}
                      </div>

                      {/* First part */}
                      <div className="text-[#F4F4F3] text-3xl font-normal font-unbounded leading-9 pb-6">
                        Introduction
                      </div>
                      <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed">
                        {article?.blog_1st_part}
                      </div>

                      {/* Quote */}
                      <div className="bg-[#2C1B2C] border border-[#FF80EB] py-9 flex items-center justify-center my-12">
                        <div className="text-[#F4F4F3] text-2xl font-normal font-poppins italic text-center">
                          “{article?.special_quote}”
                        </div>
                      </div>

                      {/* Image */}
                      {article?.blog_image && (
                        <img
                          src={article?.blog_image}
                          alt="Article visual"
                          className="w-full h-64 pb-9"
                        />
                      )}

                      {/* Second part */}
                      <div className="text-[#F4F4F3] text-3xl font-normal font-unbounded leading-9 pb-6">
                        In Depth
                      </div>
                      <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed pb-11">
                        {article?.blog_2nd_part}
                      </div>
                    </div>

                    {/* Right part: Related posts and Popular tags section */}
                    <div className="w-1/3 flex flex-col items-center justify-center gap-8 py-11">
                      <div className="w-96 h-80 bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                        <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                          Related Posts
                        </div>

                        {isRelatedPostsLoading ? (
                          <p className="text-gray-400 text-sm px-4">
                            Loading related posts...
                          </p>
                        ) : relatedPostsData?.data?.results?.length ? (
                          <div className="flex flex-col justify-center items-start gap-4">
                            {relatedPostsData.data.results.slice(0, 3).map((post) => (
                              <div
                                key={post.id}
                                className="flex flex-col gap-1.5 px-16"
                              >
                                <div className="text-[#F4F4F3] text-sm font-normal font-unbounded leading-tight">
                                  {post.title}
                                </div>
                                <div
                                  onClick={() => handleGotoDetails(post.id)}
                                  className="text-[#9CA3AF] text-xs font-normal font-unbounded leading-none cursor-pointer hover:underline"
                                >
                                  Read More →
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-sm px-4">
                            No related posts found.
                          </p>
                        )}
                      </div>

                      <div className="w-96 h-40 bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                        <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                          Popular Tags
                        </div>

                        {isTagsLoading ? (
                          <p className="text-gray-400 text-sm">
                            Loading tags...
                          </p>
                        ) : tagsData?.data?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {tagsData.data.slice(0, 6).map((topic) => (
                              <div
                                key={topic.id}
                                className="px-3 py-1 outline outline-1 outline-offset-[-1px] outline-[#F4F4F3] flex items-center justify-center cursor-pointer hover:bg-white/10 transition"
                              >
                                <div className="text-[#C6C6C6] text-xs font-normal font-unbounded">
                                  {topic.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-sm">
                            No tags found.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Details */}
                <div className="bg-[#1A0E1E]/70 shadow-[0px_0px_30px_0px_rgba(255,128,234,0.50)] py-9 px-24 mt-10">
                  <div className="text-[#F4F4F3] text-lg font-bold font-['Unbounded'] leading-7 pb-3">
                    About the Author
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={article?.author_image}
                      className="w-16 h-16 relative rounded-full shadow-[0px_0px_12px_0px_rgba(255,57,176,1.00)]"
                      alt=""
                    />
                    <div className="flex flex-col justify-center gap-1">
                      <div className="text-[#F4F4F3] text-sm font-medium font-['Unbounded'] leading-normal">
                        {article?.author_name}
                      </div>
                      <div className="text-[#C6C6C6] text-sm font-normal font-['Unbounded'] leading-normal">
                        {article?.author_bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Blogs */}
              <div className="pb-12 px-4 max-w-[1370px]">
                <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-4 pt-7">
                  Related Blogs
                </h2>

                {isRelatedLoading ? (
                  <p className="text-center text-gray-400">
                    Loading related blogs...
                  </p>
                ) : relatedData?.data?.results?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {relatedData.data.results.map((vault) => (
                      <div
                        key={vault.id}
                        className="border border-[#2C1B2C] flex flex-col h-[421px]"
                      >
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            src={vault.primary_image}
                            alt={vault.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>

                        <div className="bg-[#2C1B2C] px-4 py-8 flex flex-col flex-grow justify-between h-[221px]">
                          <div>
                            <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                              {vault.title}
                            </h3>
                            <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-5">
                              {vault.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              {vault.tags_name?.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                                >
                                  {tag}
                                </span>
                              ))}
                              {vault.tags_name?.length > 3 && (
                                <button
                                  onClick={() => handleGotoDetails(vault.id)}
                                  className="text-white text-[10.20px] font-medium font-poppins underline"
                                >
                                  ...more
                                </button>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => handleGotoDetails(vault.id)}
                            className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-400">
                    No related blogs found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
