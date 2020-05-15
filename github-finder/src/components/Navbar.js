// External Imports
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title, links }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'><h1><i className={icon} />  {title}</h1></Link>

      <ul>
        {links.map(({ endpoint, text }, index) => (
          <li key={index}><Link to={endpoint}>{text}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

// Setting Prop Types
Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: [1, 2, 3]
}

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.array
}

export default Navbar
