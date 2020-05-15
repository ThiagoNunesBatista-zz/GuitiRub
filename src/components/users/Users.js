// External Imports
// JavaScript
import PropTypes from 'prop-types'
import React from 'react'

// Internal Components
import UserItem from './UserItem'

const Users = ({ users }) => {
  return (
    <div>
      {users.map(user => <UserItem key={user.id} user={user} />)}
    </div>
  )
}

// Prop Types
Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
