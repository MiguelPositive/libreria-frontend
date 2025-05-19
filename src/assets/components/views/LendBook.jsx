import { useContext, useEffect } from "react";
import { store } from "../../../context/Context";

import SearchInput from "../inputs/SearchInput";
import studenSelected from "../../../alerts/studentSelected";
import LendButton from "../buttons/LendButton";

const LendBook = () => {
  const {
    getStudents,
    students,
    filteredStudents,
    setSearchStudent,
    setStudentTemp,
    studentTemp,
  } = useContext(store);

  const bookTemp = JSON.parse(localStorage.getItem("bookTemp"));
  const style = "bg-cyan-950 rounded-xl p-[0.5rem] mb-[1rem] text-black";
  const style2 = "text-white font-bold";

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();

    setSearchStudent(term); // Guarda el término de búsqueda
    filteredStudents(term); // Ejecuta la búsqueda
  };

  const handleClick = (student) => {
    studenSelected();
    setStudentTemp(student);
    console.log(student);
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="flex justify-center items-center p-[1rem] animate__animated animate__fadeIn text-2xl">
      <div className="max-w-[30rem] ">
        <div
          id="container-students"
          className="bg-black mb-[1rem] rounded-xl p-[1rem]"
        >
          <h2 className="text-center mb-[1rem]">Estudiantes</h2>

          <div
            className="flex justify-center items-center mb-[1.5rem]"
            id="container-search-student"
          >
            <SearchInput
              placeholder="ESTUDIANTE"
              handleChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <div className="h-[20rem] overflow-y-auto cursor-pointer">
            {students.map((student) => (
              <div key={student._id}>
                <div
                  onClick={() => {
                    handleClick(student);
                  }}
                  className={`${style} transition-all duration-100 hover:border-[1px] hover:border-white`}
                >
                  <p> {student.name} </p>
                  <p> {student.academicProgram} </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-black rounded-xl p-[1rem] mb-[1rem]"
          id="container-info-book"
        >
          <h2 className="text-center mb-[1rem]">Información del libro</h2>

          <div id="container-book-temp">
            <div className={style}>
              <label htmlFor="" className={style2}>
                Titulo
              </label>
              <p> {bookTemp.title} </p>
            </div>

            <div className={style}>
              <label htmlFor="" className={style2}>
                Autor
              </label>
              <p>{bookTemp.author} </p>
            </div>

            <div className={style}>
              <label htmlFor="" className={style2}>
                Categoria
              </label>
              <p> {bookTemp.category} </p>
            </div>

            <div className={style}>
              <label htmlFor="" className={style2}>
                Disponible
              </label>
              <p> {bookTemp.available ? "SI" : "NO"} </p>
            </div>
          </div>
        </div>

        <div
          className="bg-black rounded-xl p-[1rem]"
          id="container-student-selected"
        >
          <h2 className="text-center mb-[1rem]">Estudiante</h2>

          {studentTemp ? (
            <div className="bg-sky-600 rounded-xl p-[1rem]">
              <div className="bg-gray-950 mb-[1rem] rounded-xl p-[0.5rem]">
                <label htmlFor="" className="mb-[0.5rem]">
                  Nombre{" "}
                </label>
                <p>{studentTemp.name}</p>
              </div>

              <div className=" bg-gray-950 mb-[1rem] rounded-xl  p-[0.5rem]">
                <label htmlFor="" className="">
                  Programa academico
                </label>
                <p>{studentTemp.academicProgram}</p>
              </div>

              <div className="flex justify-center items-center">
                <LendButton />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LendBook;
