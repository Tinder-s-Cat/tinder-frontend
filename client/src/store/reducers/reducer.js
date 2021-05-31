import {
	SHOWCATID,
	SET_PROFILEBYID,
	SET_FRIENDS,
	SET_CHAT_MESSAGE,
} from '../actions/actionType'

const initialState = {
	listFriends: [],
	randomCards: [],
	chatMessage: [],
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
		case SET_CHAT_MESSAGE:
			return { ...state, chatMessage: payload }
		default:
			return state
	}
}

export default reducer
