// import config from 'config';
import { authHeader } from '../_helpers/auth-header';
import axios from 'axios';

// const BASE_URL = 'http://localhost:8080'
const BASE_URL = 'https://paths-mentorship.herokuapp.com'

export const userService = {
    login,
    logout,
    register,
    getAdminPanel,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    return axios.post(`${BASE_URL}/api/auth/signin`, { username, password })
    .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
    // return fetch(`${BASE_URL}/api/auth/signin`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));

    //         return user;
    //     });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    // console.log(user.accessCode)
    const { accessCode, firstName, lastName, email, username, password } = user
    
    return axios.post(`${BASE_URL}/api/auth/signup`, {
        accessCode,
        firstName,
        lastName,
        email,
        username,
        password
    })
    // .then(handleResponse);

    // // console.log(accessCode)
    // const requestOptions = {
    //     mode: 'no-cors',
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({accessCode, firstName, lastName, email, username, password})
    // };

    // return fetch(`${BASE_URL}/api/auth/signup`, requestOptions)
}

function getAdminPanel() {
    return axios.get(`${BASE_URL}/api/test/admin`, { headers: authHeader() })
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
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    // return response.text().then(text => {
	// 	// console.log(BASE_URL)
	// 	// console.log(text)
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