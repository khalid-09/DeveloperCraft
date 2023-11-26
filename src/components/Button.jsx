import { Link } from 'react-router-dom';

const Button = ({ text, linkTo }) => {
  return (
    <button className="bg-mainBg  rounded-full px-6 py-3 text-white font-semibold uppercase text-sm hover:scale-105 hover:opacity-90 transition font-poppins">
      <Link to={linkTo}> {text} &rarr;</Link>
    </button>
  );
};

export default Button;
