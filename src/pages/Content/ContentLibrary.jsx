import contentHeader from "@/assets/images/content-header.png";
import contentBg from "@/assets/images/content-bg2.png";
import dots from "@/assets/images/dots.png";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import videoIcon from "@/assets/icons/video.svg";
import photosIcon from "@/assets/icons/photos.svg";
import pdfIcon from "@/assets/icons/pdf.svg";
import textIcon from "@/assets/icons/text.svg";
import rightIcon from "@/assets/icons/right.svg";
import leftIcon from "@/assets/icons/left.svg";
import views from "@/assets/icons/views.svg";
import noContentImg from "@/assets/images/no-content.png";
import { useState, useMemo } from "react";
import {
  useGetContentsQuery,
  useGetTagsQuery,
  useSubscribeEmailMutation,
  useGetHighlightedContentsQuery,
  useRecordContentViewMutation,
  // Filter by items options list
  useGetContributionsQuery,
  useGetCountriesQuery,
  useGetFunctionsQuery,
  useGetGenresQuery,
  useGetLanguagesQuery,
  useGetMovementsQuery,
  useGetPeriodsQuery,
  useGetRegionsQuery,
  useGetThemesQuery,
  useGetTheoreticalsQuery,
  useGetTypeOfContentsQuery,
} from "@/Redux/Api/authApi";
import { toast } from "react-toastify";
import { ChevronDown, Funnel } from "lucide-react";

export default function ContentLibrary() {
  const [email, setEmail] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open
  const [genericFilters, setGenericFilters] = useState([]); // Stores selected filters
  const [dropdownPagination, setDropdownPagination] = useState({}); // Tracks page for each dropdown
  const [subscribeEmail, { isLoading: isSubscribeLoading }] =
    useSubscribeEmailMutation();
  const {
    data: highlightsData,
    isLoading: highlightsLoading,
    refetch: refetchHighlights,
  } = useGetHighlightedContentsQuery();
  const {
    data: contributionsData,
    isLoading: contributionsLoading,
    isError: contributionsError,
  } = useGetContributionsQuery();
  const {
    data: countriesData,
    isLoading: countriesLoading,
    isError: countriesError,
  } = useGetCountriesQuery();
  const {
    data: functionsData,
    isLoading: functionsLoading,
    isError: functionsError,
  } = useGetFunctionsQuery();
  const {
    data: genresData,
    isLoading: genresLoading,
    isError: genresError,
  } = useGetGenresQuery();
  const {
    data: languagesData,
    isLoading: languagesLoading,
    isError: languagesError,
  } = useGetLanguagesQuery();
  const {
    data: movementsData,
    isLoading: movementsLoading,
    isError: movementsError,
  } = useGetMovementsQuery();
  const {
    data: periodsData,
    isLoading: periodsLoading,
    isError: periodsError,
  } = useGetPeriodsQuery();
  const {
    data: regionsData,
    isLoading: regionsLoading,
    isError: regionsError,
  } = useGetRegionsQuery();
  const {
    data: themesData,
    isLoading: themesLoading,
    isError: themesError,
  } = useGetThemesQuery();
  const {
    data: theoreticalsData,
    isLoading: theoreticalsLoading,
    isError: theoreticalsError,
  } = useGetTheoreticalsQuery();
  const {
    data: typeOfContentsData,
    isLoading: typeOfContentsLoading,
    isError: typeOfContentsError,
  } = useGetTypeOfContentsQuery();
  const [selectedTags, setSelectedTags] = useState([]);

  // Process contribution data from API
  const contributionOptions = useMemo(() => {
    if (!contributionsData) return [];
    // Use a Set to store unique titles after splitting and trimming
    const optionsSet = new Set();
    contributionsData.forEach(item => {
      item.title.split(';').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet); // Convert Set back to an array
  }, [contributionsData]);

  // Process country data from API
  const countryOptions = useMemo(() => {
    if (!countriesData) return [];
    const optionsSet = new Set();
    countriesData.forEach(item => {
      item.title.split('/').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [countriesData]);

  // Process function data from API
  const functionOptions = useMemo(() => {
    if (!functionsData) return [];
    const optionsSet = new Set();
    functionsData.forEach(item => {
      item.title.split(';').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [functionsData]);

  // Process genre data from API
  const genreOptions = useMemo(() => {
    if (!genresData) return [];
    const optionsSet = new Set();
    genresData.forEach(item => {
      item.title.split('/').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [genresData]);

  // Process language data from API
  const languageOptions = useMemo(() => {
    if (!languagesData) return [];
    const optionsSet = new Set();
    languagesData.forEach(item => {
      item.title.split('/').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [languagesData]);

  // Process movement data from API
  const movementOptions = useMemo(() => {
    if (!movementsData) return [];
    const optionsSet = new Set();
    movementsData.forEach(item => {
      item.title.split(';').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [movementsData]);

  // Process period data from API
  const periodOptions = useMemo(() => {
    if (!periodsData) return [];
    const optionsSet = new Set();
    periodsData.forEach(item => {
      optionsSet.add(item.title.trim());
    });
    return Array.from(optionsSet);
  }, [periodsData]);

  // Process region data from API
  const regionOptions = useMemo(() => {
    if (!regionsData) return [];
    const optionsSet = new Set();
    regionsData.forEach(item => {
      optionsSet.add(item.title.trim());
    });
    return Array.from(optionsSet);
  }, [regionsData]);

  // Process theme data from API
  const themeOptions = useMemo(() => {
    if (!themesData) return [];
    const optionsSet = new Set();
    themesData.forEach(item => {
      item.title.split(';').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [themesData]);

  // Process theoretical data from API
  const theoreticalOptions = useMemo(() => {
    if (!theoreticalsData) return [];
    const optionsSet = new Set();
    theoreticalsData.forEach(item => {
      item.title.split(';').forEach(part => {
        optionsSet.add(part.trim());
      });
    });
    return Array.from(optionsSet);
  }, [theoreticalsData]);

  // Process type of content data from API
  const typeOfContentOptions = useMemo(() => {
    if (!typeOfContentsData) return [];
    const optionsSet = new Set();
    typeOfContentsData.forEach(item => {
      optionsSet.add(item.title.trim());
    });
    return Array.from(optionsSet);
  }, [typeOfContentsData]);

  const [visibleTagsCount, setVisibleTagsCount] = useState(15);
  const [filterMode, setFilterMode] = useState("tag"); // "tag" | "content"
  const [selectedContentType, setSelectedContentType] = useState("all");
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetContentsQuery();
  const contents = data || [];

  const [recordBlogView] = useRecordContentViewMutation();

  const [activeIndex, setActiveIndex] = useState(0);
  const highlights = highlightsData?.data?.results || [];

  const handleNext = () => {
    if (highlights.length > 0) {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }
  };

  const handlePrev = () => {
    if (highlights.length > 0) {
      setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
    }
  };

  const [visibleCount, setVisibleCount] = useState(6);
  const {
    data: tagsData,
    isLoading: tagsLoading,
    isError: tagsError,
  } = useGetTagsQuery();

  const handleGotoDetails = async (id) => {
    try {
      const res = await recordBlogView({ content_id: id }).unwrap();

      await refetchHighlights(); // ✅ refresh view count in highlights
      navigate(`/content-details/${id}`);
    } catch (error) {
      console.error("View record failed:", error);
      navigate(`/content-details/${id}`);
    }
  };

  const tags = tagsData?.data?.map((tag) => tag.name) || [];

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
      ? contents
      : contents.filter((vault) =>
          vault.tags_names?.some((t) => selectedTags.includes(t))
        );

  const contentFilteredVaults =
    selectedContentType === "all"
      ? contents
      : contents.filter((vault) => {
          const type = vault.content_type?.toLowerCase();

          if (!type) return false;

          switch (selectedContentType) {
            case "video":
              return type === "video";
            case "pdf":
              return type === "pdf";
            case "photo":
              return type === "image";
            default:
              return true;
          }
        });

  const noContentFound = contentFilteredVaults.length === 0;

  const handleSubscribe = async () => {
    if (!email) return toast.error("Please enter an email");
    try {
      const res = await subscribeEmail(email).unwrap();
      if (res.success) {
        toast.success(res.message || "Subscription successful!");
        setEmail("");
      }
    } catch (error) {
      toast.error(error?.data?.message || "Subscription failed");
    }
  };

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-400 text-xl">
        Failed to load contents
      </div>
    );
  }

  if (tagsLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Loading tags...
      </div>
    );
  }

  if (tagsError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-400 text-xl">
        Failed to load tags
      </div>
    );
  }

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  // Define filter categories and their static options
  const filterCategories = [
    { name: "Contribution", options: contributionOptions, isLoading: contributionsLoading },
    { name: "Country", options: countryOptions, isLoading: countriesLoading },
    { name: "Function", options: functionOptions, isLoading: functionsLoading },
    { name: "Genre", options: genreOptions, isLoading: genresLoading },
    { name: "Language", options: languageOptions, isLoading: languagesLoading },
    { name: "Movement", options: movementOptions, isLoading: movementsLoading },
    { name: "Period", options: periodOptions, isLoading: periodsLoading },
    { name: "Region", options: regionOptions, isLoading: regionsLoading },
    { name: "Theme", options: themeOptions, isLoading: themesLoading },
    { name: "Theoretical", options: theoreticalOptions, isLoading: theoreticalsLoading },
    { name: "Type of content", options: typeOfContentOptions, isLoading: typeOfContentsLoading },
  ];

  // Handlers for the new filter system
  const handleDropdownToggle = (dropdownName) => {
    const isOpening = openDropdown !== dropdownName;
    setOpenDropdown(isOpening ? dropdownName : null);

    // If opening a new dropdown, reset its pagination to the first page
    if (isOpening) {
      setDropdownPagination(prev => ({
        ...prev,
        [dropdownName]: 0,
      }));
    }
  };

  const handleFilterSelect = (category, option) => {
    if (!genericFilters.some(f => f.category === category && f.value === option)) {
      setGenericFilters([...genericFilters, { category, value: option }]);
    }
    setOpenDropdown(null); // Close dropdown after selection
  };

  const handleRemoveGenericFilter = (filterToRemove) => {
    setGenericFilters(genericFilters.filter(f => f.value !== filterToRemove.value || f.category !== filterToRemove.category));
  };

  const handleNextOptionsPage = (categoryName) => {
    setDropdownPagination(prev => ({
      ...prev,
      [categoryName]: (prev[categoryName] || 0) + 1,
    }));
  };

  const handlePrevOptionsPage = (categoryName) => {
    setDropdownPagination(prev => ({
      ...prev,
      [categoryName]: Math.max(0, (prev[categoryName] || 0) - 1),
    }));
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
          className="absolute inset-0 -z-10 bg-cover bg-no-repeat 
  bg-[center] 3xl:bg-[center] bg-fixed"
          style={{
            backgroundImage: `url(${contentBg})`,
          }}
        ></div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="py-12 md:py-16 flex flex-col items-center justify-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-[#F4F4F3] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-unbounded leading-tight md:leading-[60px] text-center"
            >
              Explore Content Library
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1400"
              className="text-[#C6C6C6] text-base sm:text-lg md:text-xl font-normal font-unbounded leading-7 pt-2 text-center max-w-3xl"
            >
              Discover videos, PDFs, photos, and more in our futuristic digital
              collection
            </p>
          </div>
          {/* === Mode Switch === */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setFilterMode("tag")}
              className={`w-full sm:w-auto px-6 py-2 font-unbounded text-sm ${
                filterMode === "tag"
                  ? "bg-[#C12E83] text-white"
                  : "bg-[#C6C6C6] text-[#727272]"
              }`}
            >
              Filter by Tags
            </button>
            <button
              onClick={() => setFilterMode("content")}
              className={`w-full sm:w-auto px-6 py-2 font-unbounded text-sm ${
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
            <div className="py-12 md:py-16 flex flex-col items-center justify-center">
              {/* Category Buttons */}
              <div className="w-full flex flex-wrap items-center justify-center gap-4">
                {[
                  { label: "All Content", type: "all" },
                  { label: "Video", type: "video", icon: videoIcon },
                  { label: "PDFs", type: "pdf", icon: pdfIcon },
                  { label: "Photos", type: "photo", icon: photosIcon },
                ].map((item) => {
                  const isActive = selectedContentType === item.type;
                  return (
                    <div
                      key={item.type}
                      onClick={() => setSelectedContentType(item.type)}
                      className={`cursor-pointer w-auto px-4 h-12 flex items-center justify-center gap-2 text-base font-medium font-unbounded transition-all duration-200 ${
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 pt-16 max-w-6xl mx-auto">
                  {contentFilteredVaults.slice(0, visibleCount).map((vault) => (
                    <div
                      key={vault.id}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      className="w-full border border-[#2C1B2C] flex flex-col h-[420px]"
                    >
                      <div
                        className="relative h-48 overflow-hidden cursor-pointer"
                        onClick={() => handleGotoDetails(vault.id)}
                      >
                        <img
                          src={vault.thumbnail_image || noContentImg}
                          alt={vault.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="bg-[#2C1B2C] p-5 flex flex-col flex-grow justify-between">
                        <div>
                          <h3 className="text-white text-base font-medium font-unbounded leading-7 mb-2">
                            {vault.title}
                          </h3>
                          <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-unbounded mb-4">
                            {truncateText(vault.content, 10)}
                            {vault.content &&
                              vault.content.split(" ").length > 10 && (
                                <span
                                  onClick={() => handleGotoDetails(vault.id)}
                                  className="text-white underline cursor-pointer ml-1"
                                >
                                  ...more
                                </span>
                              )}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {vault.tags_names?.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/10 text-white text-[10.20px] font-medium leading-none rounded-full font-inter"
                              >
                                {tag}
                              </span>
                            ))}

                            {vault.tags_names &&
                              vault.tags_names.length > 4 && (
                                <button
                                  onClick={() => handleGotoDetails(vault.id)}
                                  className="text-white text-[10.20px] font-medium font-inter underline"
                                >
                                  ...more
                                </button>
                              )}
                          </div>
                        </div>
                        <button
                          onClick={() => handleGotoDetails(vault.id)}
                          className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] hover:bg-[#FF80EB] hover:outline-none active:outline-none active:bg-[#C12E83] text-white text-sm font-unbounded"
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
                    className="w-24 md:w-32 h-auto"
                  />
                  <h2 className="text-[#FF80EB] text-2xl md:text-3xl lg:text-5xl text-center font-normal leading-tight md:leading-[60px] font-unbounded mb-2">
                    No content found
                  </h2>
                  <p className="text-white text-base md:text-lg lg:text-2xl text-center font-normal font-unbounded mb-6">
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

              {/* Load More & Subscribe */}
              <div className="flex flex-col items-center justify-between gap-20 pt-20 pb-5">
                {visibleCount < contentFilteredVaults.length && (
                  <div
                    onClick={() => setVisibleCount(visibleCount + 9)}
                    className="px-8 py-3.5 text-center outline outline-2 outline-[#EB4DAC] text-white text-sm font-unbounded cursor-pointer"
                  >
                    Load More Content
                  </div>
                )}

                {/* Week's Highlights + Subscribe Section */}
                {selectedContentType === "all" && (
                  <>
                    {highlightsLoading ? (
                      <div className="text-center text-white text-xl py-20">
                        Loading highlights...
                      </div>
                    ) : highlights.length > 0 ? (
                      <div className="w-full max-w-6xl relative bg-[#2C1B2C]/70 outline outline-1 outline-[#FF80EB] transition-all duration-500 p-4 sm:p-6">
                        <div className="w-full flex flex-col lg:flex-row items-center justify-center py-6 md:py-10 px-2 sm:px-6 lg:px-12 gap-8 lg:gap-16">
                          <div className="flex-1 flex flex-col items-center lg:items-start justify-start text-center lg:text-left">
                            <h1 className="text-[#F4F4F3] text-2xl md:text-3xl lg:text-4xl font-semibold font-unbounded pb-4 md:pb-6">
                              Week's highlights
                            </h1>
                            <p className="text-[#F4F4F3] text-xl md:text-2xl lg:text-3xl font-normal font-unbounded leading-7">
                              {highlights[activeIndex]?.content?.title ||
                                "No Title"}
                            </p>
                            <p className="text-[#FF39B0] text-sm md:text-base font-normal font-unbounded leading-normal pt-2">
                              {highlights[activeIndex]?.content?.content_type ||
                                "No Type"}
                            </p>
                            <div className="flex gap-2.5 py-5">
                              <img src={views} alt="" />
                              <p className="text-[#FF39B0] text-sm md:text-base font-normal font-unbounded leading-normal">
                                {highlights[activeIndex]?.content
                                  ?.views_count || 0}
                              </p>
                            </div>
                            <div
                              onClick={() =>
                                handleGotoDetails(
                                  highlights[activeIndex]?.content?.id
                                )
                              }
                              className="w-full sm:w-auto h-11 px-5 outline outline-1 outline-[#FF80EB] hover:bg-[#FF80EB] hover:outline-none active:outline-none active:bg-[#C12E83] inline-flex justify-center items-center gap-2.5 cursor-pointer"
                            >
                              <div className="text-center text-white text-lg md:text-xl lg:text-2xl font-normal font-unbounded">
                                View
                              </div>
                            </div>
                          </div>
                          <img
                            className="flex-1 w-full max-w-md lg:max-w-lg h-60 sm:h-72 object-cover relative shadow-[0px_0px_49.2px_0px_rgba(0,0,0,0.25)]"
                            src={
                              highlights[activeIndex]?.content
                                ?.upload_files?.[0]?.url || noContentImg
                            }
                            alt="Highlight"
                          />
                        </div>

                        {/* === Navigation Arrows === */}
                        <div
                          onClick={handleNext}
                          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full cursor-pointer"
                        >
                          <img
                            src={rightIcon}
                            alt=""
                            className="w-[5px] h-2.5"
                          />
                        </div>
                        <div
                          onClick={handlePrev}
                          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full cursor-pointer"
                        >
                          <img
                            src={leftIcon}
                            alt=""
                            className="w-[5px] h-2.5"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-white text-xl py-20">
                        No highlights found.
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* === TAG FILTER MODE === */}
          {filterMode === "tag" && (
            <>
              {/* Search & Filter Section */}
              <div className="pt-12 md:pt-16 flex flex-col items-center justify-center">
                {/* Filters */}
                <div className="bg-[#1A0E1E]/70 px-4 sm:px-6 md:px-8 pb-10 pt-6 flex flex-col justify-center items-start gap-4 max-w-7xl w-full">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 w-full">
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
                    {tagsData?.data
                      ?.slice(0, visibleTagsCount) // শুধুমাত্র visible count পর্যন্ত দেখাবে
                      .map((tag) => {
                        const isSelected = selectedTags.includes(tag.name);
                        return (
                          <div
                            key={tag.id}
                            onClick={() => handleTagClick(tag.name)}
                            className={`cursor-pointer px-3.5 py-1.5 outline outline-1 outline-[#E5E7EB] ${
                              isSelected
                                ? "bg-yellow-300 text-black"
                                : "bg-transparent text-[#C6C6C6]"
                            } text-xs font-unbounded`}
                          >
                            {tag.name} ({tag.content_count})
                          </div>
                        );
                      })}

                    {/* যদি মোট ট্যাগ সংখ্যা visibleTagsCount থেকে বেশি হয় তাহলে "more" বাটন দেখাবে */}
                    {visibleTagsCount < tagsData?.data?.length && (
                      <button
                        onClick={() =>
                          setVisibleTagsCount(visibleTagsCount + 15)
                        }
                        className="px-3.5 py-1.5 outline outline-1 outline-[#E5E7EB] text-white text-xs font-unbounded"
                      >
                        ...more
                      </button>
                    )}
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

              {/* New filter part */}
              <div className="pt-12 md:pt-16 flex flex-col items-center justify-center">
                {/* Filters */}
                <div className="bg-[#1A0E1E]/70 px-4 sm:px-6 md:px-8 pb-10 pt-6 flex flex-col justify-center items-start gap-4 max-w-7xl w-full">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 w-full">
                    <div className="text-[#F4F4F3] text-lg font-normal font-unbounded">
                      Filters {/* This is the new filter section */}
                    </div>
                    {genericFilters.length > 0 && (
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setGenericFilters([])}
                          className="bg-[#C12E83] text-white px-3 py-1 text-sm font-unbounded flex items-center gap-2"
                        >
                          ✕ Clear All
                        </button>
                        <span className="text-[#F6FF1F] text-sm font-unbounded outline outline-1 outline-offset-[-1px] outline-[#F6FF1F] px-[11px] py-1">
                          {genericFilters.length} filter
                          {genericFilters.length > 1 ? "s" : ""} active
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Tag List (STATIC) */}
                  <div className="flex flex-wrap gap-3">
                    {/* Static Filter Button */}
                    <div className="w-48 h-9 cursor-pointer px-3.5 py-1.5 outline outline-1 outline-[#E5E7EB] bg-transparent text-[#C6C6C6] text-xs font-unbounded flex items-center justify-between">
                      <div>Filter</div>
                      <Funnel size={14} />
                    </div>

                    {/* Dynamic Dropdown Filters */}
                    {filterCategories.map((category) => (
                      <div key={category.name} className="relative">
                        <div
                          onClick={() => handleDropdownToggle(category.name)}
                          className="w-48 h-9 cursor-pointer px-3.5 py-1.5 outline outline-1 outline-[#E5E7EB] bg-transparent text-[#C6C6C6] text-xs font-unbounded flex items-center justify-between"
                        >
                          <div>{category.name}</div>
                          <ChevronDown size={16} />
                        </div>
                        {openDropdown === category.name && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-[#1C1523] border border-[#FF80EB] rounded-md shadow-lg z-20 p-2">
                            {category.isLoading ? (
                              <div className="text-[#C6C6C6] text-sm text-center p-2">
                                Loading...
                              </div>
                            ) : category.options.length > 0 ? (
                              <>
                                {category.options
                                  .slice(
                                    (dropdownPagination[category.name] || 0) * 10,
                                    ((dropdownPagination[category.name] || 0) * 10) + 10
                                  )
                                  .map((option) => (
                                    <div key={option} onClick={() => handleFilterSelect(category.name, option)} className="text-[#C6C6C6] text-sm font-normal text-center p-2 hover:bg-[#C12E83] hover:text-white cursor-pointer rounded">
                                      {option}
                                    </div>
                                  ))}
                                <div className="flex justify-between items-center mt-1">
                                  {(dropdownPagination[category.name] || 0) > 0 && (
                                    <div onClick={() => handlePrevOptionsPage(category.name)} className="text-[#FF80EB] text-xs font-normal text-center p-2 hover:bg-[#C12E83] hover:text-white cursor-pointer rounded w-full">
                                      previous
                                    </div>
                                  )}
                                  {((dropdownPagination[category.name] || 0) * 10) + 10 < category.options.length && (
                                    <div onClick={() => handleNextOptionsPage(category.name)} className="text-[#FF80EB] text-xs font-normal text-center p-2 hover:bg-[#C12E83] hover:text-white cursor-pointer rounded w-full">
                                      ...more
                                    </div>
                                  )}
                                </div>
                              </>
                            ) : (
                              <div className="text-[#C6C6C6] text-sm text-center p-2">
                                No options
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Selected Generic Filters */}
                  {genericFilters.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-4">
                      {genericFilters.map((filter) => (
                        <div key={`${filter.category}-${filter.value}`} className="bg-[#C12E83] text-white px-3 py-1 text-xs font-unbounded flex items-center gap-2">
                          {filter.value}
                          <button onClick={() => handleRemoveGenericFilter(filter)}>
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Vault Cards */}
              <div className="flex items-start justify-center pt-16 md:pt-24 lg:pt-32">
                <div className="pb-12 max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {filteredVaults.slice(0, visibleCount).map((vault) => (
                      <div
                        key={vault.id}
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="200"
                        className="w-full border border-[#2C1B2C] flex flex-col"
                      >
                        {/* <div
                          className="relative h-52 overflow-hidden cursor-pointer"
                          onClick={() => handleGotoDetails(vault.id)}
                        >
                          <img
                            src={vault.thumbnail_image || noContentImg}
                            alt={vault.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div> */}

                        <div className="bg-[#2C1B2C] px-4 py-7 flex flex-col flex-grow justify-between">
                          <div className="flex-grow">
                            <h3 className="text-white text-base font-medium font-unbounded leading-7 mb-2">
                              {vault.title}
                            </h3>
                            {vault.description && (
                              <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-unbounded mb-4">
                                Description:{" "}
                                {truncateText(vault.description, 10)}
                              </p>
                            )}
                            <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-unbounded mb-4">
                              Author: {vault.author}
                            </p>
                            <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-unbounded mb-4">
                              Country: {vault.country_of_content_title}
                            </p>
                            <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-unbounded mb-7">
                              Language: {vault.language_title}
                            </p>
                          </div>
                          <div>
                            <p className="text-[#FFFFFF] text-xs font-medium leading-tight font-unbounded mb-4">
                              Genre: {vault.genre_title}
                            </p>
                            <button
                              onClick={() => handleGotoDetails(vault.id)}
                              className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-[#EE87E5] hover:bg-[#FF80EB] hover:outline-none active:outline-none active:bg-[#C12E83] text-white text-sm font-unbounded"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Load More & Subscribe */}
              <div className="flex flex-col items-center justify-between gap-20 pt-8 pb-5">
                {visibleCount < filteredVaults.length && (
                  <div
                    onClick={() => setVisibleCount(visibleCount + 9)}
                    className="px-8 py-3.5 text-center outline outline-2 outline-[#EB4DAC] text-white text-sm font-unbounded cursor-pointer"
                  >
                    Load More Content
                  </div>
                )}

                {/* Week's Highlights + Subscribe Section */}
                {selectedTags.length === 0 && (
                  <>
                    {highlightsLoading ? (
                      <div className="text-center text-white text-xl py-20">
                        Loading highlights...
                      </div>
                    ) : highlights.length > 0 ? (
                      <div className="w-full max-w-6xl relative bg-[#2C1B2C]/70 outline outline-1 outline-[#FF80EB] transition-all duration-500 p-4 sm:p-6">
                        <div className="w-full flex flex-col lg:flex-row items-center justify-center py-6 md:py-10 px-2 sm:px-6 lg:px-12 gap-8 lg:gap-16">
                          <div className="flex-1 flex flex-col items-center lg:items-start justify-start text-center lg:text-left">
                            <h1 className="text-[#F4F4F3] text-2xl md:text-3xl lg:text-4xl font-semibold font-unbounded pb-4 md:pb-6">
                              Week's highlights
                            </h1>
                            <p className="text-[#F4F4F3] text-xl md:text-2xl lg:text-3xl font-normal font-unbounded leading-7">
                              {highlights[activeIndex]?.content?.title ||
                                "No Title"}
                            </p>
                            <p className="text-[#FF39B0] text-sm md:text-base font-normal font-unbounded leading-normal pt-2">
                              {highlights[activeIndex]?.content?.content_type ||
                                "No Type"}
                            </p>
                            <div className="flex gap-2.5 py-5">
                              <img src={views} alt="" />
                              <p className="text-[#FF39B0] text-sm md:text-base font-normal font-unbounded leading-normal">
                                {highlights[activeIndex]?.content
                                  ?.views_count || 0}
                              </p>
                            </div>
                            <div
                              onClick={() =>
                                handleGotoDetails(
                                  highlights[activeIndex]?.content?.id
                                )
                              }
                              className="w-full sm:w-auto h-11 px-5 outline outline-1 outline-[#FF80EB] hover:bg-[#FF80EB] hover:outline-none active:outline-none active:bg-[#C12E83] inline-flex justify-center items-center gap-2.5 cursor-pointer"
                            >
                              <div className="text-center text-white text-lg md:text-xl lg:text-2xl font-normal font-unbounded">
                                View
                              </div>
                            </div>
                          </div>

                          <img
                            className="flex-1 w-full max-w-md lg:max-w-lg h-60 sm:h-72 object-cover relative shadow-[0px_0px_49.2px_0px_rgba(0,0,0,0.25)]"
                            src={
                              highlights[activeIndex]?.content
                                ?.upload_files?.[0]?.url || noContentImg
                            }
                            alt="Highlight"
                          />
                        </div>

                        {/* === Navigation Arrows === */}
                        <div
                          onClick={handleNext}
                          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full cursor-pointer"
                        >
                          <img
                            src={rightIcon}
                            alt=""
                            className="w-[5px] h-2.5"
                          />
                        </div>
                        <div
                          onClick={handlePrev}
                          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-[#D9D9D9]/10 w-6 h-6 flex justify-center items-center outline outline-1 outline-fuchsia-400 backdrop-blur-[6px] hover:bg-fuchsia-400/20 transition-all rounded-full cursor-pointer"
                        >
                          <img
                            src={leftIcon}
                            alt=""
                            className="w-[5px] h-2.5"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-white text-xl py-20">
                        No highlights found.
                      </div>
                    )}

                    {/* Subscribe section */}
                    <div>
                      <div className="relative inline-block">
                        {/* Background tilted area */}
                        <div
                          className="absolute inset-0 top-[-48px] left-[-25px] w-full h-32 rotate-[-0.29deg] bg-fixed bg-repeat hidden md:block"
                          style={{ backgroundImage: `url(${dots})` }}
                        ></div>

                        {/* Text */}
                        <h2 className="relative text-[#F4F4F3] text-xl sm:text-2xl md:text-4xl font-normal font-unbounded leading-tight md:leading-10 text-center">
                          Want More? Sign Up for Updates
                        </h2>
                      </div>

                      <div className="text-[#C6C6C6] text-sm md:text-base font-normal font-unbounded leading-normal pt-5 text-center">
                        Get notified about new content and exclusive releases
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center pt-3 pb-24 md:pb-44 gap-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full sm:w-72 h-12 bg-[#282828] outline outline-1 outline-[#FF39B0] text-[#ADAEBC] text-sm placeholder:text-sm sm:placeholder:text-base font-unbounded px-3 focus:outline-[#FF80EB] placeholder-[#ADAEBC] focus:text-white"
                        />
                        <button
                          onClick={handleSubscribe}
                          className="w-full sm:w-auto px-10 py-3 bg-[#F6FF1F] text-black text-base font-medium font-unbounded transition"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
