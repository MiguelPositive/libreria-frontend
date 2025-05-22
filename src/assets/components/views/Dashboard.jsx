import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { store } from "../../../context/Context";

import LogOut from "../headers/LogOut";
import ShowBooks from "../../../table/ShowBooks";
import LendBookButton from "../buttons/LendBookButton";
import SearchInput from "../inputs/SearchInput";

//MUI

import { Collapse } from "@mui/material";
import InUseBook from "../buttons/InUseBook";

const Dashboard = () => {
  const { getBooks, getStudents, books, setSearchBook, filteredBooks } =
    useContext(store);

  const [idTemp, setIdTemp] = useState("");

  const handleClick = (id) => {
    setIdTemp((prevId) => (prevId === id ? "" : id));
  };

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchBook(term); // Guarda el término de búsqueda
    filteredBooks(term); // Ejecuta la búsqueda
  };

  useEffect(() => {
    getBooks();
    getStudents();
  }, [location]);

  return (
    <div className="animate__animated animate__fadeIn">
      <LogOut />

      <div className="p-[1rem] text-2xl">
        <div className="flex text-xl" id="header-options-dashboard">
          <SearchInput
            placeholder={"NOMBRE DEL LIBRO"}
            handleChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="bg-black/50 cursor-pointer mt-[2rem] rounded-lg">
          {books.map((book) => (
            <div key={book._id}>
              <div
                className="flex justify-between p-[1rem] "
                onClick={() => {
                  handleClick(book._id);
                }}
              >
                <p className="mr-[0.8rem]">{book.title}</p>

                <div className="flex">
                  <div className="mr-[0.5rem]">
                    {book.available ? (
                      <LendBookButton book={book} />
                    ) : (
                      <InUseBook _id={book._id} />
                    )}
                  </div>
                  <div>
                    <i
                      className={
                        idTemp == book._id
                          ? "bi bi-caret-up-fill  mr-[0.2rem]"
                          : "bi bi-caret-down-fill mr-[0.2rem]"
                      }
                    ></i>
                  </div>
                </div>
              </div>
              <Collapse
                in={idTemp == book._id}
                timeout="auto"
                unmountOnExit
                className=""
              >
                <div className="p-[1rem] bg-header rounded-xl mb-[1rem]">
                  <ShowBooks label={"Autor"} text={book.author} />
                  <ShowBooks label={"Categoria"} text={book.category} />
                  <ShowBooks label={"Disponible"} text={book.available} />

                  {book.available === false && book.infoStudent ? (
                    <ShowBooks
                      label={"Fecha de salida"}
                      text={book.departureDate}
                    />
                  ) : null}
                </div>

                {book.available === false && book.infoStudent && (
                  <div className="p-[1rem] bg-gradient rounded-xl shadow-lg">
                    <h1 className="text-center mb-[1rem] mt-[1rem]">
                      Datos del estudiante
                    </h1>
                    <ShowBooks label={"Nombre"} text={book.infoStudent.name} />
                    <ShowBooks
                      label={"Programa Academico"}
                      text={book.infoStudent.academicProgram}
                    />
                    <ShowBooks
                      label={"Semestre"}
                      text={book.infoStudent.semester}
                    />

                    <ShowBooks
                      label={"Programa Academico"}
                      text={book.infoStudent.academicProgram}
                    />
                  </div>
                )}
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
