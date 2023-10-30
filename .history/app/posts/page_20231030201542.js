import Link from "next/link";

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
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid green",
          margin: "auto",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  });

  console.log(posts);

  return (
  
      <div>
        <h1>posts page</h1>

        <div style={{ marginTop: "30px" }}>{postsJSX}</div>
      </div>
  
  );
}

export default page;
