// External Imports
// JavaScript
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const User = ({ match }) => {
  const [user, setUser] = useState({})

  const getUser = async login => {
    console.log('aqui')
    const url = `https://api.github.com/users/${login}`
    let userInfo = await window.fetch(url)
    userInfo = await userInfo.json()
    setUser(userInfo)
    console.log(user)
  }

  useEffect(() => {
    getUser(match.params.login)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Image src={user.avatar_url} alt={`GitHub User Called ${user.login}`} />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <p>{user.bio}</p>
      <p>{user.location}</p>
      <p>{user.blog}</p>
    </div>
  )
}

// Styled Components
const Image = styled.img`
  width: 300px;
`

export default User
