import SocialLinks from './SocialLinks';
import Button from './Button';
import { memo } from 'react';

const HomeAbout = memo(function HomeAbout() {
  return (
    <>
      <p className="text-medium ml-5 font-poppins font-bold text-mainBg transition duration-300 ease-in dark:text-white">
        About
      </p>
      <div className="mb-8 mt-2 flex flex-col gap-3 md:flex-row md:gap-4">
        <div className=" w-full space-x-4 space-y-4 rounded-2xl border  border-stone-700 border-opacity-30 bg-mainBg px-2 py-4 font-libre transition duration-300 ease-in dark:bg-lightBg md:w-4/6">
          <p className="mt-2 px-4 font-railway text-sm font-semibold uppercase tracking-wide text-[#57534e]">
            DeveloperCraft
          </p>
          <h3 className="font-poppins text-xl text-stone-200">Hi, I&apos;m Khalid👋</h3>
          <p className="font-poppins text-[#a8a29e]">
            An Indian software engineer passionate about crafting app-based solutions.
          </p>
          <Button text="learn more" linkTo="/about" />
        </div>
        <SocialLinks />
      </div>
    </>
  );
});

export default HomeAbout;
