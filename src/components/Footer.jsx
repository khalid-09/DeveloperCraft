import githubIcon from '../assets/icons/icon-github.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex justify-between items-center bg-lightBg text-[#57534e] rounded-full mt-20 mb-8 font-poppins px-6 py-3">
      <p className="flex items-center">
        Source Code | <img src={githubIcon} className="ml-2" />
      </p>
      <p>DeveloperCraft &copy; {year}</p>
    </footer>
  );
};

export default Footer;
