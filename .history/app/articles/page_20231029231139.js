import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>articles</h1>
      <Link>
      <button>Take me to the posts page</button>
      </Link>
    </div>
  )
}

export default page