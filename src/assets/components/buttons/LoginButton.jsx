import Button from "./Button";
import { store } from "../../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { user, password, setUser, setPassword, validateUser } =
    useContext(store);

  const sendData = () => {
    console.log(user, password);

    validateUser(user, password);
    setUser("");
    setPassword("");

    if (token !== null) {
      window.location.replace("/dashboard");
    }
  };

  return (
    <>
      <Button color={"bg-sky-600"} text={"ENTRAR"} onClick={sendData} />
    </>
  );
};

export default LoginButton;
