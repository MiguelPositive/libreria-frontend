import Button from "./Button";
import { useContext } from "react";
import { store } from "../../../context/Context";
const InUseBook = ({ _id }) => {
  const { removeStudent } = useContext(store);

  return (
    <>
      <Button
        color={"bg-red-900"}
        text={"En uso"}
        onClick={() => {
          console.log(_id);

          removeStudent(_id);
        }}
      />
    </>
  );
};

export default InUseBook;
