import { motion } from "framer-motion";
import aboutImg from "../assets/Images/about-img.png";
import bookImg from "../assets/Images/book-icon.png";
import codeImg from "../assets/Images/code-icon.png";
import hatImg from "../assets/Images/hat-icon.png";
import rocketImg from "../assets/Images/rocket-icon.png";

import "./About.css";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="hero-container w-screen min-h-screen bg-[#050710] px-4 lg:px-18 py-10 text-white overflow-x-hidden  pb-8 scroll-mt-20"
    >
      <div className="grid grid-rows-[1fr_auto] md:grid-cols-2">
        <div className="flex flex-col gap-4 p-5">
          <h5 className="text-sm md:text-lg text-[#FEDF85] uppercase tracking-widest">
            About me
          </h5>
          <h1 className="text-4xl md:text-5xl font-semibold font-[Dubai]">
            I turn ideas into digital experiences that{" "}
            <span className="text-[#FEDF85]">make an impact.</span>
          </h1>
          <p className="text-base">
            I'm Ayush, a web development student who loves building clean,
            responsive and user-friendly web applications. I enjoy solving
            problems, writing efficient code and exploring new technologies that
            help me grow. <br />
            My goal is simple - keep learning, keep building and create
            experiences that not only look great but also work seamlessly.
          </p>
          <h3 className="text-xl md:text-2xl font-[Satisfy] text-[#E6AE5C] self-end italic ayush font-extralight">
            - Ayush Sharma
          </h3>
        </div>
        <img
          src={aboutImg}
          alt=""
          className="rounded-4xl w-130 m-auto border border-[#4A3B2C]"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-12 md:mt-20">
        {/* Education Card */}
        <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-[2rem] border border-[#4A3B2C]/80 bg-[#0A0D14]/40 backdrop-blur-md hover:bg-[#0A0D14]/70 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-[#E6AE5C]/10 border border-[#E6AE5C]/30 flex items-center justify-center p-3 mb-2 shadow-[0_0_15px_rgba(230,174,92,0.1)] group-hover:shadow-[0_0_20px_rgba(230,174,92,0.2)] transition-shadow">
            <img
              src={hatImg}
              alt="hat"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(230,174,92,0.5)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Education
          </h1>
          <h2 className="text-sm font-medium text-[#E6AE5C]">
            B.Voc in Web Development
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mt-1">
            Focused on building strong foundations in web technologies and
            real-world projects.
          </p>
        </div>

        {/* Focus Card */}
        <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-[2rem] border border-blue-900/50 bg-[#0A0D14]/40 backdrop-blur-md hover:bg-[#0A0D14]/70 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center p-3 mb-2 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow">
            <img
              src={codeImg}
              alt="code"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Focus
          </h1>
          <h2 className="text-sm font-medium text-blue-400">Web Development</h2>
          <p className="text-gray-400 text-sm leading-relaxed mt-1">
            Building responsive, fast and accessible websites with great user
            experience.
          </p>
        </div>

        {/* Currently Learning Card */}
        <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-[2rem] border border-purple-900/50 bg-[#0A0D14]/40 backdrop-blur-md hover:bg-[#0A0D14]/70 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center p-3 mb-2 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-shadow">
            <img
              src={bookImg}
              alt="book"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Currently Learning
          </h1>
          <h2 className="text-sm font-medium text-purple-400">
            React • TypeScript • Tailwind
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mt-1">
            Exploring modern tools and best practices to level up my development
            skills.
          </p>
        </div>

        {/* Approach Card */}
        <div className="flex flex-col gap-3 p-6 sm:p-7 rounded-[2rem] border border-orange-900/50 bg-[#0A0D14]/40 backdrop-blur-md hover:bg-[#0A0D14]/70 transition-all duration-300 group">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center p-3 mb-2 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-shadow">
            <img
              src={rocketImg}
              alt="rocket"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Approach
          </h1>
          <h2 className="text-sm font-medium text-orange-400">
            Learn • Build • Improve
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mt-1">
            I believe in consistency, curiosity and pushing my limits every day.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
