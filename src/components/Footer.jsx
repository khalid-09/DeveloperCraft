import githubIcon from "../assets/icons/icon-github.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-8 mt-20 flex w-full items-center justify-between rounded-full bg-mainBg px-6 py-3 font-poppins text-[#57534e] transition duration-300 ease-in dark:bg-lightBg">
      <a
        href="https://github.com/khalid-09/DeveloperCraft"
        className="flex items-center"
      >
        Source Code | <img src={githubIcon} className="ml-2" />
      </a>
      <p>
        <a href="/">DeveloperCraft</a> &copy; {year}
      </p>
    </footer>
  );
};

export default Footer;
