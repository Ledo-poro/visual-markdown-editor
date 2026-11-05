import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import CSS styles
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/theme.css";
import "./styles/guide.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
