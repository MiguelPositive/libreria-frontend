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

  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const [students, setStudents] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const validateUser = async (user, password) => {
    try {
      const res = await axios.post("http://192.168.47.33:4000/validate-user", {
        user,
        password,
      });

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

  const getBooks = async () => {
    try {
      const res = await axios.get("http://192.168.47.33:4000/getall-books");

      setBooks(res.data);
      setAllBooks(res.data);
    } catch (error) {
      console.log("ocurrio un error en el front al obtener los libros", error);
    }
  };

  const handleclickChangeModal = () => {
    setOpenModal(!openModal);
  };

  const getStudents = async () => {
    const res = await axios.get("http://192.168.47.33:4000/getall-students");
    setStudents(res.data);

    try {
    } catch (error) {
      console.log(
        "ocurrio un error en el front al obtener los estudiantes",
        error
      );
    }
  };
  const filteredBooks = (term) => {
    const result = allBooks.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(result);
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
        getBooks,
        getStudents,
        students,
        books,
        openModal,
        handleclickChangeModal,
        filteredBooks,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </store.Provider>
  );
};
export default ContextApp;
