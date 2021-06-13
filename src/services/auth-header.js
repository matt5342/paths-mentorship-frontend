
export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("user"))

	if (user && isSecureContext.accessToken){
		console.log("in authheader")
		return { Authorization: 'Bearer ' + user.accessToken}
	} 
	else{
		return {}
	}
}