import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./assets/components/views/Login";

import ContextApp from "./context/Context";

function App() {
  // Verifica si el usuario está autenticado
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && token !== null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />,
    },
    {
      path: "/dashboard",
      element: isAuthenticated() ? (
        <h1>Dashboard</h1>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/*",
      element: isAuthenticated() ? (
        <Navigate to="/dashboard" />
      ) : (
        <h1>PAGINA NO ENCONTRADA</h1>
      ),
    },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
