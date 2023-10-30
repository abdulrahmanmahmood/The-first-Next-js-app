


function page() {
  const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  return (
    <div>
      <h1>posts page</h1>
    </div>
  )
}

export default page