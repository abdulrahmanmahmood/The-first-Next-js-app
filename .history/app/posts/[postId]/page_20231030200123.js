function page({ params }) {
  console.log(params.post);
  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
}

export default page;
