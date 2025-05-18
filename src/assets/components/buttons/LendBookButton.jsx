import Button from "./Button";
import { useContext } from "react";
import { store } from "../../../context/Context";
import { useState } from "react";

const LendBookButton = ({ available }) => {
  const { handleclickChangeModal } = useContext(store);

  const handleClick = () => {
    alert("vista prestar libro");
  };

  return (
    <>
      {available ? (
        <Button color={"bg-green-700"} text={"Prestar"} onClick={handleClick} />
      ) : null}
    </>
  );
};

export default LendBookButton;
