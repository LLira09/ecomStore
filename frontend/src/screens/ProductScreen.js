import React from 'react'
const URL = 'http://localhost:3000/api/v1/products/'

class ProductScreen extends React.Component{
    state = {
        product: []
    }

    // componentDidMount(){
    //     fetch(`URL${????}`)
    //     .then(res => res.json())
    //     .then(product => this.setState({product : product}))
    // }

    render(){
        return(

            <div>
                <h3>product screen page</h3>
                <h1>{this.state.product.name}</h1>
                <img src={this.state.product.image_url} alt={this.state.product.name} ></img>
            </div>
        )
    }
}

export default ProductScreen