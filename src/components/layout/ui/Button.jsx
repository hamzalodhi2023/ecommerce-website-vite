// eslint-disable-next-line react/prop-types
function Button({ data, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`#5471c7 {} flex items-center justify-center bg-[#6354e9] px-6 py-2 text-center text-white outline-none ${className}`}
    >
      {data}
    </button>
  );
}

export default Button;
