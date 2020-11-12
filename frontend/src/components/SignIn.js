import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // props.loggedInUser()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(userInfo => {
        // console.log(userInfo)
        localStorage.token = userInfo.jwt
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        this.props.loggedInUser(userInfo)
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Form>
          <Form.Group controlId='log-in-email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='email'
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>
          <Form.Group controlId='log-in-password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='password'
              type='password'
              placeholder='Enter Password'
            />
          </Form.Group>
          <Button
            onClick={this.handleSubmit}
            type='submit'
            class='btn btn-primary'
          >
            Sign-In
          </Button>
        </Form>
        <Link to={'signup'}>
          <p>click here to sign up</p>
        </Link>
      </div>
    )
  }
}

export default SignIn
