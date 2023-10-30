function page({ params }) {
  console.log(params.postId);
  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
}

export default page;
