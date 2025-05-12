import UserInput from "../inputs/UserInput";
import PasswordInput from "../inputs/PasswordInput";
import LoginButton from "../buttons/LoginButton";

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className=" rounded-xl p-[1rem] border-[1px]  border-white/30 text-xl shadow-lg shadow-black/30"
        id="container-login"
      >
        <div id="container-logo" className="">
          <h1 className="kaushan-script-regular text-center mb-[0.8rem] text-2xl">
            INICIAR SESIÓN
          </h1>

          <div
            style={{ backgroundImage: "url('/imgs/libro.png')" }}
            className="bg-cover bg-center w-[7rem] h-[7rem] ml-[3.5rem] mb-[1rem]"
          ></div>
        </div>

        <div id="container-inputs-login">
          <div className="mb-[1rem]">
            <UserInput />
          </div>
          <div className="mb-[1rem]">
            <PasswordInput />
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
export default Login;
