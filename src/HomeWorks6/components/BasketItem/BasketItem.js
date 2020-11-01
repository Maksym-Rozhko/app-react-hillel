import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, Button, Label } from 'semantic-ui-react';
import { removeFromBasket, CountDecrease, CountIncrease } from '../../redux/actions/actions';

export default function BasketItem(props) {

  const id = props.productId;
  const count = props.count;
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const item = products.find( product => product.id === id );

//TODO TotalPrice

  return (
    <Item.Group relaxed>
      <Item>
        <Item.Image size='large' src={item.img} />
        <Item.Content verticalAlign='middle'>
          <Item.Header>{item.name}</Item.Header>
          <Item.Description id="counter">Amount: {count}</Item.Description>
          <br/>
          <Button.Group>
            <Button positive icon='plus' onClick={() => dispatch(CountIncrease(item.id,count))} />
            <Button color='brown' icon='minus' onClick={() => dispatch(CountDecrease(item.id,count))} />
          </Button.Group>
          <br/><br/>
          <Label.Group tag size="massive">
            <Label as='a'>{item.price} &euro;</Label>
          </Label.Group>
          <Item.Extra>
            <Button inverted color='red' floated='right' id="basketDeleteItemBtn" onClick={()=> dispatch(removeFromBasket(item.id))}>Remove from basket</Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}
