import { Link } from "react-router-dom";

const Button = ({ text, linkTo }) => {
  return (
    <button className="rounded-full bg-white  px-6 py-3 font-poppins text-sm font-semibold uppercase text-mainBg transition duration-300 ease-in hover:scale-105 hover:opacity-90 dark:bg-mainBg dark:text-white">
      <Link to={linkTo}> {text} &rarr;</Link>
    </button>
  );
};

export default Button;
