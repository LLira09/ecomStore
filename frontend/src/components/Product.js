import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

class Product extends React.Component {
  render() {
    let rating = this.props.allReviews.filter(
      r => r.product_id === this.props.product.id
    )
    // console.log('Product', rating)
    return (
      <Card className='my-3 p-3 rounded '>
        <Link to={`products/${this.props.product.id}`}>
          <Card.Img src={this.props.product.image_url} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`products/${this.props.product.id}`}>
            <Card.Title as='div'>{this.props.product.name}</Card.Title>
          </Link>
          {/* <Rating product={this.props.product} rating={rating} /> */}
          <Card.Text as='h3'>${this.props.product.price}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Product
