import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import GithubGists from "./HomeWorks7/GithubGists";
import { Provider } from "react-redux";
import createStore from './HomeWorks7/redux/createStore';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GithubGists />
      </Provider>
    )
  }
}

export default App;