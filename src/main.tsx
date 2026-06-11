import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ActiveSectionProvider } from "./context/ActiveSectionContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </StrictMode>,
);
