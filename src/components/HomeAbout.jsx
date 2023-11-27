import SocialLinks from './SocialLinks';
import Button from './Button';

const HomeAbout = () => {
  return (
    <>
      <p className="ml-5 font-poppins text-medium font-bold text-mainBg dark:text-white">
        About
      </p>
      <div className="flex gap-4 flex-col md:flex-row mt-4 mb-8">
        <div className=" md:w-4/6 w-full bg-mainBg dark:bg-lightBg rounded-2xl font-libre py-4 space-x-4 space-y-4  pb-6 px-2">
          <p className="text-base px-4 font-railway uppercase mt-2 text-[#57534e] font-semibold">
            DeveloperCraft
          </p>
          <h3 className="font-poppins text-xl text-white opacity-75">
            Hi, I&apos;m Khalid👋
          </h3>
          <p className="font-poppins text-[#a8a29e]">
            An Indian software engineer passionate about crafting app-based
            solutions.
          </p>
          <Button text="learn more" linkTo="/about" />
        </div>
        <SocialLinks />
      </div>
    </>
  );
};

export default HomeAbout;
