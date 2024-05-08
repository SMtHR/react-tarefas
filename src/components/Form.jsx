import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ list, setList }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Digite a sua tarefa..."
        />
        <button className={styles.modernButton} type="submit">
          Adicionar
        </button>
      </div>
    </form>
  );
}
