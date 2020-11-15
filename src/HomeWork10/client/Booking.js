import React from 'react';
import { Provider } from 'react-redux';
import createStore from "./redux/createStore";
import RouterApp from "./RouterApp";

const store = createStore();

function AppOrder() {
    return (
        <Provider store={store}>
            <RouterApp/>
        </Provider>
    )
}

export default AppOrder;