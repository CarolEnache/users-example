import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError
} from '../actions/users';
import {Alert} from 'reactstrap';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';


class App extends Component {
  constructor(props){
    super(props);

    this.props.getUsersRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({
      firstName,
      lastName
    });
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  }

  handleCloseAlert = () => {
    this.props.userError({
      error: ''
    })
  }

  render() {
    console.log(this.props)
    const users = this.props.users;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color='danger' isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit}/>
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError
})(App);
