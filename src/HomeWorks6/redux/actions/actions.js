export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const COUNT_INCREASE = 'COUNT_INCREASE';
export const COUNT_DECREASE = 'CHANGE_COUNT_MINUS';
export const SET_DATA_IN_STORE = 'SET_DATA_IN_STORE';

export const addToBasket = (productId) => ({    
  type: ADD_TO_BASKET,
  payload: {
    id: productId,
  }
});

export const removeFromBasket = (productId) => ({      
  type: REMOVE_FROM_BASKET,
  payload: {
    id: productId,
  }
});

export const CountIncrease = (itemId,count) => ({    
  type: COUNT_INCREASE,
  payload: {
    id: itemId,
    count: count,
  }
});

export const CountDecrease = (itemId,count) => ({      
  type: COUNT_DECREASE,
  payload: {
    id: itemId,
    count: count,
  }
});