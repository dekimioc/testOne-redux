import React from 'react'
import PropTypes from 'prop-types'

import './Header.style.scss'

const Header = ({title}) => {
    return(
        <div className="container-fluid" id="header-container">
            <h1 className="text-left header-text mb-0">{title}</h1>
        </div>
    )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header