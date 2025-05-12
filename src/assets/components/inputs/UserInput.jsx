import Input from "./input";
import { store } from "../../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = (e) => {
  const { setUser, user, password, validateUser } = useContext(store);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <Input
        type={"text"}
        placeholder={"USUARIO"}
        icon={"bi bi-person-circle"}
        handleChange={handleChangeUser}
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

export default UserInput;
