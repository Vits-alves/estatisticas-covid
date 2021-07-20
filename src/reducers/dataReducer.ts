import { ActionTypes, FETCH_DATA, FETCH_DATA_LIST } from '../actions/actionTypes'

export const initialState = {
    data: {},
    list: {}
}

const dataReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_DATA_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default dataReducer