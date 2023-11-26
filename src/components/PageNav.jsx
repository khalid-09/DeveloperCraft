import { NavLink } from 'react-router-dom';
import hamburger from '../assets/icons/hamburger.svg';

const PageNav = () => {
  return (
    <nav className="bg-lightBg md:w-[650px] sm:w-[550px] w-[400px] rounded-full  flex justify-between items-center z-10  mx-auto mt-8 nav py-2 px-2 font-libre text-sm fixed top-2 shadow">
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
      <div className="block md:hidden ml-4">
        <img src={hamburger} alt="hamburger" width={25} height={25} />
      </div>
      <div>
        <button className="bg-white text-black rounded-full px-4 py-2 mr-2 border">
          Toggle
        </button>
      </div>
    </nav>
  );
};

export default PageNav;
