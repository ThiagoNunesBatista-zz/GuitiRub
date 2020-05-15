// External Imports
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Internal Imports
// CSS
import './index.css'

// Styled Components
import { Container } from './components/styledComponents'

// JavaScript
import About from './components/pages/About'
import TopNavbar from './components/layouts/TopNavbar'
import Search from './components/users/Search'
import Users from './components/users/Users'
import User from './components/users/User'

const App = () => {
  const [users, setUsers] = useState([])

  const getUsers = async (username) => {
    username = username.replace(/ /g, '%20')

    const url = `https://api.github.com/search/users?q=${username}&per_page=10`
    let users = await window.fetch(url, { 'Access-Control-Allow-Origin': '*' })
    users = await users.json()
    setUsers(users.items)
  }

  return (
    <Router>
      <TopNavbar
        links={[{ endpoint: '/about', text: 'About' }]}
      />

      <Container>
        <Switch>
          <Route exact path='/'>
            <Search getUsers={getUsers} />
            {users ? <Users users={users} /> : ''}
          </Route>

          <Route exact path='/user/:login' component={User} />

          <Route exact path='/about' component={About} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
