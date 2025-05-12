import Input from "./input";
import { store } from "../../../context/Context";
import { useContext } from "react";

const UserInput = (e) => {
  const { setUser, user, password, validateUser } = useContext(store);

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
          }
        }}
      />
    </>
  );
};

export default UserInput;
