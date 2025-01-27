import { Navigate, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<TodoList />} />
      <Route path="/" element={<TodoList />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
