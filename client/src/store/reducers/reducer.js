import { SHOWCATID, SET_PROFILEBYID, SET_FRIENDS } from '../actions/actionType'

const initialState = {
	listFriends: [],
	randomCards: [],
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
		case SET_FRIENDS:
			return { ...state, listFriends: payload }
		default:
			return state
	}
}

export default reducer
