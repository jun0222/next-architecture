import { TodoContext } from "@/components/providers/TodoProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./styles.module.css";

export const TodoCreateTemplate = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(todos);

  // FIXME: 入力ごとにレンダリングされる
  const getInputTextForTitle = (event) => setTitle(event.target.value);
  const getInputTextForContent = (event) => setContent(event.target.value);

  const addTaskToTodos = async () => {
    if (title === "") {
      window.alert("タイトルが未入力です");
      return;
    }
    if (content === "") {
      window.alert("内容が未入力です");
      return;
    }

    // ContextAPIでデータ保存（DBへ保存する場合もここで行う）
    const lastTodo = todos.slice(-1)[0];
    const id = lastTodo ? lastTodo.id + 1 : 1;
    const newTodo = { id, title, content };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    window.alert(
      `以下のタスクを登録しました。\n\nタイトル：${title}\n内容：${content}`
    );

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Todo新規作成</h2>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={getInputTextForTitle}
        />

        <input
          placeholder="内容"
          value={content}
          onChange={getInputTextForContent}
        />

        <button color="primary" type="submit" onClick={addTaskToTodos}>
          追加
        </button>

        <button color="primary">
          <Link href="/">戻る</Link>
        </button>
      </div>
    </>
  );
};
