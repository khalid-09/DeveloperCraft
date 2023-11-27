import { NavLink } from 'react-router-dom';
import hamburger from '../assets/icons/hamburger.svg';

import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import ToggleButton from './ToggleButton';
import { useDark } from '../hooks/useDark';

const PageNav = () => {
  const [open, setIsOpen] = useState(false);
  const { isDark, handleClick } = useDark();

  const handleShow = function handleShow() {
    setIsOpen(open => !open);
  };

  return (
    <header className="fixed top-1">
      <nav className="dark:bg-lightBg bg-mainBg md:w-[650px] sm:w-[550px] w-[400px]  rounded-full flex justify-between items-center z-10  mx-auto mt-8 nav py-1 px-1 font-libre text-sm transition ease-in duration-300">
        <ul className="gap-3 text-[#d6d3d1] rounded-full  hidden md:flex">
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
          className="block md:hidden rounded-3xl px-5 py-2 hover:bg-[#78716c] z-50"
          onClick={handleShow}
        >
          <img
            src={hamburger}
            alt="hamburger"
            width={20}
            height={20}
            className="z-50"
          />
        </div>
        <ToggleButton isDark={isDark} onHandleClick={handleClick} />
      </nav>
      {open && <DropDownMenu />}
    </header>
  );
};

export default PageNav;
