async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  return (
    <div>
      <h1>posts page</h1>
    </div>
  );
}

export default page;
