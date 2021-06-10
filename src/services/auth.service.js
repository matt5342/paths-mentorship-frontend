import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/"

const register = (accessCode, username, email, password, firstName, lastName) => {
	return axios.post(API_URL + "signup", {
		accessCode,
		username, 
		email, 
		password, 
		firstName, 
		lastName
	})
}

const login = (username, password) => {
	return axios.post(API_URL + "signin", {
		username,
		password
	})
	.then((response) => {
		if (response.data.acessToken) {
			localStorage.setItem("user", JSON.stringify(response.data))
		}

		return response.data
	})
}

const logout = () => {
	localStorage.removeItem("user")
}

export default {
	register, login, logout
}