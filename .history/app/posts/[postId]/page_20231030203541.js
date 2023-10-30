import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";

async function page({ params }) {
  const postId = params.postId;
const loadingJsx = {<div>
  </div>}
  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={}>
      <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default page;
