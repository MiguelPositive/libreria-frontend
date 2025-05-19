import Swal from "sweetalert2";

const studenSelected = () => {
  Swal.fire({
    imageUrl: "https://media.tenor.com/EstgbDYL52oAAAAi/dullbrad-yuri.gif",
    title: "✅ ESTUDIANTE SELECCIONADO",
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      image: " text-center",
    },
  });
};

export default studenSelected;
