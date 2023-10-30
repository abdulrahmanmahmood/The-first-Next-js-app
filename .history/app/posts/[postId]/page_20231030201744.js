async function page({ params }) {
  const postId = params.postId;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 120,
    },
  });
  const post = await response.json();

  console.log(params.postId);
  return (
    <div>
      <h1>Post Details</h1>

      <div style={{
        width:"100%",
        background:"white",
        padding:"10px",
        
      }}>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
}

export default page;
