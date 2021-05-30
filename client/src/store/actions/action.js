import { 
	SET_PROFILEBYID,
	SHOWGETCAT,
	SET_RANDOMCARD
} from './actionType'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export function setUserById(payload) {
	return { type: SET_PROFILEBYID, payload: payload }
}
export function setRandomCard(payload) {
	return { type: SET_RANDOMCARD, payload: payload }
}
export function fetchUserById(payload) {
	return function (dispatch, getState) {
		axios({
			method: 'GET',
			url: `${BASE_URL}/friend/${payload.userId}`,
			headers: { access_token: localStorage.access_token },
		})
			.then(({ data }) => {
				console.log(`data`, data)
				dispatch(setUserById(data))
			})
			.catch((err) => {
				console.log(`err`, err)
			})
	}
}
export function getCats() {
	return function (dispatch, getState) {
		axios({
			method: 'GET',
			url: BASE_URL + `/dashboard/`,
			headers: { access_token: localStorage.access_token },
		})
		.then(({ data }) => {
			console.log(data, 'INI DATA NYA');
			dispatch({ type: SHOWGETCAT, payload: data })
		})
		.catch((err) => {
			console.log(err);
		})
	}
}
export function skipCard() {
	return function(dispatch, getState) {
		let cards = JSON.parse(JSON.stringify(getState().randomCards))
		cards.shift()
		dispatch(setRandomCard(cards))
	}
}