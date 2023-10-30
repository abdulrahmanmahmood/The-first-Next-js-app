"use client";

import { useEffect, useState } from "react";

function todo() {
  const [todo, setTodo] = useState();
  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await response.json();
  }, []);
  return <div></div>;
}

export default todo;
