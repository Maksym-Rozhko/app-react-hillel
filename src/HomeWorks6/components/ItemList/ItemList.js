import React from 'react';
import { connect } from 'react-redux';
import Item from '../Item/Item';
import './itemList.css';
// import { Container } from 'semantic-ui-react';

const ItemList = ({ products }) => {

  return (
    <div className="container">
        {
          products.map(item =>(
            <Item key={item.id} product={item}></Item>
          ))
        }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  }
}

export default connect(mapStateToProps,null)(ItemList)
