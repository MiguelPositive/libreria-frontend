import { useContext } from "react";
import { store } from "../../../context/Context";

const LogOut = () => {
  const { logout } = useContext(store);

  return (
    <>
      <div className="w-full h-[3.5rem] bg-header flex justify-end p-[0.5rem]">
        <div
          onClick={logout}
          className="cursor-pointer
         flex justify-end items-center h-full px-[0.5rem] border-[1px] border-white rounded-full transition-all mr-[0.5rem] duration-100 hover:scale-110 hover:text-black hover:border-black"
        >
          <h2 className="mr-[1rem] text-center">CERRAR SESIÓN</h2>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </>
  );
};

export default LogOut;
