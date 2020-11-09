import React from 'react'
import { Table, Button } from 'react-bootstrap';


class AdjustStock extends React.Component {
    state = {
        stock: ''
    }

    handleChange = (e) => {
        this.setState({
            stock: e.target.value
        })
    }

    renderInventory = () => {
        return this.props.allProducts.map(product =>
            <tr>
                <td>{product.brand}</td>
                <td>{product.name}</td>
                <td>{product.num_in_stock}</td>
                <td width="5"><input onChange={this.handleChange} size="3" name="new-qty"></input></td>
                <td width="5"><Button type="submit" id={product.id} onClick={this.handleClick}>Submit</Button></td>
            </tr>
            
        )
    }

    handleClick = (e) => {
        this.props.adjustStock(e.target.id, this.state.stock)
        window.location.reload(false)
    }

    render() {
        return (
            <div>
                <h3>Adjust Inventory</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Item</th>
                            <th>Current Stock</th>
                            <th>New Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderInventory()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default AdjustStock