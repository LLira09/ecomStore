import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap';

class AccountScreen extends React.Component {
    state = {
        orders: false,
        users: false,
        filter: '',
        reset: false
    }



    renderOrders = () => {
        let filter = this.state.filter
        let sortOrders = this.props.allOrders
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
        if(this.state.filter === ''){
        this.setState({
            filter: e.target.name
        })
        }else(this.setState({filter: ''}))
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
        this.setState({
            reset: !this.state.reset
        })
    
    }

    renderUserOrders = () => {
        let user = JSON.parse(localStorage.getItem('userInfo'))
        let id = user.user.id
        let myOrders = this.props.allOrders.filter(order => order.user_id === id)
        return myOrders.map(order => {
            return <tr>
                <td>{order.id}</td>
                <td>{this.productsNames(order.id)}</td>
                <td>{order.shipped === true ? 'Shipped' : 'Staged for Shipping'} </td>
            </tr>
        })



    }

    productsNames = (id) => {
        let order = this.props.allOrders.find(order => order.id === id)
        return order.products.map(product => <p >{product.name}</p>)
    }

    renderAdminSection = () => {
        let user = JSON.parse(localStorage.getItem('userInfo'))
        let id = user.user.id
        let thisUser = this.props.allUsers.find(user => user.id === id)
        // console.log(thisUser)
        return (thisUser.admin === false ? null : 
            <div>
                <hr></hr>
                <h3>Admin Tools:</h3>
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
        )

    }

 


    render() {

        let user = JSON.parse(localStorage.getItem('userInfo'))
        return (
            <div>
                <div>
                    <h1>User Dashboard</h1>
                    <h3>Past Orders:</h3>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Products</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUserOrders()}
                        </tbody>
                    </Table>
                    <h3>Account Info:</h3>
                    <p>Name: {user.user.username}</p>
                    <p>Address: {user.user.address}</p>
                    <button>Edit Information</button>
                </div>
                {this.renderAdminSection()}

            </div>
        )
    }
}

export default AccountScreen