import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
  } from "../actions/types";
  
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
? { isLoggedIn: true, user }
: { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
	console.log("In auth reducer")
	const { type, payload } = action;
	console.log("type: " + type)
	console.log("payload: " + payload)
	switch (type) {
		case REGISTER_SUCCESS:
			console.log("in auth reducer REGISTER_SUCCESS")
		return {
			...state,
			isLoggedIn: false,
		};
		case REGISTER_FAIL:
			console.log("in auth reducer REGISTER_FAIL")
		return {
			...state,
			isLoggedIn: false,
		};
		case LOGIN_SUCCESS:
			console.log("in auth reducer LOGIN_SUCCESS")
			return {
				...state,
				isLoggedIn: true,
				user: payload.user,
			};
		case LOGIN_FAIL:
			console.log("in auth reducer LOGIN_FAIL")
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		case LOGOUT:
			console.log("in auth reducer LOGOUT")
		return {
			...state,
			isLoggedIn: false,
			user: null,
		};
		default:
		return state;
	}
}

// import {
// 	REGISTER_SUCCESS,
// 	REGISTER_FAIL,
// 	LOGIN_SUCCESS,
// 	LOGIN_FAIL,
// 	LOGOUT,
//   } from "../actions/types";
  
//   const user = JSON.parse(localStorage.getItem("user"));
  
//   const initialState = user
// 	? { isLoggedIn: true, user }
// 	: { isLoggedIn: false, user: null };
  
//   export default function (state = initialState, action) {
// 	const { type, payload } = action;
  
// 	switch (type) {
// 	  case REGISTER_SUCCESS:
// 		return {
// 		  ...state,
// 		  isLoggedIn: false,
// 		};
// 	  case REGISTER_FAIL:
// 		return {
// 		  ...state,
// 		  isLoggedIn: false,
// 		};
// 	  case LOGIN_SUCCESS:
// 		return {
// 		  ...state,
// 		  isLoggedIn: true,
// 		  user: payload.user,
// 		};
// 	  case LOGIN_FAIL:
// 		return {
// 		  ...state,
// 		  isLoggedIn: false,
// 		  user: null,
// 		};
// 	  case LOGOUT:
// 		return {
// 		  ...state,
// 		  isLoggedIn: false,
// 		  user: null,
// 		};
// 	  default:
// 		return state;
// 	}
//   }