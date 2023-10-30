import Link from 'next/link'

const metadata={
  
}

function page() {
  return (
    <div>
      <h1>articles</h1>
      <Link href="/posts">
      <button>Take me to the posts page</button>
      </Link>
    </div>
  )
}

export default page