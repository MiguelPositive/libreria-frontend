import { useState } from "react";

const ShowBooks = ({ label, text }) => {
  let temp = "";

  if (text === true) {
    temp = "SI";
  } else if (text === false) {
    temp = "NO";
  }

  return (
    <>
      <div
        id="container-author"
        className="flex justify-between mb-[0.2rem] transition-all duration-100  p-[0.5rem] hover:border-white/80 hover:border-[1px] rounded-full "
      >
        <label htmlFor="" className="mr-[1rem]">
          {label}:
        </label>
        <label htmlFor="" className="text-black">
          {text}
          <label
            htmlFor=""
            className={
              temp == "NO" ? "font-bold border-b-4 border-black/50" : ""
            }
          >
            {temp}
          </label>
        </label>
      </div>
    </>
  );
};

export default ShowBooks;
