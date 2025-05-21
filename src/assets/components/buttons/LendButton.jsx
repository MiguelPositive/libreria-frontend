import { useContext } from "react";
import { store } from "../../../context/Context";
import Button from "./Button";

const LendButton = () => {
  const { studentTemp, lendBook } = useContext(store);

  const handleClick = () => {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // ¡Ojo! Los meses van de 0 a 11
    const año = fecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;

    console.log(studentTemp._id);

    lendBook(studentTemp._id, studentTemp, fechaFormateada, false);
  };

  return (
    <Button color={"bg-green-900"} text={"Prestar"} onClick={handleClick} />
  );
};

export default LendButton;
