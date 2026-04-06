import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Cursor from "./components/animationComponent/cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cursor></Cursor>
    <App></App>
    
  </StrictMode>,
);
