import type { NextPage } from "next";
import { TodoTemplate } from "@/components/templates/TodoTemplate";
import { TodoProvider } from "@/components/providers/TodoProvider";

const TodoPage: NextPage = () => {
  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  );
};

export default TodoPage;
