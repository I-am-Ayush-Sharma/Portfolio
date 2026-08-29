import { useState, useRef, useEffect } from "react";
import "./Header.css";
import logo from "../assets/Images/Logo.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import download from "../assets/Images/download.png";
import burger from "../assets/Images/Burger.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  function handleClickOutside(event) {
    if (
      !menuRef.current.contains(event.target) &&
      !burgerRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      // const hero = document.getElementById("hero");
      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");
      // const topHero = hero.getBoundingClientRect().top;
      const topAbout = about.getBoundingClientRect().top;
      const topProjects = projects.getBoundingClientRect().top;
      const topContact = contact.getBoundingClientRect().top;

      if (topContact <= 80) {
        setActiveNav("contact");
      } else if (topProjects <= 80) {
        setActiveNav("projects");
      } else if (topAbout <= 80) {
        setActiveNav("about");
      } else {
        setActiveNav("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-5 flex justify-between items-center bg-black/1 backdrop-blur-lg border-b border-white/10">
      <img
        src={burger}
        alt=""
        width="15px"
        className="md:hidden mr-3 sm:mr-10 cursor-pointer"
        onClick={toggleMenu}
        ref={burgerRef}
      />
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } items-center gap-6 text-sm mr-auto flex-col bg-[#323232] absolute px-11 py-2 left-2 top-15 border-2 hidden-ul `}
        onClick={() => setIsMenuOpen(false)}
        ref={menuRef}
      >
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <img src={logo} alt="logo" className="w-10 mr-auto" />
      <ul className="items-center gap-5 lg:gap-12 text-sm hidden md:flex mr-auto navbar">
        <a href="#hero">
          <li
            className={activeNav === "home" ? "active" : ""}
            onClick={() => setActiveNav("home")}
          >
            Home
          </li>{" "}
        </a>
        <a href="#about">
          <li
            className={activeNav === "about" ? "active" : ""}
            onClick={() => setActiveNav("about")}
          >
            About
          </li>{" "}
        </a>
        <a href="#projects">
          <li
            className={activeNav === "projects" ? "active" : ""}
            onClick={() => setActiveNav("projects")}
          >
            Projects
          </li>{" "}
        </a>
        <a href="#contact">
          <li
            className={activeNav === "contact" ? "active" : ""}
            onClick={() => setActiveNav("contact")}
          >
            Contact
          </li>{" "}
        </a>
      </ul>
      <div className="flex gap-1 flex-wrap">
        <a
          href="../public/Ayush.pdf"
          download="Ayush-Sharma-Resume.pdf"
          className="mr-0 sm:mr-5 sm:text-sm rounded-full border px-1 sm:px-4 text-xs flex items-center border-bb"
        >
          <img src={download} alt="Download" className="w-6 sm:w-7 inline" />
          Resume
        </a>
        <a
          href="https://github.com/I-am-Ayush-Sharma"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border p-2 border-bb flex items-center justify-center transition-colors hover:bg-white/10"
        >
          <FaGithub className="w-5 h-5 text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/ayush-sharma-5a7925325/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border p-2 border-bb flex items-center justify-center transition-colors hover:bg-white/10"
        >
          <FaLinkedinIn className="w-5 h-5 text-white" />
        </a>
      </div>
    </header>
  );
}
