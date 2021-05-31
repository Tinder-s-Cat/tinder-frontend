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
export function postLike({ UserId, CatId }) {
	return function (dispatch, getState) {
		axios({
			method: 'POST',
			url: BASE_URL + '/like',
			headers: { access_token: localStorage.access_token },
			data: {
				UserId,
				CatId
			}
		})
		.then(({ data }) => {
			console.log(data, 'INI DATA LIKE')
		})
		.catch((err) => {
			console.log(err);
		})
	} 
}
export function getCats() {
	return function (dispatch, getState) {
		axios({
			method: 'GET',
			url: BASE_URL + `/cat`,
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

export function addCat({ payload, userId }) {
	return function (dispatch, getState) {
		axios({
			method: 'POST',
			url: `${BASE_URL}/cat`,
			headers: { access_token: localStorage.access_token },
			data: payload,
		})
			.then(({ data }) => {
				// console.log('INI DATA>>>>', data)
				dispatch(fetchUserById({ userId }))
			})
			.catch((err) => {
				console.log(`err`, err)
			})
	}
}

export function deleteCat(payload) {
	return function (dispatch, getState) {
		axios({
			method: 'DELETE',
			url: `${BASE_URL}/cat/${payload.id}`,
			headers: { access_token: localStorage.access_token },
		}).then(({ data }) => {
			dispatch(fetchUserById({ userId: payload.userId }))
		})
	}
}

export function editCat({ payload, userId, id }) {
	return function (dispatch, getState) {
		console.log(payload, 'KUCING')
		axios({
			method: 'PUT',
			url: `${BASE_URL}/cat/${id}`,
			headers: { access_token: localStorage.access_token },
			data: payload,
		})
			.then(({ data }) => {
				// console.log('INI HASIL EDIT>>>>', data)
				dispatch(fetchUserById({ userId }))
			})
			.catch((err) => {
				console.log(`err`, err)
			})
	}
}

export function patchCat({ payload, userId, id }) {
	return function (dispatch, getState) {
		console.log(payload, 'KUCING')
		axios({
			method: 'PATCH',
			url: `${BASE_URL}/cat/${id}`,
			headers: { access_token: localStorage.access_token },
			data: payload,
		})
			.then(({ data }) => {
				// console.log('INI HASIL EDIT>>>>', data)
				dispatch(fetchUserById({ userId }))
			})
			.catch((err) => {
				console.log(`err`, err)
			})
	}
}
