import React from 'react'

function page(props) {
  console.log(props);
  return (
    <div>
      title
      <h1>{props.parama}</h1>
    </div>
  )
}

export default page