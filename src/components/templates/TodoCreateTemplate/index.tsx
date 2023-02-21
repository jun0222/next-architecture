import { TodoContext } from "@/components/providers/TodoProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./styles.module.css";

export const TodoCreateTemplate = () => {
  // FIXME: createContextの初期値と値があるときで型が合わない対処。もっと良い方法があればそちらにする。右のように分割代入したい const { todos, setTodos } = useContext(TodoContext);
  const todoContext = useContext(TodoContext);
  const todos = todoContext?.todos;
  const setTodos = todoContext?.setTodos;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(todos);

  // FIXME: 入力ごとにレンダリングされる
  // FIXME: todo追加処理、もっと良い方法がないか調査してリファクタ。eventの型指定も。
  // FIXME: カスタムフックにする
  const getInputTextForTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const getInputTextForContent = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

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
    // FIXME: createContextの初期値と値があるときで型が合わない対処をした関連、undefinedにしている初期値の扱いをスマートにしたい
    const lastTodo = todos?.slice(-1)[0]; // https://qiita.com/kerupani129/items/64ce1e80eb8efb4c2b21
    const id = lastTodo ? lastTodo.id + 1 : 1;
    const newTodo = { id, title, content };
    const newTodos = todos ? [...todos, newTodo] : [];
    setTodos && setTodos(newTodos);

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
          <Link href="/">todo一覧へ</Link>
        </button>
      </div>
    </>
  );
};
