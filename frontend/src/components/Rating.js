import React from 'react'

const Rating = product => {
  const { reviews } = product.product
  if (reviews.length > 0) {
    console.log(reviews)
    let value = reviews.reduce((acc, rev) => acc + rev.rating, 0)
    const avg = value / reviews.length
    console.log(avg)
  }
  return (
    <div>
      {(
        reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length
      ).toFixed(1) >= 4 ? (
        <span>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star-half-alt' style={{ color: 'gold' }}></i>
        </span>
      ) : (
          reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length
        ).toFixed(1) >= 3 ? (
        <span>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
        </span>
      ) : (
          reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length
        ).toFixed(1) >= 2 ? (
        <span>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
        </span>
      ) : (
          reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length
        ).toFixed(1) >= 0.5 ? (
        <span>
          <i className='fas fa-star' style={{ color: 'gold' }}></i>
        </span>
      ) : null}
    </div>
  )
}

export default Rating
