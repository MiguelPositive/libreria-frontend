import Swal from "sweetalert2";

const sucessdUser = () => {
  Swal.fire({
    imageUrl: "../public/imgs/pentagrama.png",
    title: "✅ INICIANDO SESIÓN",
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      image: "animate-spin duration-700 text-center",
    },
  });
};

export default sucessdUser;
