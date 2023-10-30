import PostDetails from "@/app/components/postDetails";
import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;

  return (
    <div>
      <h1>Post Details</h1>
      
      <PostDetails postId={postId} />
    </div>
  );
}

export default page;
