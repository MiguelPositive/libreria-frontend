import Swal from "sweetalert2";

const logoutUser = () => {
  Swal.fire({
    title: "✅ CERRANDO SESIÓN",
    timer: 2000,
    showConfirmButton: false,
    icon: "success",
  });
};

export default logoutUser;
