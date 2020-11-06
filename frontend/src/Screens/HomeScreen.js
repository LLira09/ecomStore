import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
import CarouselImg from '../components/CarouselImg'



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
