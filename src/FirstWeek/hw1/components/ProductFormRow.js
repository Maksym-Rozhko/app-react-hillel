import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ValidatedInput from './ValidatedInput';
import product from "../prop-types/product";

const requiredValidator = value => !value ? 'Required!' : '';

export default class ProductFormRow extends Component {

    static defaultProps = {
        product: {}
    }

    constructor(props) {
        super(props);
        const { product } = props;
        this.state = {
            title: '',
            type: '',
            price: '',
            quantity: '',
            ...product
        }
    }
    onChangeField = e => {
        const { name , value} = e.target;
        this.setState({ [name]: value })
    }
    submitProductForm = () => {
        this.props.onSubmit(this.state);
        this.resetFields();
    }
    resetFields = () => {
        this.setState({
            title: '',
            type: '',
            price: '',
            quantity: '',
        })
    }
    isDisabled() {
        const { title, type, price, quantity } = this.state;
        return !!(requiredValidator(title)
        && requiredValidator(type)
        && requiredValidator(price)
        && requiredValidator(quantity))
    }
    render() {
        const { title, type, price, quantity } = this.state;
        const disabled = this.isDisabled();
        return (
            <Table.Row>
                <Table.Cell>
                    <ValidatedInput placeholder='Name' validate={requiredValidator} type="text" name='title' value={title} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Type' validate={requiredValidator} type="text" name='type' value={type} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Price' validate={requiredValidator} type="text" name='price' value={price} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Quantity' validate={requiredValidator} type="text" name='quantity' value={quantity} onChange={this.onChangeField}/>
                </Table.Cell>
                <Table.Cell>
                    <Button disabled={disabled} onClick={this.submitProductForm}>Submit</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}


ProductFormRow.propTypes = {
    product,
    onSubmit: PropTypes.func.isRequired,
};

ProductFormRow.defaultProps = {
    product: {},
};