import Button from "./Button";
import { store } from "../../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { user, password, validateUser } = useContext(store);

  const sendData = () => {
    validateUser(user, password);

    if (token !== null) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Button color={"bg-sky-600"} text={"ENTRAR"} onClick={sendData} />
    </>
  );
};

export default LoginButton;
