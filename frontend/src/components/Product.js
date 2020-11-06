import React from 'react'
import { Link } from 'react-router-dom'

class Product extends React.Component {
    render(){
        return(
            <Link to={`products/${this.props.product.id}`}>
            <div>
                <h3>{this.props.product.name}</h3>
                <img src={this.props.product.image_url} style={{width:200}}></img>
                <h3>${this.props.product.price}</h3>
            </div>
            </Link>
        )
    }
}

export default Product