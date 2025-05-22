import Swal from "sweetalert2";

const removeStudentSucess = () => {
  Swal.fire({
    imageUrl: "https://media1.tenor.com/m/3N36XQJ-A-UAAAAd/buh-buhbye.gif",
    title: "✅ Libro devuelto",
    timer: 2000,
    showConfirmButton: false,
    customClass: {
      image: "text-center",
    },
  });
};

export default removeStudentSucess;
