import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { FormEvent, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import TodoItem from "../components/TodoItem";
import { useTranslation } from "react-i18next";
import { TRANSLATION_KEYS } from "../i18n/constants";
import Footer from "../components/Footer";

export interface Todo {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
  order: number;
}

export default function TodoList() {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");

  function addTodoSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!newTodoTitle.trim()) {
      setError(t(TRANSLATION_KEYS.HOME.ERROR_EMPTY_TODO));
      return;
    }

    setError(null);
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTodoTitle,
      description: newTodoDescription,
      createdAt: new Date(),
      order: todos.length + 1,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
    setNewTodoDescription("");
  }

  return (
    <>
      <Header />
      <Box w="100%" p={3}>
        <h1>{t(TRANSLATION_KEYS.HOME.FORM.TITLE)}</h1>
        <form onSubmit={addTodoSubmit}>
          <FormControl my={5} isInvalid={!!error}>
            <FormLabel>{t(TRANSLATION_KEYS.HOME.FORM.FIELDS.TITLE)}</FormLabel>
            <Input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          <FormControl my={5}>
            <FormLabel>
              {t(TRANSLATION_KEYS.HOME.FORM.FIELDS.DESCRIPTION)}
            </FormLabel>
            <Textarea
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
            />
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
      <Footer />
    </>
  );
}
