import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';

function ToggleButton({ isDark, onHandleClick }) {
  return (
    <button
      onClick={onHandleClick}
      className="flex rounded-full bg-[#57534e] justify-between transition-all duration-300 hover:scale-105 border outline-none border-transparent hover:border-neutal-700/50 "
    >
      {!isDark ? (
        <div className="justify-center items-center flex  rounded-full bg-black p-1 m-1 transition-all duration-300 shadow-sm hover:scale-105 h-7 w-7">
          <img src={sun} />
        </div>
      ) : (
        <div className="justify-center items-center flex  rounded-full bg-black p-1 m-1 transition-all duration-300 shadow-sm hover:scale-105 h-7 w-7">
          <img src={moon} />
        </div>
      )}
    </button>
  );
}

export default ToggleButton;
