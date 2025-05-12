import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./assets/components/views/Login";

import ContextApp from "./context/Context";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/*", element: <h1>Error pagina no encontrada </h1> },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
