import { useEffect } from "react";
import vaultsDetailHeaderImg from "@/assets/images/vaults_details_header.png";
import vaultsBg from "@/assets/images/aboutPageBg.png";
import featuredImg3 from "@/assets/images/featuredImg3.jpg";
import featuredImg4 from "@/assets/images/featuredImg4.jpg";
import detailImage from "@/assets/images/detailImage.png";
import authorProfile from "@/assets/images/author-profile.png";
import { useNavigate } from "react-router-dom";
import like from "@/assets/images/like.svg";
import share from "@/assets/images/share.svg";

export function VaultDetail() {
  const navigate = useNavigate();

  const handleGotoDetails = () => {
    navigate("/vault-detail");
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

  const relatedArticles = [
    {
      id: 1,
      image: featuredImg3,
      title: "Digital Preservation Tools",
      description:
        "How technology is helping preserve artistic and historical materials.",
      tags: ["Technology", "Science"],
    },
    {
      id: 2,
      image: featuredImg4,
      title: "Art in the Archives",
      description:
        "Exploring how artists reinterpret archival materials for modern times.",
      tags: ["Art", "History"],
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* === Header Section (Full Width Image) === */}
      <div className="w-full">
        <img
          src={vaultsDetailHeaderImg.src || vaultsDetailHeaderImg}
          alt="Vaults Header"
          className="w-full h-auto object-cover object-center"
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
                The Future of Artificial Intelligence in Web Development
              </div>

              {/* Tags Section */}
              <div className="flex gap-2 items-center pt-3 pb-6">
                <div className="px-3.5 outline outline-2 outline-offset-[-2px] outline-[#FF80EB]">
                  <div className="py-1.5 flex items-center justify-center text-center text-white text-xs font-medium font-poppins leading-none">
                    Politics
                  </div>
                </div>
                <div className="px-3.5 outline outline-2 outline-offset-[-2px] outline-[#FF80EB]">
                  <div className="py-1.5 flex items-center justify-center text-center text-white text-xs font-medium font-poppins leading-none">
                    Philosophy
                  </div>
                </div>
              </div>

              {/* Like and Share Buttons */}
              <div className="flex gap-2 items-center">
                <div className="w-28 h-12 px-3.5 flex items-center outline outline-2 outline-offset-[-2px] outline-[#FF80EB] hover:bg-[#FF80EB] active:bg-[#C12E83] active:outline-none">
                  <button className="flex items-center justify-start gap-1 text-[#C8C8C8] hover:text-white text-base font-normal font-unbounded">
                    <img src={like} alt="" className="hover:text-white" />
                    Like
                  </button>
                </div>
                <div className="w-28 h-12 px-3.5 flex items-center bg-[#FF80EB] active:bg-[#C12E83]">
                  <button className="flex items-center justify-start gap-1 text-white text-base font-normal font-unbounded">
                    <img src={share} alt="" className="w-5" />
                    Share
                  </button>
                </div>
              </div>

              <div className="w-full flex items-start justify-center gap-20">
                {/* Left part: Main Details */}
                <div className="w-2/3">
                  <div className="text-white text-lg font-normal font-unbounded leading-loose py-11">
                    The landscape of web development is undergoing a
                    revolutionary transformation, driven by the rapid
                    advancement of artificial intelligence technologies. As we
                    stand at the precipice of a new era, developers and
                    businesses alike are witnessing unprecedented changes in how
                    websites and applications are conceived, designed, and
                    deployed.
                  </div>

                  <div className="text-[#F4F4F3] text-3xl font-normal font-unbounded leading-9 pb-6">
                    The AI Revolution in Code Generation
                  </div>

                  <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed">
                    Modern AI systems are now capable of generating complex code
                    structures, automating repetitive tasks, and even suggesting
                    optimal solutions for intricate programming challenges. This
                    shift represents more than just technological advancement;
                    it's a fundamental reimagining of the development process
                    itself.
                  </div>

                  <div className="bg-[#2C1B2C] border border-[#FF80EB] py-9 flex items-center justify-center my-12">
                    <div className="text-[#F4F4F3] text-2xl font-normal font-poppins italic">
                      "AI is not replacing developers; it's amplifying <br />{" "}
                      their creative potential and enabling them to <br /> focus
                      on innovation rather than implementation."
                    </div>
                  </div>

                  <div>
                    <img
                      src={detailImage}
                      alt=""
                      className="w-full h-64 pb-9"
                    />
                  </div>

                  <div className="text-3xl font-normal font-unbounded leading-9 text-[#F4F4F3] pb-6">
                    Transforming User Experience Design
                  </div>

                  <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed pb-8">
                    The integration of AI in web development extends far beyond
                    code generation. Machine learning algorithms are now capable
                    of analyzing user behavior patterns, predicting preferences,
                    and dynamically adjusting interfaces to optimize user
                    experience in real-time.
                  </div>

                  <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed pb-12">
                    This personalization revolution is creating websites that
                    adapt and evolve with each user interaction, making every
                    digital experience unique and tailored to individual needs
                    and preferences.
                  </div>

                  <div className="text-[#F4F4F3] text-3xl font-normal font-unbounded leading-9 pb-6">
                    The Future Landscape
                  </div>

                  <div className="text-[#C6C6C6] text-base font-normal font-unbounded leading-relaxed pb-11">
                    As we look toward the future, the convergence of AI and web
                    development promises even more exciting possibilities. From
                    autonomous debugging systems to intelligent content
                    optimization, the next decade will likely see the emergence
                    of truly intelligent web platforms that can self-optimize
                    and evolve without human intervention.
                  </div>
                </div>

                {/* Right part: Related posts and Popular tags section */}
                <div className="w-1/3 flex flex-col items-center justify-center gap-8 py-11">
                  <div className="max-w-sm bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                    <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                      Related Posts
                    </div>

                    <div className="flex flex-col justify-center items-start gap-4">
                      <div className="flex flex-col gap-1.5 px-16">
                        <div className="text-[#F4F4F3] text-sm font-normal font-unbounded leading-tight">
                          Machine Learning in Frontend
                        </div>
                        <div className="text-[#9CA3AF] text-xs font-normal font-unbounded leading-none">
                          Read More →
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 px-16">
                        <div className="text-[#F4F4F3] text-sm font-normal font-unbounded leading-tight">
                          Responsive Design Evolution
                        </div>
                        <div className="text-[#9CA3AF] text-xs font-normal font-unbounded leading-none">
                          Read More →
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 px-16">
                        <div className="text-[#F4F4F3] text-sm font-normal font-unbounded leading-tight">
                          AI-Powered Security
                        </div>
                        <div className="text-[#9CA3AF] text-xs font-normal font-unbounded leading-none">
                          Read More →
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-sm bg-[#2C1B2C] outline outline-1 outline-offset-[-1px] outline-[#FF80EB] p-6">
                    <div className="text-[#F4F4F3] text-start text-xl font-normal font-unbounded pb-6">
                      Popular Tags
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <div
                          key={topic.id}
                          className="px-3 py-1 outline outline-1 outline-offset-[-1px] outline-[#F4F4F3] flex items-center justify-center"
                        >
                          <div className="text-[#C6C6C6] text-xs font-normal font-unbounded">
                            {topic.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Details */}
            <div className="bg-[#1A0E1E]/70 shadow-[0px_0px_30px_0px_rgba(255,128,234,0.50)] py-9 px-24 mt-10">
              <div className="text-[#F4F4F3] text-lg font-bold font-['Unbounded'] leading-7">
                About the Author
              </div>
              <div className="flex items-center gap-2">
                <img src={authorProfile} alt="" />
                <div className="flex flex-col justify-center gap-1">
                  <div className="text-[#F4F4F3] text-sm font-medium font-['Unbounded'] leading-normal">
                    Maria Rodriguez
                  </div>
                  <div className="text-[#C6C6C6] text-sm font-normal font-['Unbounded'] leading-normal">
                    Contributing writer for The Radical Commons focusing on
                    social movements and collective action.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((vault) => (
                <div
                  key={vault.id}
                  className="border border-[#2C1B2C] flex flex-col h-[420px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vault.image}
                      alt={vault.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="bg-[#2C1B2C] p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-white text-base font-medium font-poppins leading-7 mb-2">
                        {vault.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs font-normal leading-tight font-poppins mb-4">
                        {vault.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {vault.tags.map((tag) => (
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
                      onClick={handleGotoDetails}
                      className="w-32 h-8 text-center outline outline-1 outline-offset-[-1px] outline-white text-white text-sm font-unbounded"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
