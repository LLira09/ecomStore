import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Enter Credentials</h1>
                <Form>
                    <Form.Group controlId="log-in-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="log-in-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <button type="submit" class="btn btn-primary">Sign-In</button>
                </Form>
                <Link to={'signup'}>
                    <p>click here to sign up</p>
                </Link>
            </div>
        )
    }
}

export default SignIn