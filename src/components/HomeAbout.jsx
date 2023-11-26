import { Link } from 'react-router-dom';
import link from '../assets/icons/link.svg';
import instagram from '../assets/icons/logo-instagram.svg';
import twitter from '../assets/icons/logo-twitter.svg';
import github from '../assets/icons/logo-github.svg';
import linkdein from '../assets/icons/logo-linkdein.svg';

const HomeAbout = () => {
  return (
    <div className="">
      <p className="ml-5 font-poppins text-sm font-semibold ">About</p>
      <div className="flex gap-4 flex-col md:flex-row mt-4 mb-8">
        <div className=" md:w-4/6 w-full bg-lightBg rounded-2xl font-libre py-4 space-x-4 space-y-4  pb-6 px-2">
          <p className="text-base px-4 font-railway uppercase mt-2 text-[#57534e]">
            InnovateHub
          </p>
          <h3 className="font-poppins text-xl text-white opacity-75">
            Hi, I&apos;m Khalid
          </h3>
          <p className="font-poppins text-[#a8a29e]">
            A software developer from India interested in building apps as
            solutions.
          </p>
          <button className="bg-mainBg mb-8 rounded-full px-6 py-3 text-white font-semibold uppercase text-sm hover:scale-105 transition font-poppins">
            <Link to="/about"> Learn More &rarr;</Link>
          </button>
        </div>
        <div className="md:w-2/6 w-full bg-lightBg rounded-2xl pb-6 px-4 py-4 ">
          <div className="flex gap-2 items-center justify-start ml-2">
            <img src={link} alt="hamburger" width={25} height={25} />
            <p className="uppercase  text-[#57534e] text-sm">Links</p>
          </div>
          <div className="flex md:flex-col">
            <div className="rounded-full flex md:justify-evenly mt-2">
              <div className="">
                <a href="" target="_">
                  <img src={github} alt="hamburger" className="h-20 w-20" />
                </a>
              </div>
              <div className="">
                <a href="" target="_">
                  <img src={linkdein} alt="hamburger" className="h-20 w-20" />
                </a>
              </div>
            </div>
            <div className=" rounded-full flex md:justify-evenly mt-2">
              <div className="">
                <a href="" target="_">
                  <img src={instagram} alt="hamburger" className="h-20 w-20" />
                </a>
              </div>
              <div className="">
                <a href="https://twitter.com/stan8783" target="_">
                  <img src={twitter} alt="hamburger" className="h-20 w-20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
