import {GET_USERS, USERS_ERROR, LOADING_USERS, PAGE_NUMBER, CLICKED_ELEMENT, CLICKED_IMAGE} from '../types'

import axios from 'axios'

export const isLoadedHandler = action => {
     return {
        type: LOADING_USERS,
        action: action,
  };
}

export const getUsers = () => async (dispatch, getState) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_GIT_URL}${getState().usersReducer.pageNumber}`)
        if(res.status === 200) {
            dispatch(dispatch( {
                type: GET_USERS,
                payload: res.data
        }));
            dispatch(isLoadedHandler())

        }
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }
}

export const pageNumberHandler = number => {
     return {
        type: PAGE_NUMBER,
        number: number,
  };
}

export const clickedRowHandler = id => {
     return {
        type: CLICKED_ELEMENT,
        id: id,
  };
}

export const clickedImgHandler = id => {
     return {
        type: CLICKED_IMAGE,
        id: id,
  };
}