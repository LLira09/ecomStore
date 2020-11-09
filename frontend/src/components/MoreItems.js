import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

const MoreItems = ({ products }) => {
  //   console.log(products.slice(-4, -1))
  const lastThree = products.slice(-4, -1)
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
                <Card.Text>{product.description}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        })}

        {/* <Card className='m-3' style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className='m-3' style={{ width: '18rem' }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </Row>
    </div>
  )
}

export default MoreItems
