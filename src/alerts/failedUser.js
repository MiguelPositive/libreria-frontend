import Swal from "sweetalert2";

const failedUser = (text) => {
  Swal.fire({
    imageUrl:
      "https://i.pinimg.com/564x/43/cb/f8/43cbf87f8f5c518fee34e70909f4845e.jpg",
    title: text,
    timer: 2000,
  });
};

export default failedUser;
