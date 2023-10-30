import React from 'react'

function page(props) {
  console.log(props);
  return (
    <div>
      title
      <h1>{props.p}</h1>
    </div>
  )
}

export default page