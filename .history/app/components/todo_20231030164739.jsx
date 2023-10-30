"use client"
function todo() {
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todo = await response.json()
  return (
    <div>
      
    </div>
  )
}

export default todo