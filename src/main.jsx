import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cadastro from "./Pages/Cadastro/Cadastro.jsx";
import Carteira from "./Pages/Carteira/carteira.jsx";
import Transacao from "./Pages/Transacao/transacao.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/cadastro",
    element: <Cadastro />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/carteira",
    element: <Carteira />,
  },

  {
    path: "/transacao",
    element: <Transacao />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
