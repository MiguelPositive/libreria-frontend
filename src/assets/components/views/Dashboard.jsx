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

const Dashboard = () => {
  const { getBooks, getStudents, books } = useContext(store);

  const [idTemp, setIdTemp] = useState("");

  const handleClick = (id) => {
    setIdTemp((prevId) => (prevId === id ? "" : id));
  };

  useEffect(() => {
    getBooks();
    getStudents();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <LogOut />

      <div className="p-[1rem] text-2xl">
        <div className="flex text-xl" id="header-options-dashboard">
          <SearchInput />
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
                    <LendBookButton available={book.available} />
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
                <div className="p-[1rem] bg-amber-600">
                  <ShowBooks label={"Autor"} text={book.author} />
                  <ShowBooks label={"Categoria"} text={book.category} />
                  <ShowBooks label={"Disponible"} text={book.available} />
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
