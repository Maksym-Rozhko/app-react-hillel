import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { products } from './Components/AppData';
import { Table } from 'semantic-ui-react';
import Product from './Components/ProductRow';
import { Divider, Form, Label } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import '../../App.css';
import ProductRow from './Components/ProductRow';

class Week1hw1 extends Component {
  state = {
    products : products,
    newProduct: '',
    // isError: false,
    // isValid: false
  }

  addProduct = () => {
    const { products, newProduct } = this.state;


    const inputValid = (inputStr) => {
      if (inputStr.title === '' || inputStr.category === '' ||
        inputStr.price === '' || inputStr.quantity === '' ||
        !inputStr || 0 === inputStr.length) {
          return this.setState({
            isError: true,
            isValid: false
          })
        } else {
          this.setState({
            products: [ 
              ...products, 
              { 
                id: Math.random().toString(4), ...newProduct
              }
            ],
            newProduct: {
              title: '', 
              category: '', 
              price: '', 
              quantity: ''
            },
            isValid: !this.state.isValid,
            isError: !this.state.isError
          })
        }
      }

      inputValid(newProduct);
  }

  onChange = (e) => {
    this.setState({
      newProduct: e.target.value
    })
  }

  onChangeTitle = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, title: e.target.value}
    })
  }

  onChangeCategory = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, category: e.target.value}
    })
  }

  onChangePrice = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, price: e.target.value}
    })
  }

  onChangeQuantity = (e) => {
    this.setState({    
      newProduct: {...this.state.newProduct, quantity: e.target.value}
    })
  }

  removeProduct = (removedIndex) => {
    const { products } = this.state;
    this.setState({
      products: products.filter((product, i) => i !== removedIndex)
    })
  }

  updateProduct = (updateProduct, updatedIndex) => {
    const { products } = this.state;
    this.setState({
      products: products.map((product, i) => i === updatedIndex ? updateProduct : product)
    })
  }

  render() {
    const { products, newProduct } = this.state
    return (
      <div>
        <Table inverted>
          <Table.Header>
              <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>Product</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
          </Table.Header>

          <Table.Body>
          { 
          products.map((product, i) =>
          <ProductRow
            product={product} 
            position={i} 
            key={i}
            onRemoveProduct={this.removeProduct}
            onUpdateProduct={this.updateProduct}
            />
          )
          }
            </Table.Body>
      </Table>
      {
        this.state.isError &&
        <Message negative>
          <Message.Header>We're sorry we can't apply to add an empty product.</Message.Header>
          <p>Follow the tooltips in front of the input fields!</p>
        </Message>
      }
      {
        this.state.isValid &&  
        <Message positive>
          <Message.Header>Your product has been successfully added to the table.</Message.Header>
          <p>You can check the addition<b>in the table</b> edit or add a new product.</p>
        </Message>
      }
        <Form>
          <Form.Field inline>
            <input type='text' placeholder='Title' value={newProduct.title} onChange={this.onChangeTitle}/>
            { 
              this.state.isError && 
              <Label  basic color='red' pointing='left'>
                Please enter a product title
              </Label> 
            }
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder='Category' value={newProduct.category} onChange={this.onChangeCategory}/>
            {
              this.state.isError && 
              <Label basic color='red' pointing='left'>
                Please enter a category
              </Label>
            }
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder="Price" value={newProduct.price} onChange={this.onChangePrice} />
            {
              this.state.isError && 
              <Label basic color='red' pointing='left'>
                Please enter a product price
              </Label>
            }
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder="Quantity" value={newProduct.quantity} onChange={this.onChangeQuantity}/>
            {
              this.state.isError && 
              <Label basic color='red' pointing='left'>
                Please enter a quantity product
              </Label>
            }
          </Form.Field>
          <button className="ui positive button"type="submit" size='large' onClick={this.addProduct}>Add new Product</button>
        </Form>
      </div> 
    )
  }
}
export default Week1hw1;