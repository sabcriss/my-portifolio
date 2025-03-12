import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";  // Corrigido o caminho
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme"; // Adicionado o import do theme

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
