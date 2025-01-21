import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { FormEvent, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import TodoItem from "../components/TodoItem";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEYS } from "../i18n/constants";

export interface Todo {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
  order: number;
}

export default function TodoList() {
  const { t } = useTranslation();
  const [todo, setTodo] = useState<string>("");
  function addTodoSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title: todo,
      description: "",
      createdAt: new Date(),
      order: todos.length + 1,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <Header />
      <Box w="100%" p={3}>
        <h1>{t(TRANSLATION_KEYS.HOME.TITLE)}</h1>
        <form onSubmit={addTodoSubmit}>
          <FormControl my={5}>
            <FormLabel>{t(TRANSLATION_KEYS.HOME.NEW_TODO)}</FormLabel>
            <Input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <FormHelperText>
              {t(TRANSLATION_KEYS.HOME.ADD_TODO_HELPER)}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            rightIcon={<AddIcon />}
            colorScheme="gray"
            variant="outline"
            size="sm"
          >
            {t(TRANSLATION_KEYS.HOME.NEW_TODO_BUTTON)}
          </Button>
        </form>
      </Box>
      <Box w="100%" p={3}>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Box>
    </>
  );
}
