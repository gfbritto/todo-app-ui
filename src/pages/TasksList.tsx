import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

export default function TasksList() {
  return (
    <>
      <Header />
      <Box w="100%" p={3}>
        <div>My Task list</div>
      </Box>
    </>
  );
}
