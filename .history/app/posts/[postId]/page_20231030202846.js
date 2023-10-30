import PostDetails from "@/app/components/postDetails";
import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;

  await new  Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },2000)
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

    <PostDetails postId={post}/>
    </div>
  );
}

export default page;
