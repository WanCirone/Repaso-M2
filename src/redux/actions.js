import axios from 'axios';
export const GET_USERS = 'GET_USERS';
export const GET_DETAIL = 'GET_DETAIL';

export function getUsers() {
    return function(dispatch) { //Retorno una fn que recibe le método dispatch de redux
        return fetch('https://jsonplaceholder.typicode.com/users') //GET A LA API
        //El then recibe como argumento la respuesta de la api
        .then(res => res.json())
        //El siguiente then recibe el objeto parseado
        .then(obj => dispatch({type: GET_USERS, payload: obj})) // dispacho la acción 
        //se va al reducer

    }
}

export function getDetail(id) {
    return function(dispatch) {
        return axios('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.data)
        .then(obj => dispatch({type: GET_DETAIL, payload: obj}))
    }
}

// URL --> localhost:5000/todos