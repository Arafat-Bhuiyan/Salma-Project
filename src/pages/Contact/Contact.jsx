import { useState } from "react";
import bgImg from "@/assets/images/bgImg.png";
import { ScrollRestoration } from "react-router-dom";
import { useSendContactMessageMutation } from "@/Redux/Api/authApi";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendContactMessage, { isLoading }] = useSendContactMessageMutation();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // prepare the data structure as backend expects
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        body: formData.message, // message → body
      };

      // API call
      await sendContactMessage(payload).unwrap();

      // Optional success feedback
      toast.success("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen text-white px-6 text-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ScrollRestoration />
      {/* Content */}
      <div className="">
        <h1 className="text-[#FF39B0] text-5xl font-semibold font-unbounded pt-20 pb-20">
          Be part of the commons
        </h1>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto text-black space-y-10"
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input
              type="text"
              name="name"
              placeholder="Your Name? *"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-[#D9D9D9] placeholder-[#727272] font-unbounded outline-none placeholder:text-xl text-base font-normal"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email? *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-[#D9D9D9] placeholder-[#727272] font-unbounded outline-none placeholder:text-xl text-base font-normal"
              required
            />
          </div>

          {/* Subject */}
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[#D9D9D9] text-[#727272] font-unbounded outline-none placeholder:text-xl text-base font-normal"
            required
          >
            <option value="">Select Subject</option>
            <option value="dispatch">Submit a dispatch</option>
            <option value="database">Suggest database entries</option>
            <option value="support">Support our Work</option>
            <option value="other">Other</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message here"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-6 py-4 bg-[#D9D9D9] placeholder-[#727272] font-unbounded outline-none placeholder:text-xl text-base font-normal"
          ></textarea>

          {/* Submit Button (Right-aligned) */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="text-white text-lg font-medium font-unbounded px-16 py-2.5 outline outline-2 outline-offset-[-1px] outline-[#C12E83] hover:bg-[#FF80EB] hover:outline-none active:bg-[#C12E83] active:outline-none"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
