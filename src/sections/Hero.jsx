import "./Hero.css";
import hero from "../assets/Images/hero.png";
import { Header } from "../components/Header";

export function Hero() {
  return (
    <div className="hero-container w-screen h-screen bg-[radial-gradient(circle_at_75%_50%,rgba(4,3,6,0.68),rgb(20,20,20)_60%)] pl-4 pr-4 lg:px-15 text-white overflow-x-hidden">
      <Header />
      <main className=" w-100% grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <img src={hero} alt="" className="md:order-2" />
        <div className="md-order-1 flex flex-col gap-8 md:mt-10">
          <div className=" md:mt-0 flex flex-col gap-2">
            <h5>Hi, I'm Ayush 👋</h5>
            <h1 className="text-6xl lg:text-8xl">
              Crafting Digital <br /> Experiences <br /> that{" "}
              <span className="font-[Carattere] ml-1 text-[4rem] md:text-[5.5rem] matter">
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
              href="#"
              className="border rounded-full border-[#FFB700] px-5 py-2.5 work"
            >
              View My Work →
            </a>
            <a href="#" className="border rounded-full px-5 py-2.5 connect">
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
        </div>
      </main>
    </div>
  );
}
