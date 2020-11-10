import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

class AccountScreen extends React.Component {
    state = {
        orders: false,
        users: false
    }

    renderOrders = () => {
        return this.props.allOrders.map(order =>
            <tr>
                <td>{order.id}</td>
                <td>{order.products.length}</td>
                <td>${order.products.reduce((a, b) => a + b.price, 0)}</td>
                <td>{order.created_at}</td>
            </tr>
        )
    }

    renderTable = () => {
        return this.state.orders === false ? null :
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderOrders()}
                </tbody>
            </Table>
    }

    handleOrdersClick = (e) => {
        this.setState({
            orders: !this.state.orders
        })
    }

    handleUsersClick = (e) => {
        this.setState({
            users: !this.state.users
        })
    }

    renderUsersTable = () => {
        return this.state.users === false ? null :
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Orders Placed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allUsers.map(user =>
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.orders.length}</td>
                        </tr>)}
                </tbody>
            </Table>
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Account Screen For Non-Admin</h1>
                    <h3>Past Orders:</h3>
                    <h3>Account Info:</h3>
                    <p>Name:</p>
                    <p>Address:</p>
                    <button>Edit Information</button>
                </div>
                <div>
                    <h1>If admin section:</h1>
                    <button onClick={this.handleOrdersClick} >All Current Orders:</button>
                    {this.renderTable()}
                    <br></br>
                    <button onClick={this.handleUsersClick}>All Accounts</button>
                    {this.renderUsersTable()}
                    <br></br>
                    <Link to="/newitem">NEW ITEM</Link>
                    <br></br>
                    <Link to="/adjuststock">ADJUST INVENTORY</Link>
                </div>
            </div>
        )
    }
}

export default AccountScreen