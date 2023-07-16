import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "antd/dist/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
