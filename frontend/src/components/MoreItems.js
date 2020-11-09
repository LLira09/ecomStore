import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const MoreItems = ({ products, handleProductChange }) => {
  //   console.log(products.slice(-4, -1))
  const lastThree = products.slice(-3)
  return (
    <div>
      <h3>New Items</h3>
      <Row className='p-3 my-3'>
        {lastThree.map(product => {
          return (
            <Card className='m-3' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.image_url} />
              <Card.Body>
                <Card.Title>{product.brand}</Card.Title>

                <Button
                  onClick={() => handleProductChange(product)}
                  variant='primary'
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </Row>
    </div>
  )
}

export default MoreItems
