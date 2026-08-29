import "./Hero.css";
import { motion } from "framer-motion";
import hero from "../assets/Images/hero.png";
import { Header } from "../components/Header";
import { TechStack } from "../components/TechStack";

export function Hero() {
  return (
    <div
      id="hero"
      className="hero-container w-screen min-h-screen bg-[radial-gradient(circle_at_75%_50%,rgba(4,3,6,0.68),rgb(20,20,20)_60%)] pt-24 px-4 lg:px-15 text-white overflow-x-hidden flex flex-col justify-between pb-8"
    >
      <Header />
      <main className="w-100% grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="md:order-2"
        >
          <motion.img
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            src={hero}
            alt=""
            className="md:order-2"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md-order-1 flex flex-col gap-8 md:mt-10"
        >
          <div className=" md:mt-0 flex flex-col gap-2">
            <h5>Hi, I'm Ayush 👋</h5>
            <h1 className="text-5xl lg:text-6xl xl:text-8xl">
              Crafting Digital <br /> Experiences <br /> that{" "}
              <span className="font-[Carattere] ml-1 text-5xl lg:text-6xl xl:text-8xl matter">
                Matter.
              </span>
            </h1>
            <p className="text-2xl">
              I design and build modern, responsive web applications with clean
              code and thoughtful UI.
            </p>
          </div>
          <div className="flex gap-8 justify-center md:justify-normal">
            <a
              href="#projects"
              className="border rounded-full border-[#FFB700] px-5 py-2.5 work"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="border rounded-full px-5 py-2.5 connect"
            >
              Let's Connect
            </a>
          </div>
          <div className="flex justify-evenly items-center gap-12 self-center md:self-start">
            <span className="text-center">
              <h2 className="text-3xl">5+</h2>
              <p className="text-xs">Projects Built</p>
            </span>
            <span className="w-px bg-white h-15"> </span>
            <span className="text-center">
              <h2 className="text-3xl">2+</h2>
              <p className="text-xs">Years Learning</p>
            </span>
            <span className="w-px bg-white h-15"> </span>
            <span className="text-center">
              <h2 className="text-3xl">∞</h2>
              <p className="text-xs">Curiosity</p>
            </span>
          </div>
        </motion.div>
      </main>

      <TechStack />
    </div>
  );
}
