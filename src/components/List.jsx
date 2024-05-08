import TodoItem from "./TodoItem";
import styles from "./list.module.css";
export default function List({ list, setList }) {
  const sortedList = list
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedList.map((item) => (
        <TodoItem key={item.name} item={item} list={list} setList={setList} />
      ))}
    </div>
  );
}
