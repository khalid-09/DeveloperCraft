const Error = ({ children }) => {
  return (
    <span className="mt-3 block rounded-md  bg-stone-200 px-2 py-1 text-left font-poppins text-sm font-semibold italic text-red-700">
      {children}
    </span>
  );
};

export default Error;
