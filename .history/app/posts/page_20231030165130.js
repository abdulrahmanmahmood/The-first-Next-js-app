


async function page() {
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todo = await response.json()

  return (
    <div>
      <h1>posts page</h1>
      <h1>{todo.title}</h1>
      
    </div>
  )
}

export default page