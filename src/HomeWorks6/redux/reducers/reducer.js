import data from '../../data.json';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, COUNT_DECREASE, COUNT_INCREASE } from '../actions/actions';
import { loadLocal } from '../storage/localStorage';

const initialState = {
  products: data.MensWatches,
  basket: loadLocal('basket'),
};

// try {
//   initialState = JSON.parse(localStorage.getItem('products') || '[]')
// } catch (e) {
//   document.write('Local storage is empty!');
// }

export const productsReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_TO_BASKET : return {
      products : [...state.products],
      basket: state.basket.find((item) => item.id === action.payload.id ? item.count++ : null) 
      ? 
        [...state.basket] 
      :
        [...state.basket].concat(
          {
            id: action.payload.id,
            count: 1,
          }
        )
    };
    case REMOVE_FROM_BASKET: return {
      products: [...state.products],
      selectedProduct: state.basket.find(item => item.id === action.payload.id),
      basket: state.basket.filter(product => product.id !== action.payload.id)
    }
    case COUNT_INCREASE: return {
      products: [...state.products],
      basket: state.basket.filter(product => product.id !== action.payload.id).concat({
        id: action.payload.id,
        count: action.payload.count + 1,
      })
    }
    case COUNT_DECREASE: return {
      products: [...state.products],
      basket: 
        action.payload.count <= 1 
        ? state.basket.filter(product => product.id !== action.payload.id) 
        : state.basket.filter(product => product.id !== action.payload.id).concat(
        {
          id: action.payload.id,
          count: action.payload.count - 1,
        })
    }
    default: return state
  }
};