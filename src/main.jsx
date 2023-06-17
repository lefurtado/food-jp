import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { Global } from "./theme/global.js";
import { Reset } from "./theme/reset.js";
import { variables } from "./theme/variables.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={variables}>
      <Reset />
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>
);