import { motion } from "framer-motion";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import chatbot from "../assets/Images/chatbot.png";

export function ChatbotCard() {
  return (
    <div
      className="project-card flex w-full flex-col gap-5 rounded-2xl border border-[#8994FF]/40 p-4 relative overflow-hidden bg-[#181D2D] shadow-[0_18px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(115,128,255,0.1)] group sm:gap-6 sm:p-6 sm:rounded-3xl lg:flex-row-reverse lg:gap-12 lg:p-10"
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7380ff]/18 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7380ff]/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>

      {/* Text Content */}
      <div className="project-card-content flex-[1.2] flex flex-col z-10">
        {/* Header */}
        <div className="project-card-header flex items-center gap-4 mb-6">
          <div className="text-[#AAB2FF] border border-[#8994FF]/45 rounded-lg px-3 py-2 font-mono text-xl md:text-2xl font-bold bg-[#7380ff]/10 shadow-[0_0_15px_rgba(115,128,255,0.2)]">
            02
          </div>
          <span className="text-[#AAB2FF] tracking-[0.2em] font-medium text-xs md:text-sm uppercase">
            AI Powered Web App
          </span>
        </div>

        {/* Title */}
        <h2 className="project-card-title text-3xl lg:text-5xl font-bold mb-4 flex items-center gap-3 text-[#F3F4FF]">
          <span>AI Chatbot</span>
          <BiMessageRoundedDots className="w-8 h-8 text-[#AAB2FF] shrink-0" />
        </h2>

        {/* Description */}
        <p className="project-card-description text-[#C8CDDF] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          An interactive AI chatbot that can understand user queries and
          generate meaningful responses. Built with a modern UI and integrated
          with a powerful AI model.
        </p>

        {/* Key Features */}
        <div className="project-card-section project-card-features mb-8">
          <div className="project-card-section-heading flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#8994FF]/70"></div>
            <span className="text-[#AAB2FF] font-medium tracking-wider text-xs md:text-sm">
              KEY FEATURES
            </span>
          </div>
          <div className="project-card-grid grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#E0E3F0]">
            {[
              "Real-time AI Conversations",
              "Context-aware Responses",
              "Clean & Modern UI",
              "Easy to Integrate",
              "Responsive Design",
              "Fast & Lightweight",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="w-5 h-5 text-[#AAB2FF] shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="project-card-section project-card-tech mb-8">
          <div className="project-card-section-heading flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#8994FF]/70"></div>
            <span className="text-[#AAB2FF] font-medium tracking-wider text-xs md:text-sm">
              TECH STACK
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind CSS", "Gemini API"].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#292E40] border border-[#AAB2FF]/20 text-sm font-medium text-[#F0F1FF] hover:bg-[#343A50] transition-colors"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="project-card-actions flex flex-wrap gap-4 mt-auto pt-4">
          <a
            href="#"
            onClick={() => alert("Live demo is currently unavailable.")}
            className="px-6 py-2.5 rounded-lg border border-[#8994FF] text-[#B6BDFF] hover:bg-[#7380ff]/15 transition-colors font-medium flex items-center gap-2"
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href="https://github.com/I-am-Ayush-Sharma/Chatbot"
            className="px-6 py-2.5 rounded-lg border border-white/25 hover:bg-white/10 transition-colors font-medium flex items-center gap-2 text-[#F0F1FF]"
          >
            <FiGithub /> GitHub{" "}
            <FiExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="project-card-preview relative z-10 mt-0 flex min-h-[180px] w-full flex-[0.8] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl sm:min-h-[240px] lg:mt-0 lg:min-h-0 lg:rounded-2xl group/img">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={chatbot}
          alt="AI chatbot interface preview"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
}
