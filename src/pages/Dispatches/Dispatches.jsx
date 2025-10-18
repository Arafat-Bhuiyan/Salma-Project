import dispatchesBg from "@/assets/images/dispatches_bg.png";
import headerImg from "@/assets/images/dispatches-header-photo.png";
import { Search } from "lucide-react";
import { useState } from "react";
import featuredImg1 from "@/assets/images/featuredImg1.jpg";
import featuredImg2 from "@/assets/images/featuredImg2.jpg";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";

export default function Dispatches() {
  const [topics, setTopics] = useState([
    { name: "All Topics", active: true },
    { name: "Art", active: false },
    { name: "Design", active: false },
    { name: "History", active: false },
    { name: "Technology", active: false },
    { name: "Philosophy", active: false },
    { name: "Science", active: false },
    { name: "Literature", active: false },
    { name: "Music", active: false },
  ]);

  const handleTopicClick = (selectedName) => {
    const updatedTopics = topics.map((topic) =>
      topic.name === selectedName
        ? { ...topic, active: true }
        : { ...topic, active: false }
    );
    setTopics(updatedTopics);
  };

  const featuredPosts = [
    {
      id: 1,
      image: featuredImg1,
      title: "The Future of Collective Organizing",
      description:
        "Exploring new models of decentralized community action for social change.",
      tags: ["Politics", "Philosophy"],
    },
    {
      id: 2,
      image: featuredImg2,
      title: "Art as Resistance: Case Studies",
      description:
        "How creative expression has powered social movements throughout history.",
      tags: ["Art", "History"],
    },
  ];

  const latestPosts = [
    {
      id: 1,
      image: featuredImg1,
      title: "The Future of Collective Organizing",
      description:
        "Exploring new models of decentralized community action for social change.",
      tags: ["Politics", "Philosophy"],
    },
    {
      id: 2,
      image: featuredImg3,
      title: "Digital Tools for Movement Building",
      description:
        "A review of software and platforms that can enhance organizing efforts.",
      tags: ["Technology", "Politics"],
    },
    {
      id: 3,
      image: featuredImg2,
      title: "Art as Resistance: Case Studies",
      description:
        "How creative expression has powered social movements throughout history.",
      tags: ["Art", "History"],
    },
    {
      id: 4,
      image: featuredImg4,
      title: "Climate Justice and Solidarity",
      description:
        "Connecting environmental activism with broader social justice movements.",
      tags: ["Science", "History"],
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute top-0 left-0 w-full min-h-full z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${dispatchesBg})`,
        }}
      />

      {/* All Content */}
      <div className="relative z-10">
        {/* Header Image */}
        <div className="flex justify-center px-4 md:px-20 lg:px-40 xl:px-80 py-12 md:py-20">
          <img
            src={headerImg.src || headerImg}
            alt="The Radical Dispatches"
            className="w-full max-w-3xl h-auto"
          />
        </div>

        {/* Search and Filter Section */}
        <div className="px-4 md:px-8 lg:px-16 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="w-full bg-[#C6C6C6] flex justify-start items-center gap-2.5 px-10 py-3">
              <Search size={16} color="#727272" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="text-[#727272] placeholder:text-[#727272] text-base font-normal font-unbounded leading-normal w-full bg-[#C6C6C6] pl-1 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="mb-4">
            <p className="text-white text-base font-medium font-unbounded leading-7 mb-2">
              Filter by topic:
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  onClick={() => handleTopicClick(topic.name)}
                  className={`px-4 py-2 rounded-md text-xs font-medium font-unbounded leading-none transition-colors duration-200 ${
                    topic.active
                      ? "bg-[#C0FF4C] text-black"
                      : "bg-[#C6C6C6] text-[#727272]"
                  }`}
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts Section */}
        <div className="px-4 md:px-8 lg:px-16 mb-16">
          <h2 className="text-white text-2xl font-bold font-poppins leading-loose mb-6">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <div className="relative h-64 overflow-hidden shadow-[0px_0px_20px_0px_rgba(92,66,181,1.00)]">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#5C42B5] p-6">
                  <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="px-4 md:px-8 lg:px-16 pb-20">
          <h2 className="text-white text-2xl font-bold font-poppins leading-loose mb-6">
            Latest Posts
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="border border-[#5C42B5] flex flex-col h-[420px]" // fixed total height
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Section */}
                <div className="bg-[#5C42B5] p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 text-white text-[10.20px] font-medium leading-none rounded-full font-poppins"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button (always bottom aligned) */}
                  <button className="w-32 h-8 text-center  outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
