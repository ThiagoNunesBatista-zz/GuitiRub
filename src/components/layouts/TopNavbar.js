// External Imports
// JavaScript
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

// Internal Imports
// Styled Components
import { HorizontalNavbar } from '../styledComponents'

const TopNavbar = ({ icon, title, links }) => {
  return (
    <HorizontalNavbar>
      <Link to='/'><i className={icon} /></Link>

      <ul>
        {links.map(({ endpoint, text }, index) => (
          <li key={index}><Link to={endpoint}>{text}</Link></li>
        ))}
      </ul>
    </HorizontalNavbar>
  )
}

// Setting Prop Types
TopNavbar.defaultProps = {
  icon: 'fab fa-github'
}

TopNavbar.propTypes = {
  icon: PropTypes.string,
  links: PropTypes.array
}

export default TopNavbar
