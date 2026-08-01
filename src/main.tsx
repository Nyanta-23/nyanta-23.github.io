import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/index.css";
// import { NavProvider } from "./context/NavContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <NavProvider> */}
        <App />
      {/* </NavProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
