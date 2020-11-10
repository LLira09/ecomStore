import React from 'react'

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import AccountScreen from './Screens/AccountScreen'
import Product from './components/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Cart from './components/Cart'
import SignUp from './components/SignUp'
import NewItem from './components/NewItem'
import AdjustStock from './components/AdjustStock'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const URL = 'http://localhost:3000/api/v1/products/'

class App extends React.Component {
  state = {
    allProducts: [],
    allOrders: [],
    allUsers: [],
    cart: [],
    order_id: ''
  }

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(prod => this.setState({ allProducts: prod }))
    fetch('http://localhost:3000/api/v1/orders')
      .then(res => res.json())
      .then(orders => this.setState({ allOrders: orders }))
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(users => this.setState({ allUsers: users }))
  }

  addToCart = (product) => {

    this.setState({
      cart: [...this.state.cart, product]
    })
    alert(`${product.name} has been added to cart`)
  }

  removeFromCart = (input) => {
    this.setState({
      cart: this.state.cart.filter(product => product.id !== input)
    })
  }

  startOrder = () => {
    console.log('this is startOrder')
    this.createOrder()
  }

  createOrder = () => {
    console.log('this is createOrder')
    let newOrder = {
      user_id: 1,
      shipped: false,
      paid: false
    }
    fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(order => {
        console.log('this is the order', order)
        this.setState({
          order_id: order.id
        })
        this.createOrderedItems()
      })
  }

  createOrderedItems = () => {
    console.log('create ordered items', this.state, 'wtf')
    this.state.cart.map(item => this.createJoin(item))
    this.adjustForOrder()
  }

  createJoin = (prod) => {
    console.log('create join', this.state.order_id)
    let newJoin = {
      order_id: this.state.order_id,
      product_id: prod.id
    }

    fetch('http://localhost:3000/api/v1/ordereditems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newJoin)
    })

  }

  adjustStock = (id, num) => {
    let updatedProduct = { num_in_stock: num }
    console.log('id:', id, 'new stock', num)
    fetch(`http://localhost:3000/api/v1/products/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then(ret => this.setState({
        allProducts: this.state.allProducts.map(prod => prod.id === id ? ret : prod)
      }))
  }

  adjustForOrder = () => {
    this.state.cart.map(item => {
      item.num_in_stock = item.num_in_stock - 1
      fetch(`http://localhost:3000/api/v1/products/${item.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      })
        .then(res => res.json())
        .then(ret => this.setState({
          allProducts: this.state.allProducts.map(prod => prod.id === item.id ? ret : prod)
        }))
    })
  }

  handleNewProductSubmit = (newProduct) => {
    console.log(newProduct)
    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(returnedProduct => this.setState({ allProducts: [...this.state.allProducts, returnedProduct] }))
  }

  markAsPaid = (id) => {
    console.log('mark as paid', id)
    fetch(`http://localhost:3000/api/v1/orders/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({paid: true})
    })
      .then(res => res.json())
      .then(paidOrder => this.setState({
        allOrders: this.state.allOrders.map(order => order.id === id ? paidOrder : order)
      }))
  }




  render() {
    return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>

            <Route exact path='/newitem' render={(routeProps) => <NewItem {...routeProps} handleNewProductSubmit={this.handleNewProductSubmit} />} />
            <Route exact path='/account' render={(routeProps) => <AccountScreen {...routeProps} allOrders={this.state.allOrders} allUsers={this.state.allUsers} markAsPaid={this.markAsPaid} />} />
            <Route exact path='/adjuststock' render={(routeProps) => <AdjustStock {...routeProps} adjustStock={this.adjustStock} allProducts={this.state.allProducts} />} />
            <Route exact path='/cart' render={(routeProps) => (<Cart {...routeProps} startOrder={this.startOrder} cart={this.state.cart} removeFromCart={this.removeFromCart} />)} />

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

              render={routeProps => (
                <ProductScreen
                  {...routeProps}
                  addToCart={this.addToCart}
                  allProducts={this.state.allProducts}
                />
              )}

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
