import Swal from "sweetalert2";

const sucessdUser = (text) => {
  Swal.fire({
    imageUrl: "../public/imgs/pentagrama.png",
    title: `✅  ${text}`,
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      image: "animate-spin duration-4000 text-center",
    },
  });
};

export default sucessdUser;
