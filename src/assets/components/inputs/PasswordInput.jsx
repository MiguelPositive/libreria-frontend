import Input from "./input";
import { store } from "../../../context/Context";
import { useContext } from "react";

const PasswordInput = (e) => {
  const { setPassword, user, password, validateUser } = useContext(store);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Input
        placeholder={"CONTRASEÑA"}
        type={"password"}
        icon={"bi bi-eye-slash-fill"}
        handleChange={handleChangePassword}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            validateUser(user, password);
          }
        }}
      />
    </>
  );
};

export default PasswordInput;
