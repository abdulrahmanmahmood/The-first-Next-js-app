import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;
const loadingJsx = {<div>
  <h1>Loading</h1></div>}
  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={loadingJsx}>
      <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default page;
