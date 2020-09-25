import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Icon } from 'semantic-ui-react'
import ProductFormRow from './ProductFormRow';
import product from '../prop-types/product';

export default class ProductRow extends Component {
    state = {
        editMode: false
    }

    constructor(props) {
        super(props);
        this.state = {
            prevUserId: props.userId
        }
    }


    onEdit = updatedProduct => {
        this.props.onEditProduct(updatedProduct)
        this.setState({ editMode: false });
    }


    render() {
        const { product, onRemoveProduct } = this.props;
        const { editMode } = this.state;
        if (editMode) return <ProductFormRow onSubmit={this.onEdit} product={product} />
        return (
          <Table.Row>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.type}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
              <Table.Cell>
                  <Icon name='edit' onClick={() => this.setState({ editMode: true })} />
                  <Icon name='trash'  onClick={() => onRemoveProduct(product.id)} />
              </Table.Cell>
          </Table.Row>
        )
    }
}

ProductRow.propTypes = {
  product: product.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
};