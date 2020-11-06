import React from 'react'
import Product from '../components/Product.js'



class HomeScreen extends React.Component {


    render() {
        return (
            <div>
                {this.props.renderProducts()}
            </div>

        )
    }
}

export default HomeScreen