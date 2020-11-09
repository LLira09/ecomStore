import React from 'react'
import Product from './Product'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  state = {
    payForm: false
  }

  //   renderCart = () => {
  //     return this.props.cart.map(item => (
  //       <div>
  //         <p>
  //           {item.name} - ${item.price}
  //         </p>
  //         <button onClick={() => this.props.removeFromCart(item.id)}>
  //           {' '}
  //           Remove
  //         </button>
  //       </div>
  //     ))
  //   }
  render() {
    let total = this.props.cart.reduce((a, b) => a + b.price, 0)

    return (
      <>
        <Row>
          <Col md={8}>
            <h1>Items in Cart: {this.props.cart.length}</h1>
            {this.props.cart.length === 0 ? (
              <Link to='/'>Go Back</Link>
            ) : (
              <ListGroup variant='flush'>
                {this.props.cart.map(product => (
                  <ListGroup.Item>
                    <Row>
                      <Col md={3}>
                        <Image src={product.image_url} fluid />
                      </Col>
                      <Col md={3}>
                        <Link to={`/products/${product.id}`}>
                          {product.brand}
                        </Link>
                      </Col>
                      <Col md={3}>${product.price}</Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='danger'
                          onClick={() => this.props.removeFromCart(product.id)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <h3>Total: ${total}</h3>
            <Button>Proceed To Payment</Button>
          </Col>

          {/* {this.renderCart()} */}
        </Row>
      </>
    )
  }
}

export default Cart
