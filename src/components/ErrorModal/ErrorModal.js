import React from 'react'
import './ErrorModal.style.scss'
import PropTypes from 'prop-types'

const ErrorModal = ({ errorText, errorDetails }) => {
  return (
    <div className="error-message-container">
        <h1 className="color-error">{errorText}</h1>
        <p className="color-error">{errorDetails}</p>
    </div>
  )
}

ErrorModal.propTypes = {
    errorText: PropTypes.number.isRequired,
    errorDetails: PropTypes.string.isRequired
}

export default ErrorModal
