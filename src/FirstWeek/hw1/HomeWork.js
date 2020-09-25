import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react';
import ProductList from './components/ProductList';
import productsApi from './Products';
import ErrorBoundary from './components/ErrorBoundary';

export default class Week1 extends Component {
    state = {
       products: [],
       isFetching: false
    };

    componentDidMount() {
        this.setState({ isFetching: true });
        productsApi
            .fetchProducts()
            .then(products => {
                this.setState({ products, isFetching: false })
            })
    }

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        })
    };

    addProduct = newProduct => {
        const { products } = this.state;
        this.setState({
            products: [
                ...products,
                {
                    id: Math.random().toString(8),
                    ...newProduct
                }
            ]
        })
    };

    editProduct = updatedProduct => {
        const { products } = this.state;
        this.setState({
            products: products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
        })
    };

    render() {
        const { isFetching } = this.state;
        return (
            <div className="week1">
                <ErrorBoundary resolve={() => alert('Help me')}>
                    <Loader size='small' active={isFetching} />
                    <ProductList
                        onAddProduct={this.addProduct}
                        onEditProduct={this.editProduct}
                        onRemoveProduct={this.removeProduct}
                        products={this.state.products}
                    />
                </ErrorBoundary>
            </div>
        )
    }
}