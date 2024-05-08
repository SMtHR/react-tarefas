import { useState } from "react";

import Form from "./Form";
import List from "./List";
import Footer from "./footer";

export default function Todo() {
  const [list, setList] = useState([]);
  const completedTodos = list.filter((todo) => todo.done).length;
  const totalTodos = list.length;
  return (
    <div>
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
