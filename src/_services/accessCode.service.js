import { authHeader } from "../_helpers/auth-header";
import axios from "axios";

const BASE_URL = 'http://localhost:8080'
// const BASE_URL = 'https://paths-mentorship.herokuapp.com'

export const accessCodeService = {
	submit,
	getAll,
	delete: _delete
}

function submit(accessCode) {
	const { name, schoolName, roleName } = accessCode
	return axios.post(`${BASE_URL}/api/accessCodes`, { name, schoolName, roleName }, { headers: authHeader() })
}

function getAll() {
    return axios.get(`${BASE_URL}/api/accessCodes`, { headers: authHeader() })
}

function _delete(id) {
	return axios.delete(`${BASE_URL}/api/accessCodes/${id}`, { headers: authHeader() })
}