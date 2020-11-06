import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Ecom Store</h1>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
