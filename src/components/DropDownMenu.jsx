import { NavLink } from 'react-router-dom';

const DropDownMenu = () => {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-neutral-800/20 z-40 transition duration-300 ease-in"></div>
      <div className="relative z-50 mt-3 transition ease-in duration-300">
        <div className="dark:bg-lightBg bg-mainBg sm:w-[40%] w-[60%] block md:hidden rounded-3xl transition duration-300 ease-in z-50 shadow-md  border-b-2 border-neutral-700">
          <ul className="px-4 py-4 space-y-1 dark:text-white text-[#a8a29e] font-poppins">
            <li className="nav-list py-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/work">Work</NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
