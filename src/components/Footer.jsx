import githubIcon from '../assets/icons/icon-github.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-6 mt-20 flex w-full items-center justify-between rounded-full border border-stone-700 border-opacity-30 bg-mainBg px-4 py-3 font-poppins text-sm text-[#57534e] transition duration-300 ease-in dark:bg-lightBg md:px-6 md:text-base ">
      <a href="https://github.com/khalid-09/DeveloperCraft" className="flex items-center">
        Source Code | <img src={githubIcon} className="ml-2" />
      </a>
      <p>
        <a href="/">DeveloperCraft</a> &copy; {year}
      </p>
    </footer>
  );
};

export default Footer;
