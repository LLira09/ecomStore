import React from 'react'
import Product from './Product'

class Cart extends React.Component {
    
    renderCart = () => {
        return this.props.cart.map(item => (
            <div>
                <p>{item.name} - ${item.price}</p>
            </div>
        ))
    }
    render() {
        let total = this.props.cart.reduce((a,b) => a + b.price, 0)
        return (
            <div>
                {this.renderCart()}
                <h3>Total: ${total}</h3>
            </div>

        )
    }
}

export default Cart