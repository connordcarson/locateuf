import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            address: '',
            price: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const { name, address, price } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label for="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={this.handleChange} />
                <label for="price">Price</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;