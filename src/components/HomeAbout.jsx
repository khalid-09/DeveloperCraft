import SocialLinks from "./SocialLinks";
import Button from "./Button";

const HomeAbout = () => {
  return (
    <div>
      <p className="text-medium ml-5 font-poppins font-bold text-mainBg transition duration-300 ease-in dark:text-white">
        About
      </p>
      <div className="mb-8 mt-4 flex flex-col gap-4 md:flex-row">
        <div className=" w-full space-x-4 space-y-4 rounded-2xl bg-mainBg px-2 py-4 pb-6 font-libre  transition duration-300 ease-in dark:bg-lightBg md:w-4/6">
          <p className="mt-2 px-4 font-railway text-base font-semibold uppercase text-[#57534e]">
            DeveloperCraft
          </p>
          <h3 className="font-poppins text-xl text-white">
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
    </div>
  );
};

export default HomeAbout;
