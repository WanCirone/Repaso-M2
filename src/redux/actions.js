export const GET_USERS = 'GET_USERS';
export const GET_DETAIL = 'GET_DETAIL';

//Action creator
export function getUsers(){
    return function(dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({type: GET_USERS, payload: users})) // action!
    }
}

export function getDetail(id) {
    return {
        type: GET_DETAIL,
        payload: id
    }
}