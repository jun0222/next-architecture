import { createContext, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// FIXME: TodoContextTypeという命名はよくなさそうなので、全体的に直したい
export type TodoContextType = { id: number; title: string; content: string };

export const TodoContext = createContext({} as TodoContextType[]);

export const TodoProvider: FC<Props> = ({ children }) => {
  const dummyTodos = [
    { id: 1, title: "1つ目", content: "1つ目の本文" },
    { id: 2, title: "2つ目", content: "2つ目の本文" },
    { id: 3, title: "3つ目", content: "3つ目の本文" },
  ];

  return (
    <TodoContext.Provider value={dummyTodos}>{children}</TodoContext.Provider>
  );
};
