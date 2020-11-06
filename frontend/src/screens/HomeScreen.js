import React from 'react'
import Product from '../components/Product.js'
const URL = 'http://localhost:3000/api/v1/products' 


class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            allProducts: []
        }
    }

    componentDidMount(){
        fetch(URL).then(res => res.json()).then(products => this.setState({allProducts: products}))
    }

    rendedProducts = () => {
        return this.state.allProducts.map(product => (
            <Product
            product={product}
            />
        ))
    }


    render(){
        return(
            <div>
                <h1>Ecom Store</h1>
                <h1>homescreen page</h1>
                {this.rendedProducts()}
            </div>
        )
    }

}

export default HomeScreen