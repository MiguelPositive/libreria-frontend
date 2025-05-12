import Swal from "sweetalert2";

const sucessdUser = () => {
  Swal.fire({
    imageUrl: "../public/imgs/pentagrama.png",
    title: "✅ acceso concedido",
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      image: "animate-spin duration-4000 text-center",
    },
  });
};

export default sucessdUser;
