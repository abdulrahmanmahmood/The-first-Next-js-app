
import Todo from "../components/todo"


async function page() {
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todos = await response.json()

  return (
    <div>
      <h1>posts page</h1>
      {/* <h1>{todos.title}</h1> */}
      <Todo/>
    </div>
  )
}

export default page