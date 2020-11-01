import { combineReducers, createStore } from 'redux';
import { productsReducer } from './reducers/reducer';

export default () => {

  return createStore(combineReducers({
    products: productsReducer,
  }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

