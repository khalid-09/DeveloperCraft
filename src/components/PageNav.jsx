import { NavLink } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import cross from "../assets/icons/cross.svg";

import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import ToggleButton from "./ToggleButton";
import { useDark } from "../hooks/useDark";

const PageNav = () => {
  const [open, setIsOpen] = useState(false);
  const { isDark, handleClick } = useDark();

  function handleShow() {
    setIsOpen((open) => !open);
  }

  return (
    <header className="fixed top-1">
      <div className="bg-bgMain/0 fixed inset-0 z-10 mx-auto h-7 w-[400px] backdrop-blur-sm sm:w-[550px] md:w-[650px]"></div>
      <nav className="nav z-10 mx-auto mt-6 flex  w-[400px] items-center justify-between rounded-full border-b-2  border-neutral-700 bg-mainBg px-1 py-1 font-libre text-sm transition duration-300 ease-in dark:bg-lightBg sm:w-[550px] md:w-[650px]">
        <ul className="hidden gap-3 rounded-full  text-[#d6d3d1] md:flex">
          <li className="nav-list">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/work">Work</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div
          className="z-50 block rounded-3xl px-5 py-2 transition duration-300 ease-in hover:bg-[#78716c] md:hidden"
          onClick={handleShow}
        >
          {!open ? (
            <img
              src={hamburger}
              alt="hamburger"
              width={20}
              height={20}
              className="z-50"
            />
          ) : (
            <img
              src={cross}
              alt="cross"
              width={18}
              height={17}
              className="z-50"
            />
          )}
        </div>
        <ToggleButton isDark={isDark} onHandleClick={handleClick} />
      </nav>
      {open && <DropDownMenu onHandleShow={handleShow} />}
    </header>
  );
};

export default PageNav;
