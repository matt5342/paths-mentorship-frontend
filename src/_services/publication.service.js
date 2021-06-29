import { authHeader } from "../_helpers/auth-header";
import axios from "axios";

// const BASE_URL = 'http://localhost:8080'
const BASE_URL = 'https://paths-mentorship.herokuapp.com'

export const publicationService = {
	submit,
	getAll,
	delete: _delete
}

function submit(publication) {
	const { description, link, title } = publication
	return axios.post(`${BASE_URL}/api/publications`, { description, link, title }, { headers: authHeader() })
}

function getAll() {
    return axios.get(`${BASE_URL}/api/publications`)
}

function _delete(id) {
	return axios.delete(`${BASE_URL}/api/publications/${id}`, { headers: authHeader() })
}