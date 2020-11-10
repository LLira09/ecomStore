import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

class AccountScreen extends React.Component {
    state = {
        orders: false,
        users: false,
        filter: ''
    }

    renderOrders = () => {
        let filter = this.state.filter
        let sortOrders= this.props.allOrders
        let showOrders = sortOrders.sort((a, b) => b.id - a.id)
        switch (filter) {
            case 'paid':
                return (
                    showOrders.filter(order => order.paid === false).map(order =>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.products.length}</td>
                            <td>${order.products.reduce((a, b) => a + b.price, 0)}</td>
                            <td>{order.created_at}</td>
                            <button id={order.id} onClick={this.markAsPaid}>mark as paid</button>
                        </tr>
                    )

                )
            case 'shipped':
                return (
                    showOrders.filter(order => order.shipped === false).map(order =>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.products.length}</td>
                            <td>${order.products.reduce((a, b) => a + b.price, 0)}</td>
                            <td>{order.created_at}</td>
                        </tr>
                    )

                )
            default:
                return (
                    showOrders.map(order =>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.products.length}</td>
                            <td>${order.products.reduce((a, b) => a + b.price, 0)}</td>
                            <td>{order.created_at}</td>
                        </tr>
                    )

                )
        }
    }

    handleFilterClick = (e) => {
        console.log(e.target.name)
        this.setState({
            filter: e.target.name
        })
    }

    renderTable = () => {
        return this.state.orders === false ? null :
            <div><Button onClick={this.handleFilterClick} name="paid">See Unpaid</Button><Button onClick={this.handleFilterClick} name="shipped">Need To Be Shipped</Button>
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
            </div>
    }

    handleOrdersClick = (e) => {
        this.setState({
            orders: !this.state.orders,
            filter: ''
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

    markAsPaid = (e) => {
        this.props.markAsPaid(e.target.id)
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