import link from "../assets/icons/link.svg";
import instagram from "../assets/icons/logo-instagram.svg";
import twitter from "../assets/icons/logo-twitter.svg";
import github from "../assets/icons/logo-github.svg";
import linkdein from "../assets/icons/logo-linkdein.svg";

const SocialLinks = () => {
  return (
    <div className="w-full rounded-2xl bg-mainBg px-4 py-4 pb-6 transition duration-300 ease-in dark:bg-lightBg md:w-2/6">
      <div className="ml-2 flex items-center justify-start gap-2">
        <img src={link} alt="links-icon" width={25} height={25} />
        <p className="text-sm  font-semibold uppercase text-[#57534e]">Links</p>
      </div>
      <div className="flex md:flex-col">
        <div className="mt-2 flex md:justify-evenly">
          <div className="">
            <a href="https://github.com/khalid-09" target="_">
              <img src={github} alt="github-icon" className="h-20 w-20 " />
            </a>
          </div>
          <div className="">
            <a href="" target="_">
              <img src={linkdein} alt="linkdein-icon" className="h-20 w-20" />
            </a>
          </div>
        </div>
        <div className=" mt-2 flex rounded-full md:justify-evenly">
          <div className="">
            <a href="" target="_">
              <img src={instagram} alt="instagram-icon" className="h-20 w-20" />
            </a>
          </div>
          <div className="">
            <a href="https://twitter.com/stan8783" target="_">
              <img src={twitter} alt="twitter-icon" className="h-20 w-20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
