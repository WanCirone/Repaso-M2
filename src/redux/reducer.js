import { GET_USERS, GET_DETAIL } from "./actions"

const initialState = {
    users: [], //[{}, {}, {}, {}]
    detail: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS: 
            return {
                ...state,
                users: state.users.concat(action.payload)
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default: 
            return state
    }
}

