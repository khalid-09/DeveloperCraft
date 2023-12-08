import { useState } from 'react';
import { useDark } from '../hooks/useDark';
import { NavLink } from 'react-router-dom';

import DropDownMenu from './DropDownMenu';
import ToggleButton from './ToggleButton';
import hamburger from '../assets/icons/hamburger.svg';

const PageNav = () => {
  const [open, setIsOpen] = useState(false);
  const { isDark, handleClick } = useDark();

  function handleShow() {
    setIsOpen((open) => !open);
  }

  return (
    <header className="fixed top-1 ">
      <div className="bg-bgMain/0 fixed -inset-2  z-10 mx-auto h-9 w-[380px] backdrop-blur-sm sm:w-[550px] md:w-[680px]"></div>
      <nav className=" z-10 mx-auto mt-6 flex  w-[380px] items-center justify-between rounded-full border  border-neutral-700 bg-mainBg px-1 py-1 font-libre text-sm transition duration-300 ease-in dark:bg-lightBg sm:w-[550px] md:w-[680px] ">
        <ul className="hidden rounded-full  text-[#d6d3d1] md:flex">
          <li className="nav-list">
            <NavLink to="/home">Home</NavLink>
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
          className="z-50 block rounded-3xl px-5 py-2 transition-all duration-300 ease-in hover:bg-[#78716c] md:hidden"
          onClick={handleShow}
        >
          <img src={hamburger} alt="hamburger" width={20} height={20} className="z-50" />
        </div>
        <ToggleButton isDark={isDark} onHandleClick={handleClick} />
      </nav>
      {open && <DropDownMenu onHandleShow={handleShow} />}
    </header>
  );
};

export default PageNav;
