import React from 'react'

const LoadMoreBtn = ({setPage, page}) => {
  
  return (
    <button onClick={setPage(page +1)}>Load more</button>
  )
}

export default LoadMoreBtn