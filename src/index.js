import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "/Apropos",
    element: <Apropos />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
