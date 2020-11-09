import React from 'react'
import { Link } from 'react-router-dom'

class AccountScreen extends React.Component {
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
                    <h3>All Current Orders:</h3>
                    <h3>All Accounts</h3>
                    <Link to="/newitem">NEW ITEM</Link>
                    <br></br>
                    <Link to="/adjuststock">ADJUST INVENTORY</Link>
                </div>
            </div>
        )
    }
}

export default AccountScreen