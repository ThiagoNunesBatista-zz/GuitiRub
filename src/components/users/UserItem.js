// External Imports
// JavaScript
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserItem = ({ user }) => {
  const { avatar_url, login } = user

  return (
    <UserCard>
      <Image src={avatar_url} alt={`GitHub User Called ${user.login}`} />
      <Link to={`/user/${login}`}>{user.login}</Link>
    </UserCard>
  )
}

// Prop Types
UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

// Styled Components
const UserCard = styled.section`
  background: #0000FF;
  color: #FFFFFF;
  margin: 10px;

  a {
    padding: 10px 15px;
    background: pink;
    border-radius: 5px;
  }
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 300px;
`

export default UserItem
