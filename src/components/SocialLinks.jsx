import link from '../assets/icons/link.svg';
import instagram from '../assets/icons/logo-instagram.svg';
import twitter from '../assets/icons/logo-twitter.svg';
import github from '../assets/icons/logo-github.svg';
import linkdein from '../assets/icons/logo-linkdein.svg';

const SocialLinks = ({ isContact = false }) => {
  return (
    <div
      className={`w-full rounded-2xl  border border-stone-700 border-opacity-30 bg-mainBg p-4 transition  duration-300 ease-in dark:bg-lightBg ${
        isContact ? 'md:w-full' : 'md:w-2/6'
      }`}
    >
      <div className="ml-3 flex items-center justify-start gap-2">
        <img src={link} alt="links-icon" width={25} height={25} />
        <p className="text-sm  font-semibold uppercase tracking-wide text-[#57534e]">Links</p>
      </div>
      <div className={`ml-2 flex gap-2  ${isContact ? 'ml-2 md:gap-4' : 'md:ml-0 md:flex-col  md:gap-0'}`}>
        <div className={`mt-2 flex gap-2  ${isContact ? 'md:gap-4' : 'md:justify-evenly md:gap-0'}`}>
          <div className="">
            <a href="https://github.com/khalid-09" target="_blank" rel="noreferrer noopener">
              <img src={github} alt="github-icon" height={70} width={70} />
            </a>
          </div>
          <div className="">
            <a href="https://www.linkedin.com/in/khalid-ansari-917357230/" target="_blank" rel="noreferrer noopener">
              <img src={linkdein} alt="linkdein-icon" height={70} width={70} />
            </a>
          </div>
        </div>
        <div className={`mt-2 flex gap-2  ${isContact ? 'md:gap-4' : 'md:justify-evenly md:gap-0'}`}>
          <div>
            <a href="" target="_blank" rel="noreferrer noopener">
              <img src={instagram} alt="instagram-icon" height={70} width={70} />
            </a>
          </div>
          <div className="">
            <a href="https://twitter.com/stan8783" target="_blank" rel="noreferrer noopener">
              <img src={twitter} alt="twitter-icon" height={70} width={70} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
