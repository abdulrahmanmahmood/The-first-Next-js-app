import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;

  await new  Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    })
  })
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  console.log(params.postId);
  return (
    <div>
      <h1>Post Details</h1>

      <div
        style={{
          width: "100%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default page;
