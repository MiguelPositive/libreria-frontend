import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const store = createContext();

// alertas

import failedUser from "../alerts/failedUser.js";
import sucessdUser from "../alerts/sucessUser.js";

const ContextApp = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validateUser = async (user, password) => {
    try {
      const res = await axios.post("http://192.168.56.1:4000/validate-user", {
        user,
        password,
      });

      if (res.data.message !== null) {
        // Guardar el token en el localStorage

        localStorage.setItem("token", res.data);

        sucessdUser(res.data.message);
      } else {
        failedUser(res.data.message);
      }
    } catch (error) {
      console.log(
        `ocurrio un error en el front al intentar validar el usuario ${error}`
      );
    }
  };

  return (
    <store.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        validateUser,
      }}
    >
      {children}
    </store.Provider>
  );
};
export default ContextApp;
