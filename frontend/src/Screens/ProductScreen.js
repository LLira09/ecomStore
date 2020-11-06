import React from 'react'


const URL = 'http://localhost:3000/api/v1/products/'

class ProductScreen extends React.Component{
    state = {
        name: '',
        image_url: '',
        brand: '',
        description:'',
        price: '',
        num_in_stock: ''
    }

    componentDidMount() {
        console.log('hello', this.props.match.params.id)
        let id = this.props.match.params.id
        fetch(`http://localhost:3000/api/v1/products/${id}`).then(res => res.json()).then(prod => this.setState({
            name: prod.name,
            image_url: prod.image_url,
            brand: prod.brand,
            description: prod.description,
            price: prod.price,
            num_in_stock: prod.num_in_stock
        }))
    }


    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <img style={{width: 400}} src={this.state.image_url}></img>
                <hr></hr>
                <h3>${this.state.price} - {this.state.num_in_stock} in Stock</h3>
                <h8>Brand:{this.state.brand}</h8>
                <h8>{this.state.description}</h8>
                <br></br>
                <button>Add to Cart</button>       
            </div>

        )
    }
}

export default ProductScreen