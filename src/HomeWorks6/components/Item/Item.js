import React from 'react';
import { addToBasket } from '../../redux/actions/actions';
import { useDispatch  } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import './item.css';

export default function Item(props) {
  const product = props.product;
  const dispatch = useDispatch();

  return (
    <Card>
      <Image src={product.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>
          <span className="item-price">{product.price} &euro;</span>
        </Card.Meta>
        <Card.Description className="item-descrp">
          <NavLink className="descrp-link" to={`/products/${product.id}`}>Look description</NavLink>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button inverted color='green' id="addInBasket" onClick={() => dispatch(addToBasket(product.id))}>
          <Icon name="heart outline" />
          Add to Cart
        </Button>
      </Card.Content>
    </Card>
  )
}
