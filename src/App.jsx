import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./assets/components/views/Login";

import ContextApp from "./context/Context";
import Dashboard from "./assets/components/views/Dashboard";

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
      element: isAuthenticated() ? <Dashboard /> : <Navigate to="/" />,
    },
    {
      path: "/*",
      element: isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />,
    },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
