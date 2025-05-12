import Button from "./Button";
import { store } from "../../../context/Context";
import { useContext } from "react";

const LoginButton = () => {
  const { user, password, validateUser } = useContext(store);

  return (
    <>
      <Button
        color={"bg-sky-600"}
        text={"ENTRAR"}
        onClick={() => {
          validateUser(user, password);
        }}
      />
    </>
  );
};

export default LoginButton;
