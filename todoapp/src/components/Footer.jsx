import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Tarefas: {totalTodos}</span>
      <span className={styles.item}>Tarefas Completas: {completedTodos}</span>
    </div>
  );
}
