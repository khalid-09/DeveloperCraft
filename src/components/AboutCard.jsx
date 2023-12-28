import { Link } from 'react-router-dom';

const AboutCard = () => {
  return (
    <>
      <div className="mb-4 flex w-full flex-col items-center justify-center gap-5 rounded-3xl border border-stone-700 border-opacity-30 bg-mainBg px-10 pb-14 pt-20 dark:bg-lightBg">
        <h3 className="text-center font-poppins text-xl font-semibold text-stone-400 ">Hi, I&apos;m Khalid👋</h3>
        <p className="text-center font-libre text-3xl font-semibold text-stone-200">
          Passionate about building{' '}
          <Link to="/work" className=" underline">
            Apps
          </Link>
          .
        </p>
        <p className="text-center font-poppins text-xl text-stone-400 ">
          a <span className="font-semibold text-stone-200">software engineer</span> based in India.
        </p>
        <p className="text-center font-poppins text-sm tracking-wide text-stone-400">
          Dedicated to crafting innovative solutions through software development that effectively solve problems.
        </p>
      </div>
    </>
  );
};

export default AboutCard;
