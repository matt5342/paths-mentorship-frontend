// import config from 'config';
import { authHeader } from '../_helpers/auth-header';
import axios from 'axios';
import { history } from '../_helpers/history';


// const BASE_URL = 'http://localhost:8080'
const BASE_URL = 'https://paths-mentorship.herokuapp.com'

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    return axios.post(`${BASE_URL}/api/auth/signin`, { username, password })
    .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return axios.get(`${BASE_URL}/api/users`, { headers: authHeader() })
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const { accessCode, firstName, lastName, email, username, password } = user
    
    return axios.post(`${BASE_URL}/api/auth/signup`, {
        accessCode,
        firstName,
        lastName,
        email,
        username,
        password
    })
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${BASE_URL}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`${BASE_URL}/api/users/${id}`, { headers: authHeader() })
}

function handleResponse(response) {
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    // else{
    //     return response.data.then (text => {
    //         const data = text && JSON.parse(text)
    //     })
    // }
    // return response.text().then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if (response.status === 401) {
    //             // auto logout if 401 response returned from api
    //             logout();
    //             // window.location.reload();
    //         }

    //         const error = (data && data.error) || response.statusText;
    //         return Promise.reject(error);
    //     }

    //     return data;
    // });
}