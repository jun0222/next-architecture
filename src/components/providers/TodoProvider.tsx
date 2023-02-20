import { createContext, FC, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

// FIXME: TodoContextTypeという命名はよくなさそうなので、全体的に直したい
export type TodoContextType = { id: number; title: string; content: string };

export const TodoContext = createContext({});

export const TodoProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<TodoContextType[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
