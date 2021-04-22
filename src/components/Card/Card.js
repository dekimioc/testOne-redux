import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {clickedRowHandler, clickedImgHandler} from '../../redux/actions/actions';
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({data}) => {
    const clickedElement = useSelector(state => state.usersReducer.clickedElement)
    const clickedImage = useSelector(state => state.usersReducer.clickedImage)

    const dispatch = useDispatch();

    const clickedElementHandler = event => {
        dispatch(clickedRowHandler(event))
        dispatch(clickedImgHandler(event))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(clickedImgHandler(false));
        }, 1100);
        return () => clearTimeout(timer);
    }, [dispatch, clickedImage]);
 
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