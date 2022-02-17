import { GET_DETAIL, GET_USERS } from "./actions";

const initialState = {
    users: [], //[{}, {}, {}, {}, {}]
    userDetail: {}
}

export default function reducer(state = initialState, action) { //{type: GET_USERS, payload: users}
    switch(action.type) {
        case GET_USERS: 
            return {
                ...state, // copio el estado actual 
                users: state.users.concat(action.payload)
            }
        case GET_DETAIL: 
            let user = state.users.filter(u => u.id === parseInt(action.payload.id))
            return {
                ...state,
                userDetail: user[0]
            }
        default:
            return state;            
    }
}