import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Segment, Image, Button, Icon } from 'semantic-ui-react';
import './itemInfo.css';
import { addToBasket } from '../../redux/actions/actions';
import { useDispatch  } from 'react-redux';

export default function ItemInfo() {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products } = useSelector(state => state.products)
  const item = products.find(product => {
      return product.id === Number(productId)
    }
  );

  return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Image src={item.img} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Grid.Column className="item-name">
              {item.name}
            </Grid.Column>
            <Grid.Column className="item-price">
              {item.price} &euro;
            </Grid.Column>
            <Grid.Column className="item-descrp">
              {item.descriptions}
            </Grid.Column>
            <Button inverted color='brown' className="btn-back">
              <NavLink to='/products'>Go Back</NavLink>
            </Button>
            <Button inverted color='green' id="addInBasket" onClick={() => dispatch(addToBasket(item.id))}>
              <Icon name="heart outline" />
              Add to Cart
            </Button>
          </Segment>
          <Segment>
            <Grid.Column className="images-list-box">
              <Image className="images-list" src={item.imgl} />
              <Image className="images-list" src={item.imgm} />
              <Image className="images-list" src={item.imgr} />
            </Grid.Column>
          </Segment>
        </Grid.Column>
      </Grid>
  )
}
