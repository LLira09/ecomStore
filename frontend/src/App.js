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
  constructor() {
    super()
    this.state = {
      allProducts: [],
      allOrders: [],
      allUsers: [],
      allReviews: [],
      cart: [],
      order_id: '',
      loggedInUser: '',
      reset: false
    }
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
    // fetch('http://localhost:3000/api/v1/reviews')
    //   .then(res => res.json())
    //   .then(reviews => this.setState({ allReviews: reviews }))
  }





  addNewUser = (newUser) => {

    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(newUser =>
        this.setState({
          allUsers: [...this.state.allUsers, newUser]
        })
      )
  }

  loggedInUser = user => {
    // console.log('user logged in', user)
    this.setState({
      loggedInUser: user
    })
    // console.log('app', this.state.loggedInUser)
  }

  addToCart = product => {
    
    this.setState({
      cart: [...this.state.cart, product]
    })
    alert(`${product.name} has been added to cart`)
  }

  removeFromCart = input => {
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
    let user = JSON.parse(localStorage.getItem('userInfo'))
    let id = user.user.id
    let newOrder = {
      user_id: id,
      shipped: false,
      paid: false
    }
    fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
      .then(res => res.json())
      .then(order => {
        console.log('this is the order', order)
        this.setState({
          allOrders: [...this.state.allOrders, order],
          order_id: order.id
        })
        this.createOrderedItems()
      })
  }

  createOrderedItems = () => {
    this.state.cart.map(item => this.createJoin(item))
    this.adjustForOrder()
    alert('Stripe API would go Here...')
  }

  createJoin = prod => {
    const token = localStorage.getItem('token')
    console.log('create join token', token)

    let newJoin = {
      order_id: this.state.order_id,
      product_id: prod.id
    }
    console.log('new join', newJoin)

    fetch('http://localhost:3000/api/v1/ordereditems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
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
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
      .then(res => res.json())
      .then(ret =>
        this.setState({
          allProducts: this.state.allProducts.map(prod =>
            prod.id === parseInt(id) ? ret : prod
          )
        })
      )
  }

  adjustForOrder = () => {
    this.state.cart.map(item => {
      item.num_in_stock = item.num_in_stock - 1
      fetch(`http://localhost:3000/api/v1/products/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(item)
      })
        .then(res => res.json())
        .then(ret =>
          this.setState({
            allProducts: this.state.allProducts.map(prod =>
              prod.id === item.id ? ret : prod
            )
          })
        )
    })
  }

  handleNewProductSubmit = newProduct => {
    console.log(newProduct)
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(returnedProduct =>
        this.setState({
          allProducts: [...this.state.allProducts, returnedProduct]
        })
      )
  }

  deleteProduct = id => {
    console.log('id', id)
    fetch(`http://localhost:3000/api/v1/products/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      // .then(this.setState({ allProducts: []}))
      .then(
        this.setState({
          allProducts: this.state.allProducts.filter(
            product => product.id !== parseInt(id)
          )
        })
      )
  }

  markAsPaid = id => {
    console.log('mark as paid', id)
    fetch(`http://localhost:3000/api/v1/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ paid: true })
    })
      .then(res => res.json())
      .then(paidOrder =>
        this.setState({
          allOrders: this.state.allOrders.map(order =>
            order.id === parseInt(id) ? paidOrder : order
          )
        })
      )
  }

  markAsShipped = id => {
    console.log('mark as shipped', id)
    fetch(`http://localhost:3000/api/v1/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ shipped: true })
    })
      .then(res => res.json())
      .then(shippedOrder =>
        this.setState({
          allOrders: this.state.allOrders.map(order =>
            order.id === parseInt(id) ? shippedOrder : order
          )
        })
      )
  }

  handleLogout = () => {
    console.log('Logout')
    this.setState({ loggedInUser: '' })
    localStorage.removeItem('userInfo')
    // localStorage.setItem('userInfo', 'no user')
    window.location.reload()
  }

  newRating = (input, prod_id) => {
    console.log('match', prod_id)
    let new_rating = input
    let user_id = this.state.loggedInUser.user.id
    let ratingObj = {
      user_id: user_id,
      rating: new_rating,
      product_id: prod_id
    }
    fetch('http://localhost:3000/api/v1/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(ratingObj)
    })
    .then(res => res.json())
    .then(newReview => this.setState({ allReviews: [...this.state.allReviews, newReview]}))

  }

  render() {
    return (
      <Router>
        <Header
          handleLogout={this.handleLogout}
          loggedIn={this.state.loggedInUser}
        />
        <main className='py-3'>
          <Container>
            <Route
              exact
              path='/newitem'
              render={routeProps => (
                <NewItem
                  {...routeProps}
                  handleNewProductSubmit={this.handleNewProductSubmit}
                />
              )}
            />
            <Route
              exact
              path='/account'
              render={routeProps => (
                <AccountScreen
                  {...routeProps}
                  allOrders={this.state.allOrders}
                  allUsers={this.state.allUsers}
                  markAsPaid={this.markAsPaid}
                  markAsShipped={this.markAsShipped}
                />
              )}
            />
            <Route
              exact
              path='/adjuststock'
              render={routeProps => (
                <AdjustStock
                  {...routeProps}
                  deleteProduct={this.deleteProduct}
                  adjustStock={this.adjustStock}
                  allProducts={this.state.allProducts}
                />
              )}
            />
            <Route
              exact
              path='/cart'
              render={routeProps => (
                <Cart
                  {...routeProps}
                  startOrder={this.startOrder}
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                />
              )}
            />

            <Route
              exact
              path='/'
              render={routeProps => (
                <HomeScreen
                  {...routeProps}
                  allProducts={this.state.allProducts}
                  allReviews={this.state.allReviews}
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
                  newRating={this.newRating}
                />
              )}
            />
            <Route
              exact
              path='/login'
              render={routeProps => (
                <SignIn {...routeProps} loggedInUser={this.loggedInUser} />
              )}
            />
            <Route
              exact
              path='/signup'
              render={routeProps => (
                <SignUp {...routeProps} addNewUser={this.addNewUser} />
              )}
            />
          </Container>
        </main>
        <Footer />
      </Router>
    )
  }
}

export default App
