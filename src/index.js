import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ToDo from "./ToDo";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);

reportWebVitals();
