import { useEffect, useState } from "react";
import vaultsBg from "@/assets/images/aboutPageBg.png";
import { useNavigate } from "react-router-dom";
import like from "@/assets/icons/like.svg";
import { useParams } from "react-router-dom";
import {
  useGetArticleContentByIdQuery,
  useLikeArticleMutation,
  useGetPopularTagsQuery,
  useGetRelatedArticlesQuery,
  useRecordArticleViewMutation,
} from "@/Redux/Api/authApi";
import { toast } from "react-toastify";
import ShareButton from "@/components/ShareButton";

export function DispatchDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetArticleContentByIdQuery(id);
  const [recordArticleView] = useRecordArticleViewMutation();

  // 🧠 States
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // optional if you show count

  const [likeArticle, { isLoading: isLiking }] = useLikeArticleMutation();

  const handleLike = async () => {
    try {
      const newLikeState = !hasLiked; // toggle true/false
      const res = await likeArticle({
        article: id,
        like: newLikeState,
      }).unwrap();

      if (res.success) {
        setHasLiked(newLikeState);
        setLikeCount((prev) => prev + (newLikeState ? 1 : -1));

        // ✅ Custom toast message
        if (newLikeState) {
          toast.success("Article liked!");
        } else {
          toast.success("Article unliked!");
        }
      } else {
        toast.error("Failed to update like status.");
      }
    } catch (error) {
      console.error("Like error:", error);
      toast.error(
        error?.data?.message || "Please log in to like this article."
      );
    }
  };

  const handleReadMore = async (articleId) => {
    try {
      const res = await recordArticleView(articleId).unwrap();
      console.log("View recorded:", res);
      navigate(`/dispatch-detail/${articleId}`);
    } catch (error) {
      console.error("View record failed:", error);
      // Even if API fails, still navigate
      navigate(`/dispatch-detail/${articleId}`);
    }
  };

  const { data: tagsData, isLoading: isTagsLoading } = useGetPopularTagsQuery();
  const { data: relatedData, isLoading: isRelatedLoading } =
    useGetRelatedArticlesQuery(id);

  const article = data || {};

  const handleGotoDetails = () => {
    navigate("/dispatch-detail");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topics = [
    { id: 1, name: "AI" },
    { id: 2, name: "Web Dev" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Frontend" },
    { id: 5, name: "React" },
    { id: 6, name: "JavaScript" },
  ];

  console.log("Article Data: ", article);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
          <div className="w-full">
            <img
              src={article?.banner_image}
              alt="Vaults Header"
              className="w-full h-[508px] object-cover object-center"
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
                    <div className="w-28 h-12 px-3.5 flex items-center outline outline-2 outline-offset-[-2px] outline-[#FF80EB] hover:bg-[#FF80EB] active:bg-[#C12E83] active:outline-none">
                      <button
                        onClick={handleLike}
                        disabled={isLiking}
                        className={`flex items-center justify-start gap-1 text-base font-normal font-unbounded disabled:opacity-50 transition-colors ${
                          hasLiked
                            ? "text-[#C8C8C8] hover:text-white"
                            : "text-[#C8C8C8] hover:text-white"
                        }`}
                      >
                        <img
                          src={like}
                          alt=""
                          className={`hover:text-white ${
                            hasLiked ? "brightness-200" : ""
                          }`}
                        />
                        {isLiking ? "Liking..." : hasLiked ? "Unlike" : "Like"}
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
                        {article?.article_1st_part}
                      </div>

                      {/* Quote */}
                      <div className="bg-[#2C1B2C] border border-[#FF80EB] py-9 flex items-center justify-center my-12">
                        <div className="text-[#F4F4F3] text-2xl font-normal font-poppins italic text-center">
                          “{article?.special_quote}”
                        </div>
                      </div>

                      {/* Image */}
                      {article?.article_image && (
                        <img
                          src={article?.article_image}
                          alt="Article visual"
                          className="w-full h-64 pb-9"
                        />
                      )}

                      {/* Second part */}
                      <div className="text-[#F4F4F3] text-3xl font-normal font-unbounded leading-9 pb-6">
                        In Depth
                      </div>
                      <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed pb-11">
                        {article?.article_2nd_part}
                      </div>
                    </div>

                    {/* Right part: Related posts and Popular tags section */}
                    <div className="w-1/3 flex flex-col items-center justify-center gap-8 py-11">
                      <div className="max-w-sm bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                        <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                          Related Posts
                        </div>

                        {isRelatedLoading ? (
                          <p className="text-gray-400 text-sm">
                            Loading related posts...
                          </p>
                        ) : relatedData?.data?.results?.length ? (
                          <div className="flex flex-col justify-center items-start gap-4">
                            {relatedData.data.results.map((item) => (
                              <div
                                key={item.id}
                                className="flex flex-col gap-1.5 px-6 cursor-pointer"
                                onClick={() =>
                                  navigate(`/dispatch-detail/${item.id}`)
                                }
                              >
                                <div className="text-[#F4F4F3] text-sm font-normal font-unbounded leading-tight hover:underline">
                                  {item.title}
                                </div>
                                <div onClick={() => handleReadMore(article.id)} className="text-[#9CA3AF] text-xs font-normal font-unbounded leading-none">
                                  Read More →
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-sm">
                            No related posts found.
                          </p>
                        )}
                      </div>

                      <div className="max-w-sm bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                        <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                          Popular Tags
                        </div>

                        {isTagsLoading ? (
                          <p className="text-gray-400 text-sm">
                            Loading tags...
                          </p>
                        ) : tagsData?.data?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {tagsData.data.map((topic) => (
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
                      alt=""
                      className="w-16 h-16 relative rounded-full shadow-[0px_0px_12px_0px_rgba(255,57,176,1.00)]"
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

              {/* Related Articles */}
              <div className="pb-12 px-4">
                <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-4 pt-7">
                  Related Articles
                </h2>

                {isRelatedLoading ? (
                  <p className="text-center text-gray-400">
                    Loading related articles...
                  </p>
                ) : relatedData?.data?.results?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedData.data.results.map((article) => (
                      <div
                        key={article.id}
                        className="border border-[#2C1B2C] flex flex-col h-[420px]"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={
                              article.banner_image ||
                              "https://via.placeholder.com/400x300?text=No+Image"
                            }
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>

                        <div className="bg-[#2C1B2C] p-5 flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                              {article.title}
                            </h3>
                            <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-4">
                              {article.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {article.tags_name.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-white/10 text-white text-xs font-medium leading-none rounded-full font-poppins"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button
                            onClick={() => handleReadMore(article.id)}
                            className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-400">
                    No related articles found.
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
