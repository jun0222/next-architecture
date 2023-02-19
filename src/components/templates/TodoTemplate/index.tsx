import { TodoContext } from "@/components/providers/TodoProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const contextValue = useContext(TodoContext);

  const [todos] = useState(contextValue);

  return (
    <>
      <div className={styles.container}>
        <h2>Todo一覧</h2>
        <ul className={styles.area}>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                {`${todo.title}：${todo.content}`}
                {/* FIXME: constantsのNavigationと整合性をとる */}
                <Link className={styles.link} href={`todos/${todo.id}`}>
                  詳細
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
