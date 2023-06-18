import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const cnRoot = document.getElementById("root") as HTMLElement;
//if (!cnRoot) throw new Error("Failed to find the root element");

ReactDOM.createRoot(cnRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
