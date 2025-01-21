import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/Theme.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </I18nextProvider>
  </StrictMode>
);
