import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EditorManager from "./Editor/EditorManager";
import { BrowserRouter } from "react-router-dom";

/**
 * third party stuff
 */
import "./Style/App.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log("------------ONCE");
new EditorManager();
