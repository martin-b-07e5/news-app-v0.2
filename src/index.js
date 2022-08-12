import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
