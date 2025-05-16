import Button from "./Button";
import { store } from "../../../context/Context";
import { useContext } from "react";

const LoginButton = () => {
  const token = localStorage.getItem("token");

  const { user, password, setUser, setPassword, validateUser } =
    useContext(store);

  const sendData = () => {
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
