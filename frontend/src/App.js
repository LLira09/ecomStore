import React from 'react'

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import Product from './components/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Cart from './components/Cart'
import SignUp from './components/SignUp'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const URL = 'http://localhost:3000/api/v1/products'

class App extends React.Component {
  state = {
    allProducts: [],
    cart: []
  }

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(prod => this.setState({ allProducts: prod }))
  }


addToCart = (product) => {
  this.setState({
    cart: [...this.state.cart, product]
  })
}



  render() {
    return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>

            <Route exact path='/cart' render={(routeProps) => (<Cart {...routeProps} cart={this.state.cart} />)} />
            <Route
              exact
              path='/'
              render={routeProps => (
                <HomeScreen
                  {...routeProps}
                  allProducts={this.state.allProducts}
                />
              )}
            />
            <Route
              exact
              path='/products/:id'
              render={routeProps => <ProductScreen {...routeProps} />}
            />
            <Route exact path='/login' component={SignIn} />
            <Route
              exact
              path='/signup'
              render={routeProps => <SignUp {...routeProps} />}
            />
          </Container>
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App
