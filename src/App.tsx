import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/Theme";
import TodoList from "./pages/TodoList";

function App() {
  return (
      <ChakraProvider theme={theme}>
        <TodoList />
      </ChakraProvider>
  );
}

export default App;