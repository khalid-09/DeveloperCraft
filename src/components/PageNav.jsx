import { NavLink } from 'react-router-dom';
import hamburger from '../assets/icons/hamburger.svg';
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';
import { useEffect, useState } from 'react';

const PageNav = () => {
  const [isDark, setIsDark] = useState(function () {
    const storedValue = localStorage.getItem('isDark');
    return JSON.parse(storedValue) || false;
  });

  const handleClick = function handleClick() {
    setIsDark(isDark => !isDark);
  };

  useEffect(
    function () {
      localStorage.setItem('isDark', JSON.stringify(isDark));
    },
    [isDark]
  );

  useEffect(() => {
    const body = document.documentElement;
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed top-1">
      <nav className="dark:bg-lightBg bg-mainBg md:w-[650px] sm:w-[550px] w-[400px]  rounded-full flex justify-between items-center z-10  mx-auto mt-8 nav py-1 px-1 font-libre text-sm ">
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
          <button
            onClick={handleClick}
            className="flex rounded-full bg-[#57534e] justify-between transition-all duration-300 hover:scale-105 border outline-none border-transparent hover:border-neutal-700/50 "
          >
            {!isDark ? (
              <div className="justify-center items-center flex  rounded-full bg-black p-1 m-1 transition-all duration-300 shadow-sm hover:scale-105 h-7 w-7">
                <img src={sun} />
              </div>
            ) : (
              <div className="justify-center items-center flex  rounded-full bg-black p-1 m-1 transition-all duration-300 shadow-sm hover:scale-105 h-7 w-7">
                <img src={moon} />
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default PageNav;
