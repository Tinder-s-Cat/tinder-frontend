import { SET_PROFILEBYID } from './actionType'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export function setUserById(payload) {
	return { type: SET_PROFILEBYID, payload: payload }
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
