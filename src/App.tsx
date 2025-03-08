import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/Theme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/todo-app-ui">
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
