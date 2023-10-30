"use client"

import { useEffect } from "react";

function todo() {
  const [todo, setTodo]
  useEffect(async() => {
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')

  }, []);
  return (
    <div>
      
    </div>
  )
}

export default todo