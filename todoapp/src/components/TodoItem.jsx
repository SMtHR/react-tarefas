import styles from "./todoitem.module.css";
export default function TodoItem({ item, list, setList }) {
  function handleDelete(item) {
    setList(list.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setList(
      list.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completed} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
