import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/components/navigation.css";
import "./styles/pages/acceuil.css";
import "./styles/pages/apropos.css";
import "./styles/pages/services.css";
import "./styles/pages/blog.css";
import "./styles/components/pack.css";
import "./styles/components/whyChooseUs.css";
import "./styles/components/contactUs.css";
import "./styles/components/screenCarousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
