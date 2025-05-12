const Input = ({ placeholder, type, icon, handleChange, onKeyDown }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="border-[1px] border-white/30 rounded-xl p-[0.4rem] pr-[2rem]"
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />

      <div
        className={`absolute w-[1rem] h-[1rem] ${icon}  right-[0.7rem] top-[0.5rem]`}
      ></div>
    </div>
  );
};

export default Input;
