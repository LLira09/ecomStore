import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import CarouselImg from '../components/CarouselImg'

const URL = 'http://localhost:3000/api/v1/products'

class HomeScreen extends React.Component {
  state = {
    allProducts: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(prod => this.setState({ allProducts: prod }))
  }

  renderProducts = () => {
    return this.state.allProducts.map(product => (
      <Product product={product} key={product.id} />
    ))
  }

  render() {
    return (
      <>
        <Row sm={12} md={6} lg={4} xl={6}>
          {/* <Col sm={12} md={6} lg={4} xl={3}> */}
          {this.renderProducts()}
          {/* </Col> */}
        </Row>
      </>
    )
  }
}

export default HomeScreen
