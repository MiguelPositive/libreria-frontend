import Button from "./Button";
import { useContext } from "react";
import { store } from "../../../context/Context";
import { useState } from "react";

const LendBookButton = ({ book }) => {
  const { lendBook } = useContext(store);

  const handleClick = () => {
    localStorage.setItem("bookTemp", JSON.stringify(book));

    setTimeout(() => {
      window.location.replace("/lend-book");
    }, 100);
  };

  return (
    <>
      <Button color={"bg-green-700"} text={"Prestar"} onClick={handleClick} />
    </>
  );
};

export default LendBookButton;
