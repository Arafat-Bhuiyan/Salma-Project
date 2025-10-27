import { useState } from "react";
import { toast } from "react-toastify";
import { Copy } from "lucide-react";
import shareIcon from "@/assets/icons/share.svg";

export function ShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUrl = window.location.href;

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // ✅ Secure context (HTTPS or localhost)
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          toast.success("Link copied to clipboard!");
          setIsModalOpen(false);
        })
        .catch((err) => {
          console.error("Clipboard error:", err);
          fallbackCopy();
        });
    } else {
      fallbackCopy();
    }
  };

  // fallback function
  const fallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = currentUrl;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Link copied to clipboard!");
      setIsModalOpen(false);
    } catch (err) {
      console.error("Fallback copy failed:", err);
      toast.error("Failed to copy link.");
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      {/* Share Button */}
      <div className="w-28 h-12 px-3.5 flex items-center bg-[#FF80EB] active:bg-[#C12E83]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-start gap-1 text-white text-base font-normal font-unbounded"
        >
          <img src={shareIcon} alt="Share" className="w-5" />
          Share
        </button>
      </div>

      {/* Modal (Custom Dialog) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1A0E1E] text-white border border-[#FF80EB] rounded-lg p-6 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-white text-xl hover:text-[#FF80EB]"
            >
              &times;
            </button>

            <h2 className="text-lg font-unbounded mb-4">Share this content</h2>
            <p className="text-sm text-gray-400 mb-2 font-poppins">
              Share this link with others:
            </p>

            {/* URL Input + Copy Button */}
            <div className="flex items-center space-x-2 p-2 bg-[#2C1B2C] rounded-md border border-[#FF80EB]">
              <input
                type="text"
                value={currentUrl}
                readOnly
                className="w-full bg-transparent text-white focus:outline-none font-poppins"
              />
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                title="Copy link"
              >
                <Copy className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShareButton;
