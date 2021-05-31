import { SHOWCATID, SET_PROFILEBYID, SHOWGETCAT, SET_RANDOMCARD } from '../actions/actionType'

const initialState = {
	listFriends: [],
	randomCards: [
		
	],
	profile: {},
	loading: false,
	error: null,
}

function reducer(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case SHOWCATID:
			return { ...state, listFriends: payload }
		case SET_PROFILEBYID:
			return { ...state, profile: payload }
		case SHOWGETCAT:
			// console.log(payload, 'INI PAYLOAD NYA');
			return { ...state, randomCards: payload }
		case SET_RANDOMCARD:
			return { ...state, randomCards: payload } 
		default:
			return state
	}
}

export default reducer
