import emailjs from "@emailjs/browser";
import { useState } from "react";

export function EmailBox() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_qx40d1c",
        "template_qzi5w5f",
        {
          name: name,
          email: email,
          title: subject,
          message: message,
        },
        {
          publicKey: "hf0aeBaW4-DuLHF6a",
        },
      );

      alert("Message sent successfully! 🚀");

      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col gap-5 bg-[#0A0D18]/60 border border-white/10 rounded-3xl p-7 backdrop-blur-md">
      {/* Dot grid decoration */}
      <div className="absolute top-6 right-6 grid grid-cols-5 gap-1.5 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Form Header */}
      <div className="flex items-center gap-4 mb-1">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Send me a message
          </h3>
          <p className="text-gray-400 text-xs">
            I&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Name + Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <input
            id="contact-name"
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6AE5C]/50 focus:bg-white/8 transition-all duration-200"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            id="contact-email"
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6AE5C]/50 focus:bg-white/8 transition-all duration-200"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <input
          id="contact-subject"
          type="text"
          placeholder="Subject"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6AE5C]/50 focus:bg-white/8 transition-all duration-200"
        />
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Your Message"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E6AE5C]/50 focus:bg-white/8 transition-all duration-200 resize-none"
        />
        <svg
          className="absolute right-3 top-4 w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </div>

      {/* Send Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[Satisfy] text-[#E6AE5C] text-base italic leading-tight text-center sm:text-left">
          I&apos;d love to
          <br />
          hear from you!
        </p>

        <div className="flex flex-col items-end gap-1.5 w-full sm:w-auto">
          <button
            id="contact-send-btn"
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full sm:w-56 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:scale-[1.02] cursor-pointer"}`}
            style={{
              background:
                "linear-gradient(135deg, #c8902a 0%, #7b4fa0 50%, #3b5bdb 100%)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
          </button>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Your information is safe with me.
          </p>
        </div>
      </div>
    </div>
  );
}
