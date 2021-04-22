import {GET_USERS, ERROR_MESSAGE, LOADING_USERS, PAGE_NUMBER, CLICKED_ELEMENT, CLICKED_IMAGE} from '../types'

import axios from 'axios'

export const isLoadedHandler = value => {
     return {
        type: LOADING_USERS,
        value: value,
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
            dispatch(isLoadedHandler(true))
        }
    }
    catch(err){
        if(err.response.status === 403) {
            dispatch( {
                type: ERROR_MESSAGE,
                errMsg: err.response.status,
                errMsgDetails: err.response.data.message
        })
        } else if(err.response.status === 404) {
             dispatch( {
                type: ERROR_MESSAGE,
                errMsg: err.response.status,
                errMsgDetails: err.response.statusText
        })
        }
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