"use client";

import { useEffect, useState } from "react";

function todo() {
  const [todo, setTodo] = useState();
  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response = await setTodo
  }, []);
  return <div></div>;
}

export default todo;
