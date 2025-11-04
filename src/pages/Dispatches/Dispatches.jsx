import dispatchesBg from "@/assets/images/dispatches_bg.png";
import headerImg from "@/assets/images/dispatches-header-photo.png";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetArticleContentsQuery,
  useGetTagsQuery,
  useGetHighlightedArticlesQuery,
  useRecordArticleViewMutation,
} from "@/Redux/Api/authApi";

export default function Dispatches() {
  const { data, isLoading, isError } = useGetArticleContentsQuery();
  const articles = data?.data?.results || [];
  const {
    data: highlightedData,
    isLoading: highlightedLoading,
    isError: highlightedError,
  } = useGetHighlightedArticlesQuery();
  const [recordArticleView] = useRecordArticleViewMutation();

  const highlightedPosts = highlightedData?.data?.results || [];

  const {
    data: tagsData,
    isLoading: tagsLoading,
    isError: tagsError,
  } = useGetTagsQuery();

  const [activeTopicName, setActiveTopicName] = useState(null);
  const [visibleTagsCount, setVisibleTagsCount] = useState(15);
  const [visibleCount, setVisibleCount] = useState(6);

  const topics = useMemo(() => {
    if (tagsData?.data) {
      return tagsData.data.map((t) => ({
        ...t,
        active: t.name === activeTopicName,
      }));
    }
    return [];
  }, [tagsData, activeTopicName]);

  const handleTopicClick = (selectedName) => {
    setActiveTopicName(activeTopicName === selectedName ? null : selectedName);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    let newFilteredArticles = articles;

    // Filter by topic
    if (activeTopicName) {
      newFilteredArticles = newFilteredArticles.filter((article) =>
        article.tags_name?.includes(activeTopicName)
      );
    }

    // Filter by search query
    if (searchQuery) {
      newFilteredArticles = newFilteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return newFilteredArticles;
  }, [searchQuery, activeTopicName, articles]);

  const navigate = useNavigate();

  const handleGotoDetails = async (id) => {
    try {
      const res = await recordArticleView(id).unwrap();
      navigate(`/dispatch-detail/${id}`);
    } catch (error) {
      console.error("Error recording view:", error);
      if (error?.data) console.error("Server response:", error.data);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute top-0 left-0 w-full min-h-full z-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${dispatchesBg})`,
        }}
      />

      {/* All Content */}
      <div className="relative z-10">
        {/* Header Image */}
        <div className="flex justify-center px-4 sm:px-8 md:px-20 py-12 md:py-20">
          <img
            src={headerImg.src || headerImg}
            alt="The Radical Dispatches"
            className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto"
          />
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="w-full bg-white rounded-xl flex justify-start items-center gap-2.5 px-10 py-3">
              <Search size={16} color="#727272" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-[#727272] placeholder:text-[#727272] text-base font-normal font-unbounded leading-normal w-full bg-white pl-1 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-4">
            <p className="text-white text-base font-medium font-unbounded leading-7 mb-2">
              Filter by topic:
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.slice(0, visibleTagsCount).map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicClick(topic.name)}
                  className={`px-4 py-2 rounded-md text-xs font-medium font-unbounded leading-none transition-colors duration-200 ${
                    topic.active
                      ? "bg-[#C0FF4C] text-black"
                      : "bg-white text-[#727272]"
                  }`}
                >
                  {topic.name}
                </button>
              ))}
              {visibleTagsCount < topics.length && (
                <button
                  onClick={() => setVisibleTagsCount(visibleTagsCount + 15)}
                  className="px-4 py-2 rounded-md text-xs font-medium font-unbounded leading-none transition-colors duration-200 bg-white text-[#727272]"
                >
                  ... more
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Featured Posts Section (Dynamic from API) */}
        <div className="mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-white text-xl sm:text-2xl font-bold font-poppins leading-loose mb-6">
            Featured Dispatches
          </h2>

          {highlightedLoading ? (
            <p className="text-white">Loading featured posts...</p>
          ) : highlightedError ? (
            <p className="text-red-500">Failed to load featured posts.</p>
          ) : highlightedPosts.length === 0 ? (
            <p className="text-white">No featured posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              {highlightedPosts.map((item) => {
                const post = item.article;
                return (
                  <div
                    key={post.id}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    className="flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden shadow-[0px_0px_20px_0px_rgba(92,66,181,1.00)]">
                      <img
                        src={
                          post.banner_image ||
                          "https://via.placeholder.com/400x300?text=No+Image"
                        }
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="bg-[#5C42B5] p-4 sm:p-6 flex flex-col flex-grow justify-between">
                      <h3 className="text-white text-base font-medium font-inter leading-7 mb-2.5">
                        {post.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-inter mb-5">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {post.tags_name?.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-center text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags_name?.length > 4 && (
                          <button
                            onClick={() => handleGotoDetails(post.id)}
                            className="text-white text-[10.20px] font-medium font-poppins underline"
                          >
                            ...more
                          </button>
                        )}
                      </div>

                      <button
                        onClick={() => handleGotoDetails(post.id)}
                        className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Latest Posts Section */}
        <div className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-white text-xl sm:text-2xl font-bold font-poppins leading-loose mb-6">
            Latest Dispatches
          </h2>

          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : isError ? (
            <p className="text-red-500">Failed to load articles.</p>
          ) : filteredArticles.length === 0 ? (
            <p className="text-white">No articles found for this topic.</p>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
            >
              {filteredArticles.slice(0, visibleCount).map((post) => (
                <div
                  key={post.id}
                  className="border border-[#5C42B5] flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={post.banner_image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="bg-[#5C42B5] p-4 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2.5">
                        {post.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-5">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {post.tags_name?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags_name?.length > 3 && (
                          <button
                            onClick={() => handleGotoDetails(post.id)}
                            className="text-white text-[10.20px] font-medium font-poppins underline"
                          >
                            ...more
                          </button>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleGotoDetails(post.id)}
                      className="w-32 py-2 text-center outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > visibleCount && (
            <div className="flex justify-center pt-12">
              <button
                onClick={() => setVisibleCount(visibleCount + 6)}
                className="px-8 py-3.5 text-center outline outline-2 outline-white text-white text-sm font-unbounded cursor-pointer hover:bg-white/20 transition-colors"
              >
                Load More Dispatches
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
