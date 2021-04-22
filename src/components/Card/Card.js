import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {clickedRowHandler, clickedImgHandler} from '../../redux/actions/actions';
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({imgSrc, userName, alt, elId}) => {
    const clickedElement = useSelector(state => state.usersReducer.clickedElement)
    const clickedImage = useSelector(state => state.usersReducer.clickedImage)

    const dispatch = useDispatch();

    const clickedElementHandler = event => {
        dispatch(clickedRowHandler(event))
        dispatch(clickedImgHandler(event))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(clickedImgHandler(null));
        }, 1100);
        return () => clearTimeout(timer);
    }, [dispatch, clickedImage]);
 
    return(
        <div 
            className={`user-card col-12 pt-3 pb-3 pl-0 d-flex flex-md-row align-items-center position-relative ${elId === clickedElement ? "clickedRow" : ''}`} 
            onClick={event => clickedElementHandler(elId)}>
            <img className="user-image mr-3" src={imgSrc} alt={alt}/>
            <p className="mb-0 card-name">{userName}</p>
            <img className={`fading-image ${elId === clickedImage ? "animation" : ""}`} src={imgSrc} alt={alt}/>
        </div>
        
    )
}

Card.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    elId: PropTypes.string.isRequired
}

export default Card