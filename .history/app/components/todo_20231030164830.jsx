"use client"

import { useEffect } from "react";

function todo() {
  useEffect(as() => {
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')

  }, []);
  return (
    <div>
      
    </div>
  )
}

export default todo