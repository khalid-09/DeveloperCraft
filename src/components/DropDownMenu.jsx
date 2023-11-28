import { NavLink } from "react-router-dom";

const DropDownMenu = ({ onHandleShow }) => {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-neutral-800/20 backdrop-blur-sm transition duration-300 ease-in"></div>
      <div className="relative z-50 mt-3 transition duration-300 ease-in">
        <div className="z-50 block w-[60%] rounded-3xl border-b-2 border-neutral-700 bg-mainBg shadow-md transition duration-300 ease-in dark:bg-lightBg  sm:w-[40%] md:hidden">
          <ul className="space-y-1 px-4 py-4 font-poppins text-[#a8a29e] dark:text-white">
            <li className="nav-list py-3">
              <NavLink to="/" onClick={onHandleShow}>
                Home
              </NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/about" onClick={onHandleShow}>
                About
              </NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/work" onClick={onHandleShow}>
                Work
              </NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/blog" onClick={onHandleShow}>
                Blog
              </NavLink>
            </li>
            <li className="nav-list py-3">
              <NavLink to="/contact" onClick={onHandleShow}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
