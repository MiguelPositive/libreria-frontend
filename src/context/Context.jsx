import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const store = createContext();

// alertas

import failedUser from "../alerts/failedUser.js";
import sucessdUser from "../alerts/sucessUser.js";
import logoutUser from "../alerts/logoutUser.js";
import studenSelected from "../alerts/studentSelected.js";

const ContextApp = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [studentTemp, setStudentTemp] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [searchBook, setSearchBook] = useState("");
  const [searchStudent, setSearchStudent] = useState("");

  const validateUser = async (user, password) => {
    try {
      const res = await axios.post("http://192.168.1.161:4000/validate-user", {
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
      const res = await axios.get("http://192.168.1.161:4000/getall-books");

      setBooks(res.data);
      setAllBooks(res.data);
    } catch (error) {
      console.log("ocurrio un error en el front al obtener los libros", error);
    }
  };

  const getStudents = async () => {
    const res = await axios.get("http://192.168.1.161:4000/getall-students");
    setStudents(res.data);
    setAllStudents(res.data);

    try {
    } catch (error) {
      console.log(
        "ocurrio un error en el front al obtener los estudiantes",
        error
      );
    }
  };

  const handleclickChangeModal = () => {
    setOpenModal(!openModal);
  };

  const filteredBooks = (term) => {
    const result = allBooks.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(result);
  };

  const filteredStudents = (term) => {
    const result = allStudents.filter((student) =>
      student.name.toLowerCase().includes(term.toLowerCase())
    );
    setStudents(result);
  };

  const lendBook = async (_id, infoStudent, departureDate, available) => {
    try {
      console.log(_id);
      console.log(infoStudent);
      console.log(departureDate);
      console.log(available);

      await axios.post("http://192.168.1.161:4000/update-book", {
        _id,
        infoStudent,
        departureDate,
        available,
      });
    } catch (error) {
      console.log("oucurrio un error en el front al prestar el libro", error);
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
        logout,
        getBooks,
        getStudents,
        students,
        books,
        openModal,
        handleclickChangeModal,
        filteredBooks,
        filteredStudents,
        searchBook,
        setSearchBook,
        searchStudent,
        setSearchStudent,
        studenSelected,
        studentTemp,
        setStudentTemp,
        lendBook,
      }}
    >
      {children}
    </store.Provider>
  );
};
export default ContextApp;
