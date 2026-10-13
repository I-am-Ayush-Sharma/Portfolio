import { motion } from "framer-motion";
import { IoRestaurantOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import rmsVideo from "../assets/Videos/rms.mp4";

export function RMSCard() {
  return (
    <div
      className="project-card flex w-full flex-col gap-5 rounded-2xl border border-[#EAB354]/40 p-4 relative overflow-hidden bg-[#191B22] shadow-[0_18px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(234,179,84,0.08)] group sm:gap-6 sm:p-6 sm:rounded-3xl lg:flex-row lg:gap-12 lg:p-10"
    >
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAB354]/15 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EAB354]/8 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>

      {/* Text Content */}
      <div className="project-card-content flex-[1.2] flex flex-col z-10">
        {/* Header */}
        <div className="project-card-header flex items-center gap-4 mb-6">
          <div className="text-[#EAB354] border border-[#EAB354]/30 rounded-lg px-3 py-2 font-mono text-xl md:text-2xl font-bold bg-[#EAB354]/5">
            01
          </div>
          <span className="text-[#EAB354] tracking-[0.2em] font-medium text-xs md:text-sm uppercase">
            Full Stack Web App
          </span>
        </div>

        {/* Title */}
        <h2 className="project-card-title text-3xl lg:text-5xl font-bold mb-4 flex items-center gap-3 text-[#F8F5EF]">
          <span className="leading-tight">
            Restaurant <br className="hidden lg:block" /> Management{" "}
            <br className="hidden lg:block" /> System
          </span>
          <IoRestaurantOutline className="w-8 h-8 text-[#EAB354] lg:mt-auto mb-2 shrink-0" />
        </h2>

        {/* Description */}
        <p className="project-card-description text-[#C8CBD3] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
          A digital solution for restaurants to manage menu, orders, tables and
          customers. Built with a focus on smooth ordering experience and
          efficient management workflow.
        </p>

        {/* Key Features */}
        <div className="project-card-section project-card-features mb-8">
          <div className="project-card-section-heading flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#EAB354]/50"></div>
            <span className="text-[#EAB354] font-medium tracking-wider text-xs md:text-sm">
              KEY FEATURES
            </span>
          </div>
          <div className="project-card-grid grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#E3E5E9]">
            {[
              "Menu & Category Management",
              "Admin / Staff / Chef Dashboard",
              "Add to Cart & Order System",
              "Order Tracking & Status",
              "GST & Coupon Management",
              "SQLite Database Integration",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <IoCheckmarkCircleOutline className="w-5 h-5 text-[#EAB354] shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="project-card-section project-card-tech mb-8">
          <div className="project-card-section-heading flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#EAB354]/50"></div>
            <span className="text-[#EAB354] font-medium tracking-wider text-xs md:text-sm">
              TECH STACK
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Flask", "SQLite", "HTML", "CSS", "JavaScript"].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#292B31] border border-white/15 text-sm font-medium text-[#F1EFEA] hover:bg-[#34363D] transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="project-card-actions flex flex-wrap gap-4 mt-auto pt-4">
          <a
            href="#"
            onClick={() => alert("Live demo is currently unavailable.")}
            className="px-6 py-2.5 rounded-lg border border-[#EAB354] text-[#EAB354] hover:bg-[#EAB354]/10 transition-colors font-medium flex items-center gap-2"
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href="https://github.com/I-am-Ayush-Sharma/Smart-Restaurant-Kiosk-Management-System"
            className="px-6 py-2.5 rounded-lg border border-white/25 hover:bg-white/10 transition-colors font-medium flex items-center gap-2 text-[#F1EFEA]"
          >
            <FiGithub /> GitHub{" "}
            <FiExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="project-card-preview relative z-10 mt-0 flex min-h-[180px] w-full flex-[0.8] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl sm:min-h-[240px] lg:mt-0 lg:min-h-0 lg:rounded-2xl group/img">
        <motion.video
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={rmsVideo}
          autoPlay
          loop
          muted
          playsInline
          className="project-preview h-auto max-h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
