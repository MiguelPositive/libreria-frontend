import Input from "./input";
import { store } from "../../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const PasswordInput = (e) => {
  const { setPassword, user, password, validateUser } = useContext(store);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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

            if (token !== null) {
              navigate("/dashboard");
            }
          }
        }}
      />
    </>
  );
};

export default PasswordInput;
