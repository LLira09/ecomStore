import React from 'react'
import Product from '../components/Product.js'

const URL = 'http://localhost:3000/api/v1/products'

class HomeScreen extends React.Component {
    state = {
        allProducts: []
    }


    componentDidMount() {
        fetch(URL).then(res => res.json()).then(prod => this.setState({ allProducts: prod }))
    }

    renderProducts = () => {
        return this.state.allProducts.map(product => (
            <Product
                product={product}
            />
        ))
    }




    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>

        )
    }
}

export default HomeScreen