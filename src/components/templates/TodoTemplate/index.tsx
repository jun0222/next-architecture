import styles from "./styles.module.css";

export const TodoTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.area}>
        <input type="text" />
      </div>
      <ul className={styles.area}>
        <li>タスク</li>
      </ul>
    </div>
  );
};
