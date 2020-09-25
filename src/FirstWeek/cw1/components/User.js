import React, { Component } from 'react';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editedName: props.name,
            isEdit: false,
        }
    }

    onEdit = () =>  {
        this.setState({
            isEdit: true
        })
    }

    onCancel = () => {
        this.setState({
            isEdit: false,
            editedName: this.props.name
        })
    }

    onChangeName = (e) => {
        this.setState({
            editedName: e.target.value
        })
    }

    updateUser = () => {
        const { editedName } = this.state;
        const { position } = this.props;
        this.props.onUpdateUser(editedName, position);
        this.setState({
            isEdit: false
        })
    }

    render() {
        const { isEdit, editedName } = this.state;
        const { name, position, onRemoveUser } = this.props;
        return (
            <li>
                { isEdit ? <input onChange={this.onChangeName} value={editedName} type="text" /> : <span>{name} #{position}</span> }
                { !isEdit && <button className="edit-user" onClick={this.onEdit}> Edit user </button> }
                { !isEdit && <button onClick={() => onRemoveUser(position)}> Remove user </button> }
                { isEdit && <button onClick={this.updateUser}> Save </button> }
                { isEdit && <button onClick={this.onCancel}> Cancel </button> }
            </li>
        );
    }
}

export default User;
