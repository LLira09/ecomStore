import React from 'react'

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/products/:id' render={(routeProps) => (<ProductScreen {...routeProps}/>)}/>
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/signup' render={(routeProps) => (<SignUp {...routeProps}/>)} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
