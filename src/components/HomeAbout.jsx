import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const HomeAbout = () => {
  return (
    <>
      <p className="ml-5 font-poppins text-sm font-semibold ">About</p>
      <div className="flex gap-4 flex-col md:flex-row mt-4 mb-8">
        <div className=" md:w-4/6 w-full bg-lightBg rounded-2xl font-libre py-4 space-x-4 space-y-4  pb-6 px-2">
          <p className="text-base px-4 font-railway uppercase mt-2 text-[#57534e] font-semibold">
            DeveloperCraft
          </p>
          <h3 className="font-poppins text-xl text-white opacity-75">
            Hi, I&apos;m Khalid
          </h3>
          <p className="font-poppins text-[#a8a29e]">
            An Indian software engineer passionate about crafting app-based
            solutions.
          </p>
          <button className="bg-mainBg mb-8 rounded-full px-6 py-3 text-white font-semibold uppercase text-sm hover:scale-105 transition font-poppins">
            <Link to="/about"> Learn More &rarr;</Link>
          </button>
        </div>
        <SocialLinks />
      </div>
    </>
  );
};

export default HomeAbout;
