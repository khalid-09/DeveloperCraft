import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';

const ToggleButton = ({ isDark, onHandleClick }) => {
  return (
    <button
      onClick={onHandleClick}
      className="hover:border-neutal-700/50 flex justify-between rounded-full border border-transparent bg-[#57534e] outline-none transition-all duration-300 hover:scale-105 "
    >
      {isDark ? (
        <div className="m-1 flex h-7  w-7 items-center justify-center rounded-full bg-black p-1 shadow-sm transition-all duration-300 hover:scale-105">
          <img src={sun} height={15} width={15} alt="sun-icon" />
        </div>
      ) : (
        <div className="m-1 flex h-7 w-7 items-center justify-center rounded-full bg-black p-1 shadow-sm transition-all duration-300 hover:scale-105">
          <img src={moon} height={15} width={15} alt="moon-icon" />
        </div>
      )}
    </button>
  );
};

export default ToggleButton;
