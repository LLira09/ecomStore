import React from 'react'

class Rating extends React.Component{
  state ={
    ProductReviews: []
  }
  // const { reviews } = product.product
  // console.log('this is reviews')
  // if (reviews !== undefined && reviews.length > 0) {
  //   console.log(reviews)
  //   let value = reviews.reduce((acc, rev) => acc + rev.rating, 0)
  //   const avg = value / reviews.length
  //   console.log(avg)
  // }
  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/products/${this.props.product.id}`)
      .then(res => res.json())
      .then(reviews => this.setState({ ProductReviews: reviews.reviews}))
  }

  getReviews =() => {
    console.log(this.state.ProductReviews)
    let x = this.props.product.reviews
  }

  render(){
    // if (this.state.ProductReviews.length !== 0){
    let reviews = this.state.ProductReviews
    // }else{let reviews = [{rating:0}]}

  return (
    // <div>
    // {this.getReviews()}
    // </div>
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
  )}
}

export default Rating
