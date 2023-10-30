function page({ params }) {
  const postId = params.postId;


  
  console.log(params.postId);
  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
}

export default page;
