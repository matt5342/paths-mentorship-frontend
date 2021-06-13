import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
	const { type, payload } = action;
	console.log("In message reducer")
	console.log("type: " + type)
	console.log("payload: " + payload)
	switch (type) {
		case SET_MESSAGE:
			return { message: payload };

		case CLEAR_MESSAGE:
			console.log("clearing message")
			return { message: "" };

		default:
			return state;
	}
}
