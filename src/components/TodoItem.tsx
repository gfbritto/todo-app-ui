import { Card, CardHeader, Text, Heading, CardBody } from "@chakra-ui/react";
import { Todo } from "../pages/TodoList";

interface props {
  todo: Todo;
}

export default function TodoItem({ todo }: props) {
  return (
    <>
      <Card size="sm" mt={2}>
        <CardHeader>
          <Heading size="xs">{todo.title}</Heading>
        </CardHeader>
        <CardBody>
          {todo.description && <Text fontSize="xs">{todo.description}</Text>}
          <Text fontSize="xs">{todo.createdAt.toDateString()}</Text>
        </CardBody>
      </Card>
    </>
  );
}
