import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import BasketItem from '../BasketItem/BasketItem';
import './basketContainer.css';

const Basket = ({ basket }) => {

  return (
    <Container>
      {
        basket.map((item, index) => (
          <BasketItem key={index} productId={item.id} count={item.count}></BasketItem>
        ))
      }
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    basket: state.products.basket,
  }
}

export default connect(mapStateToProps,null)(Basket)
