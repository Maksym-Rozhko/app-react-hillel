import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { products } from './Components/AppData';
import { Table } from 'semantic-ui-react';
import Product from './Components/ProductTable';
import { Divider, Form, Label } from 'semantic-ui-react';
// import { Message } from 'semantic-ui-react';
import '../../App.css';

class Week1hw1 extends Component {
  state = {
    products : products,
    newProduct: ''
}
  //!!!!!!!!!!!!!!!!!!!!!!!!!
  //Modify, render an error or success under the table for the user. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //!!!!!!!!!!!!!!!!!!!!!!!!!

  // function ErrorMessage(props) {
  //   return <Message positive><Message.Header>You are eligible for a reward</Message.Header><p>Go to your <b>special offers</b> page to see now.</p></Message>;
  // }

  // function SuccessMessage(props) {
  //   return <Message negative><Message.Header>We're sorry we can't apply that discount</Message.Header><p>That offer has expired</p></Message>;
  // }

  // function Response(props){
  //   const isSuccess = props.isSuccess;
  //   if (isSuccess) {
  //     return <SuccessMessage/>;
  //   }
  //   return <ErrorMessage/>;
  //   // return isSuccess ? <SuccessMessage/> : <ErrorMessage/>
  // }

  addProduct = () => {
    const { products, newProduct } = this.state;
    if(newProduct.title === '' || newProduct.category === '' || newProduct.price === '' || newProduct.quantity === '' ||
    !newProduct.title || 0 === newProduct.length || !newProduct.category || 0 === newProduct.length || !newProduct.price || 0 === newProduct.length ||
    !newProduct.quantity || 0 === newProduct.length){
      //TODO Modify
      alert('Follow the tooltips in front of the input fields!');
    }
    else {
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
      }
    })
   }
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
          <Product 
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
      {/* <Message hidden positive>
        <Message.Header>You are eligible for a reward</Message.Header>
        <p>
          Go to your <b>special offers</b> page to see now.
        </p>
      </Message>
      <Message hidden negative>
        <Message.Header>We're sorry we can't apply that discount</Message.Header>
        <p>That offer has expired</p>
      </Message> */}
        <Form>
          <Form.Field inline>
            <input type='text' placeholder='Title' value={newProduct.title} onChange={this.onChangeTitle}/>
            <Label basic color='red' pointing='left'>
              Please enter a product title
            </Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder='Category' value={newProduct.category} onChange={this.onChangeCategory}/>
            <Label basic color='red' pointing='left'>
              Please enter a category
            </Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder="Price" value={newProduct.price} onChange={this.onChangePrice} />
            <Label basic color='red' pointing='left'>
              Please enter a product price
            </Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type='text' placeholder="Quantity" value={newProduct.quantity} onChange={this.onChangeQuantity}/>
            <Label basic color='red' pointing='left'>
              Please enter a quantity product
            </Label>
          </Form.Field>
          <button className="ui positive button"type="submit" size='large' onClick={this.addProduct}>Add new Product</button>
      </Form>
      </div> 
    )
  }
}
export default Week1hw1;