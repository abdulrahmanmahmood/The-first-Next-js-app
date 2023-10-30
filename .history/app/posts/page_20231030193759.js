async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post)=>{
    return(
      <div>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
      </div>
    )
  })

  console.log(posts);

  return (
    <div>
      <h1>posts page</h1>

      <div>
        
      </div>
    </div>
  );
}

export default page;
