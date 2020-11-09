import React from 'react'
import { Form } from 'react-bootstrap'

class NewItem extends React.Component {
    state = {
        category: '',
        name: '',
        price: '',
        brand: '',
        description: '',
        num_in_stock: '',
        image_url: '',       
    }

    handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleNewProductSubmit(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="new-item-category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control onChange={this.handleChange} name="category" type="category" placeholder="Category" />
                </Form.Group>
                <Form.Group controlId="new-item-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleChange} name="name" type="name" placeholder="New Item Name" />
                </Form.Group>
                <Form.Group controlId="new-item-image">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control onChange={this.handleChange} name="image_url" type="image_url" placeholder="Image URL" />
                </Form.Group>
                <Form.Group controlId="new-item-price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={this.handleChange} name="price" type="price" placeholder="MSRP" />
                </Form.Group>
                <Form.Group controlId="new-item-brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control onChange={this.handleChange} name="brand" type="brand" placeholder="Enter Brand" />
                </Form.Group>
                <Form.Group controlId="new-item-description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleChange} name="description" type="description" placeholder="Description" />
                </Form.Group>
                <Form.Group controlId="new-item-num-in-stock">
                    <Form.Label>Units In Stock</Form.Label>
                    <Form.Control onChange={this.handleChange} as="select" name="num_in_stock" type="num_in_stock">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </Form.Control>
                </Form.Group>
                <button onClick={this.handleSubmit}>Create Item</button>
            </Form>
        )
    }
}

export default NewItem