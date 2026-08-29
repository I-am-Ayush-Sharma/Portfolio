import { motion } from "framer-motion";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import chatbot from "../assets/Images/chatbot.png";

export function ChatbotCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 w-full border border-[#7380ff]/20 rounded-3xl p-6 lg:p-10 relative overflow-hidden bg-[#0a0d16] shadow-[0_0_40px_rgba(115,128,255,0.03)] group"
    >
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7380ff]/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7380ff]/5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="text-[#7380ff] border border-[#7380ff]/30 rounded-lg px-3 py-2 font-mono text-xl md:text-2xl font-bold bg-[#7380ff]/5 shadow-[0_0_15px_rgba(115,128,255,0.2)]">
            02
          </div>
          <span className="text-[#7380ff] tracking-[0.2em] font-medium text-xs md:text-sm uppercase">
            AI Powered Web App
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3 text-white">
          <span>AI Chatbot</span>
          <BiMessageRoundedDots className="w-8 h-8 text-[#7380ff] shrink-0" />
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          An interactive AI chatbot that can understand user queries and
          generate meaningful responses. Built with a modern UI and integrated
          with a powerful AI model.
        </p>

        {/* Key Features */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#7380ff]/50"></div>
            <span className="text-[#7380ff] font-medium tracking-wider text-xs md:text-sm">
              KEY FEATURES
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            {[
              "Real-time AI Conversations",
              "Context-aware Responses",
              "Clean & Modern UI",
              "Easy to Integrate",
              "Responsive Design",
              "Fast & Lightweight",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="w-5 h-5 text-[#7380ff] shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#7380ff]/50"></div>
            <span className="text-[#7380ff] font-medium tracking-wider text-xs md:text-sm">
              TECH STACK
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Tailwind CSS", "Gemini API"].map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-auto pt-4">
          <a
            href="#"
            onClick={() => alert("Live demo is currently unavailable.")}
            className="px-6 py-2.5 rounded-lg border border-[#7380ff] text-[#7380ff] hover:bg-[#7380ff]/10 transition-colors font-medium flex items-center gap-2"
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href="https://github.com/I-am-Ayush-Sharma/Chatbot"
            className="px-6 py-2.5 rounded-lg border border-white/20 hover:bg-white/5 transition-colors font-medium flex items-center gap-2 text-white"
          >
            <FiGithub /> GitHub{" "}
            <FiExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="overflow-visible flex-1 min-h-62.5 md:min-h-100 lg:min-h-0  rounded-2xl  flex items-center justify-center flex-col gap-4 z-10 relative overflow-hidden group/img mt-8 lg:mt-0">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={chatbot}
          alt=""
        />
      </div>
    </motion.div>
  );
}
