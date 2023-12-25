import Button from './Button';

const NotFound = () => {
  return (
    <>
      <div className="mb-36 mt-44 flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-mainBg px-10 pb-14 pt-20 dark:bg-lightBg">
        <h1 className="text-center font-poppins text-7xl font-semibold opacity-40 ">404</h1>
        <p className="text-center font-poppins text-lg tracking-wide opacity-40">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-6">
          <Button text="Go Home" linkTo="/home/" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
