import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

interface Todo {
  description: string;
  createdAt: Date;
  order: number;
}

export default function TodoList() {
  const [todo, setTodo] = useState<string>("");
  ///const [todosList, setTodosList] = useState<Todo>;
  return (
    <>
      <Header />
      <Box w="100%" p={3}>
        <h1>My todos</h1>
        <FormControl my={5}>
          <FormLabel>New todo</FormLabel>
          <Input
            type="email"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <FormHelperText>What do you wanna add to your do?</FormHelperText>
        </FormControl>
        <Button
          rightIcon={<AddIcon />}
          colorScheme="gray"
          variant="outline"
          size="sm"
        >
          Add
        </Button>
      </Box>
    </>
  );
}
