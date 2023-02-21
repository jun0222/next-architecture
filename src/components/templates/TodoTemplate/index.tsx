import { TodoContext } from "@/components/providers/TodoProvider";
import Link from "next/link";
import { useContext } from "react";
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  // FIXME: createContextの初期値と値があるときで型が合わない対処。
  const todoContext = useContext(TodoContext);
  const todos = todoContext?.todos;

  return (
    <>
      <div className={styles.container}>
        <h2>Todo一覧</h2>
        <ul className={styles.area}>
          {/* FIXME: createContextの初期値と値があるときで型が合わない対処。 */}
          {todos?.map((todo) => {
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
