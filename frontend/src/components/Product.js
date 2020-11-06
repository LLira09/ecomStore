import React from 'react'

class Product extends React.Component {
    render(){
        return(
            <div>
                <h3>{this.props.product.name}</h3>
                <img src={this.props.product.image_url} style={{width:200}}></img>
                <h3>${this.props.product.price}</h3>
                <button>View More</button>
            </div>
        )
    }
}

export default Product