import vaultsHeaderImg from "@/assets/images/vaults_header.png";
import vaultsBg from "@/assets/images/aboutPageBg.png";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import {
  useGetBlogContentsQuery,
  useGetTagsQuery,
  useGetHighlightedBlogsQuery,
  useRecordBlogViewMutation,
} from "@/Redux/Api/authApi";

export default function Vaults() {
  const { data, isLoading, isError } = useGetBlogContentsQuery();
  const blogs = data?.data?.results || [];
  const {
    data: highlightedData,
    isLoading: highlightedLoading,
    isError: highlightedError,
  } = useGetHighlightedBlogsQuery();
  const highlightedVaults = highlightedData?.data?.results || [];
  const [recordBlogView] = useRecordBlogViewMutation();

  const {
    data: tagsData,
    isLoading: tagsLoading,
    isError: tagsError,
  } = useGetTagsQuery();

  const [activeTopicName, setActiveTopicName] = useState(null);
  const [visibleTagsCount, setVisibleTagsCount] = useState(15);

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

  const filteredBlogs = useMemo(() => {
    let newFilteredBlogs = blogs || [];

    // Filter by topic
    if (activeTopicName) {
      newFilteredBlogs = newFilteredBlogs.filter((blog) =>
        blog.tags_name?.includes(activeTopicName)
      );
    }

    // Filter by search query
    if (searchQuery) {
      newFilteredBlogs = newFilteredBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return newFilteredBlogs;
  }, [searchQuery, activeTopicName, blogs]);

  const navigate = useNavigate();

  const handleGotoDetails = async (id) => {
    try {
      const res = await recordBlogView({ blog_id: id }).unwrap();
      navigate(`/vault-detail/${id}`);
    } catch (error) {
      console.error("Error recording blog view:", error);
      // চাইলে এখানে toast দেখাতে পারো
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollRestoration />
      {/* === Background Layer (Fixed) === */}
      <div
        style={{
          backgroundImage: `url(${vaultsBg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>

      {/* === Header Section (Full Width Image) === */}
      <div className="w-full relative z-10">
        <img
          src={vaultsHeaderImg.src || vaultsHeaderImg}
          alt="Vaults Header"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* === Page Content === */}
      <div className="relative z-10 px-4 md:px-8 lg:px-24">
        {/* Search & Filter Section */}
        <div className="pt-10 max-w-7xl mx-auto">
          <div className="">
            <div className="w-full bg-white rounded-xl flex justify-start items-center gap-2.5 px-10 py-3">
              <Search size={16} color="#727272" />
              <input
                type="text"
                placeholder="Search vaults..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-[#727272] placeholder:text-[#727272] text-base font-normal font-unbounded leading-normal w-full bg-white pl-1 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="pt-6 pb-4">
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

        {/* Featured Vaults (Dynamic from API) */}
        <div className="pt-1 max-w-7xl mx-auto">
          <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-5">
            Featured Vaults
          </h2>

          {highlightedLoading ? (
            <p className="text-white">Loading featured vaults...</p>
          ) : highlightedError ? (
            <p className="text-red-500">Failed to load featured vaults.</p>
          ) : highlightedVaults.length === 0 ? (
            <p className="text-white">No featured vaults found.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {highlightedVaults.map((item) => {
                const blog = item.blog;
                return (
                  <div
                    key={blog.id}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    className="shadow-[0px_0px_20px_0px_rgba(193,46,131,1.00)] h-[401px]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={
                          blog.primary_image ||
                          "https://via.placeholder.com/400x300?text=No+Image"
                        }
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="bg-[#2C1B2C] px-4 py-8 h-[209px]">
                      <h3 className="text-white text-base font-medium font-inter leading-7 mb-2.5">
                        {blog.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-inter mb-5">
                        {blog.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {blog.tags_name?.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-center text-white text-[10.20px] font-inter font-medium leading-none rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags_name?.length > 4 && (
                          <button
                            onClick={() => handleGotoDetails(blog.id)}
                            className="text-white text-[10.20px] font-medium font-poppins underline"
                          >
                            ...more
                          </button>
                        )}
                      </div>

                      <button
                        onClick={() => handleGotoDetails(blog.id)}
                        className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] text-white text-sm font-unbounded"
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

        {/* Latest Vaults */}
        <div className="pb-12 max-w-7xl mx-auto">
          <h2 className="text-white text-2xl font-bold font-poppins leading-loose pb-4 pt-7">
            Latest Vaults
          </h2>

          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : isError ? (
            <p className="text-red-500">Failed to load vaults.</p>
          ) : filteredBlogs.length === 0 ? (
            <p className="text-white">No vaults found for this topic.</p>
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="300"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredBlogs.map((vault) => (
                <div
                  key={vault.id}
                  className="border border-[#2C1B2C] flex flex-col h-[421px]"
                >
                  {/* === Image === */}
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      src={vault.primary_image || vault.image}
                      alt={vault.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* === Text === */}
                  <div className="bg-[#2C1B2C] px-4 py-8 flex flex-col flex-grow justify-between h-[221px]">
                    <div>
                      <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2.5">
                        {vault.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-5">
                        {vault.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {(vault.tags_name || vault.tags)
                          ?.slice(0, 3)
                          .map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                            >
                              {tag}
                            </span>
                          ))}
                        {(vault.tags_name || vault.tags)?.length > 3 && (
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
          )}
        </div>
      </div>
    </div>
  );
}
