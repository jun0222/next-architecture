import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const dummyTodos = [
    { id: 1, title: "1つ目", content: "1つ目の本文" },
    { id: 2, title: "2つ目", content: "2つ目の本文" },
    { id: 3, title: "3つ目", content: "3つ目の本文" },
  ];

  // FIXME: ContextAPIで管理する
  const [todos] =
    useState<{ id: number; title: string; content: string }[]>(dummyTodos);

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
