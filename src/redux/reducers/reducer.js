import {CLICKED_ELEMENT, CLICKED_IMAGE, ERROR_MESSAGE, GET_USERS, LOADING_USERS, PAGE_NUMBER} from '../types'

const initialState = {
    users: [],
    pageNumber: 1,
    isLoaded: false,
    clickedImage: null,
    clickedElement: null,
    errorMessage: '',
    errorDetailsMessage: ''
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case LOADING_USERS:
            return {
                ...state,
                isLoaded: action.value
            }
        case PAGE_NUMBER:
        return {
            ...state,
            pageNumber: action.number
        }
        case CLICKED_ELEMENT:
            return {
            ...state,
            clickedElement: action.id,
        }
        case CLICKED_IMAGE:
            return {
            ...state,
            clickedImage: action.id
        }
        case ERROR_MESSAGE:
            return {
            ...state,
            errorMessage: action.errMsg,
            errorDetailsMessage: action.errMsgDetails
        }
        default: return state
    }
}