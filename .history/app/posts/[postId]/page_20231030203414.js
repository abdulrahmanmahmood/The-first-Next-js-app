import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;

  return (
    <div>
      <h1>Post Details</h1>
      <Suspense>
      <PostDetails postId={postId} />

      </Suspense>
    </div>
  );
}

export default page;
