import { TodoContext } from "@/components/providers/TodoProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);

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
                <Link className={styles.link} href={`todo/${todo.id}`}>
                  詳細
                </Link>
              </div>
            );
          })}
        </ul>
        {/* FIXME: pathpidaとか使う？ */}
        <Link className={styles.link} href={`todo/create`}>
          新規作成
        </Link>
      </div>
    </>
  );
};
