import { ActionTypes, FETCH_DATA } from '../actions/actionTypes'

export const initialState = {
    data: []
}

const dataReducer = (state = initialState, action: ActionTypes) => {

    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default dataReducer