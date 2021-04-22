import {GET_USERS, LOADING_USERS, PAGE_NUMBER} from '../types'

const initialState = {
    users: [],
    pageNumber: 1,
    isLoaded: false
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
                isLoaded: true
            }
        case PAGE_NUMBER:
        return {
            ...state,
            pageNumber: action.number
        }
        default: return state
    }
}