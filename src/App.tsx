import { ChakraProvider } from "@chakra-ui/react";
import TodoList from "./pages/TodoList";
import theme from "./styles/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <TodoList />
      </>
    </ChakraProvider>
  );
}

export default App;
