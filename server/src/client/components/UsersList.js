import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  rendersUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.rendersUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData() {
  console.log('Im Trying to load some data');
}

export { loadData };

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
