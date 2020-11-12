import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3000/api/v1/users'

class SignUp extends React.Component {
  state = {
    username: '',
    address: '',
    email: '',
    password: '',
    password2: ''
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
    let newUser = {
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
      password: this.state.password
    }
    if (
      newUser.password === this.state.password2 &&
      newUser.name != '' &&
      newUser.email != ''
    ) {
      this.props.addNewUser(newUser)
      this.props.history.push('/login')
    } else alert('Passwords Do Not Match or a Required Field is Blank')
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form>
          <Form.Group controlId='sign-up-name'>
            <Form.Label>Pick a username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='username'
              type='name'
              placeholder='Pick a username'
            />
          </Form.Group>
          <Form.Group controlId='log-in-email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='email'
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>
          <Form.Group controlId='log-in-address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='address'
              type='address'
              placeholder='1234 Tech St. Houston, TX'
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
          <Form.Group controlId='log-in-password2'>
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              name='password2'
              type='password'
              placeholder='Re-Enter Password'
            />
          </Form.Group>
          <button
            onClick={this.handleSubmit}
            type='submit'
            class='btn btn-primary'
          >
            Sign-Up
          </button>
        </Form>
      </div>
    )
  }
}
export default SignUp
