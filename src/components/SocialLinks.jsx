import link from '../assets/icons/link.svg';
import instagram from '../assets/icons/logo-instagram.svg';
import twitter from '../assets/icons/logo-twitter.svg';
import github from '../assets/icons/logo-github.svg';
import linkdein from '../assets/icons/logo-linkdein.svg';

const SocialLinks = () => {
  return (
    <div className="md:w-2/6 w-full bg-lightBg rounded-2xl pb-6 px-4 py-4 ">
      <div className="flex gap-2 items-center justify-start ml-2">
        <img src={link} alt="links-icon" width={25} height={25} />
        <p className="uppercase  text-[#57534e] text-sm font-semibold">Links</p>
      </div>
      <div className="flex md:flex-col">
        <div className="rounded-full flex md:justify-evenly mt-2">
          <div className="">
            <a href="" target="_">
              <img src={github} alt="github-icon" className="h-20 w-20" />
            </a>
          </div>
          <div className="">
            <a href="" target="_">
              <img src={linkdein} alt="linkdein-icon" className="h-20 w-20" />
            </a>
          </div>
        </div>
        <div className=" rounded-full flex md:justify-evenly mt-2">
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
