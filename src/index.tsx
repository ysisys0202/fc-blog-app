import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext";
import { ThemeProvider } from "context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <AuthContextProvider>
      {/* <React.StrictMode> */}
      <Router>
        <App />
      </Router>
      {/* </React.StrictMode> */}
    </AuthContextProvider>
  </ThemeProvider>
);
