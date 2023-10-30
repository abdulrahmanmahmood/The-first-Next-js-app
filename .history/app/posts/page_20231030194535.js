async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <div
        style={{
          width: "70%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          marginTop:"20px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  });

  console.log(posts);

  return (
    <div style={{width:"100%"}}>
      <h1>posts page</h1>

      <div style={{margin:"auto", border:"red"}}>
        <h1>{postsJSX}</h1>
      </div>
    </div>
  );
}

export default page;
