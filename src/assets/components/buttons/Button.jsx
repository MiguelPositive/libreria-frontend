const Button = ({ text, color, onClick }) => {
  return (
    <>
      <div
        className={`rounded-xl p-[0.5rem] ${color} text-center p-[0.5rem] transition-all duration-100 shadow-xl shadow-black/30 hover:scale-110 hover:cursor-pointer hover:shadow-lg text-shadow`}
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

export default Button;
