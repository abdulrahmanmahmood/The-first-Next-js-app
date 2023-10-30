"use client";

import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await response.json();
    settodo(result);
  }, []);


  return (
    <div>
      {/* <h1>{todo.title}</h1> */}
    </div>
  );
}

export default Todo;
