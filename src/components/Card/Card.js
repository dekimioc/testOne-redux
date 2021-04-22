import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({data}) => {
    const [clickedElement, setClickedEl] = useState(null)
    const [clickedImage, setClickedImage] = useState(null)

    const clickedElementHandler = (event) => {
        setClickedEl(event)
        setClickedImage(event)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setClickedImage(false);
        }, 1100);
        return () => clearTimeout(timer);
    }, [clickedImage]);
 
    return(
        data.map(e => <div 
                        key={e.id} 
                        className={`user-card col-12 pt-3 pb-3 pl-0 d-flex flex-md-row align-items-center position-relative ${e.id === clickedElement ? "clickedRow" : ''}`} 
                        onClick={event => clickedElementHandler(e.id)}>
                        <img className="user-image mr-3" src={e.owner.avatar_url} alt={e.owner.login}/>
                        <p className="mb-0 card-name">{Object.keys(e.files)[0]}</p>
                        <img className={`fading-image ${e.id === clickedImage ? "animation" : ""}`} src={e.owner.avatar_url} alt={e.owner.login}/>
                    </div>)
        
    )
}

Card.propTypes = {
  data: PropTypes.array.isRequired
}

export default Card