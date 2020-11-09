import React from 'react'
import Product from './Product'

class Cart extends React.Component {
    state = {
        payForm: false
    }

    renderCart = () => {
        return this.props.cart.map(item => (
            <div>
                <p>{item.name} - ${item.price}</p>
                <button onClick={()=>this.props.removeFromCart(item.id)}> Remove</button>
            </div>
        ))
    }
    render() {
        let total = this.props.cart.reduce((a, b) => a + b.price, 0)
        return (
            <div>
                <div>
                    {this.renderCart()}
                    <h3>Total: ${total}</h3>
                    <button >Proceed To Payment</button>
                </div>
            </div>

        )
    }
}

export default Cart