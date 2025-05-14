import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const store = createContext();

// alertas

import failedUser from "../alerts/failedUser.js";
import sucessdUser from "../alerts/sucessUser.js";
import logoutUser from "../alerts/logoutUser.js";

const ContextApp = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validateUser = async (user, password) => {
    try {
      const res = await axios.post("http://192.168.56.1:4000/validate-user", {
        user,
        password,
      });

      console.log(res.data.message);
      if (
        res.data.message == "usuario no encontrado" ||
        res.data.message == "contraseña incorrecta"
      ) {
        failedUser(res.data.message);
      } else {
        sucessdUser();
        localStorage.setItem("token", res.data);

        setTimeout(() => {
          window.location.replace("/dashboard");
        }, 1500);
      }
    } catch (error) {
      console.log(
        `ocurrio un error en el front al intentar validar el usuario ${error}`
      );
    }
  };

  const logout = () => {
    logoutUser();
    localStorage.removeItem("token");

    setTimeout(() => {
      window.location.replace("/");
    }, 600);
  };

  return (
    <store.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        validateUser,
        logout,
      }}
    >
      {children}
    </store.Provider>
  );
};
export default ContextApp;
