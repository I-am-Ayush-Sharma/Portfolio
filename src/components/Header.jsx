import { useState, useRef, useEffect } from "react";
import './Header.css';
import logo from "../assets/Logo.png";
import github from "../assets/Github.png";
import linkedin from "../assets/Linkedin.png";
import download from "../assets/download.png";
import burger from "../assets/Burger.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="w-100% p-5 flex justify-between items-center">
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
        } items-center gap-6 text-sm mr-auto flex-col bg-gray-600 absolute px-11 py-2 left-2 top-15 cursor-pointer border-2 hidden-ul `}
        onClick={() => setIsMenuOpen(false)}
        ref={menuRef}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <img src={logo} alt="logo" className="w-10 mr-auto" />
      <ul className="items-center gap-6 text-sm hidden md:flex mr-auto">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-1 flex-wrap">
        <a href="#" className="mr-0 sm:mr-5 sm:text-sm rounded-full border px-1 text-xs flex items-center">
          <img src={download} alt="Download" className="w-6 sm:w-7 inline" />
          Resume
        </a>
        <img src={github} alt="GitHub" className=" rounded-full border p-2" />
        <img src={linkedin} alt="LinkedIn" className=" rounded-full border p-2"/>
      </div>
    </header>
  );
}
