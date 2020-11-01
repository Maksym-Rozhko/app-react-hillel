import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import User from './FirstWeek/cw1/components/User';
import Week1 from "./FirstWeek/hw1/HomeWork";
import Week1hw1 from "./FirstWeek/HomeWorks/Week1hw1";
import { Provider } from 'react-redux';
import { saveLocal } from './HomeWorks6/redux/storage/localStorage';
import createStore from './HomeWorks6/redux/createStore';
import Store from './HomeWorks6/Store';

const store = createStore();

store.subscribe(()=>{
  saveLocal('basket',store.getState().products.basket)
})

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <Store></Store>
    </Provider>
    )
  }
}

//<Week1>   -----------{COMMENTS}-----------
//            The teacher showed an example 
//            of the implementation of the 
//            table of products for homework1 
//<Week1 /> -----------{COMMENTS}-----------





//<User>    -----------{COMMENTS}-----------
//              ClassWork The teacher 
//               showed a simple CRUD
//<User />  -----------{COMMENTS}-----------
// class App extends Component {
//   state = {
//     users: ['Max', 'Dax', 'Don', 'Gor'],
//     newUser: ''
//   }

//   addUser = () => {
//     const { users, newUser } = this.state;
//     this.setState({
//       users: [...users, newUser],
//       newUser: ''
//     })
//   }

//   onChange = (e) => {
//     this.setState({
//       newUser: e.target.value
//     })
//   }
  
//   deleteUser = (removedIndex) => {
//     const { users } = this.state;
//     this.setState({
//       users: users.filter((user, i) => i !== removedIndex)
//     })
//   }

//   updateUser = (updateUser, updateIndex ) => {
//     const { users } = this.state;
//     this.setState({
//       users: users.map((user, i) => i === updateIndex ? updateUser : user)
//     })
//   }

//   render() {

//     const { users, newUser } = this.state;

//     return (
//       <div>
//         <h1>Hello</h1>
//         <ul>
//           {
//             users.map((name, i) => 
//             <User onUpdateUser={this.updateUser} name={name} position={i} key={i} onRemoveUser={this.deleteUser} />
//             )
//           }
//         </ul>
//         <input value={newUser} onChange={this.onChange} type="text"/>
//         <button onClick={this.addUser}>Add user</button>
//       </div>
//     )
//   }
// }

export default App;