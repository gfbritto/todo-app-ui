import { ChakraProvider } from "@chakra-ui/react";
import TasksList from "./pages/TasksList";
import theme from "./styles/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <TasksList />
      </>
    </ChakraProvider>
  );
}

export default App;
