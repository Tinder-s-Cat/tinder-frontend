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

export function addCat({payload, userId}){
	return function (dispatch, getState){
		axios({
			method: "POST",
			url: `${BASE_URL}/cat`,
			headers: { access_token: localStorage.access_token },
			data: payload
		})
		.then(({data})=>{
			// console.log('INI DATA>>>>', data)
			dispatch(fetchUserById({userId}))
		})
		.catch((err) => {
			console.log(`err`, err)
		})
	}
}

export function editCat({payload, userId, id}){
	return function(dispatch,getState){
		console.log(payload, "KUCING")
		axios({
			method: "PUT",
			url: `${BASE_URL}/cat/${id}`,
			headers: { access_token: localStorage.access_token },
			data: payload
		})
		.then(({data})=>{
			// console.log('INI HASIL EDIT>>>>', data)
			dispatch(fetchUserById({userId}))
		})
		.catch((err) => {
			console.log(`err`, err)
		})

	}

}

export function patchCat({payload, userId, id}){
	return function(dispatch,getState){
		console.log(payload, "KUCING")
		axios({
			method: "PATCH",
			url: `${BASE_URL}/cat/${id}`,
			headers: { access_token: localStorage.access_token },
			data: payload
		})
		.then(({data})=>{
			// console.log('INI HASIL EDIT>>>>', data)
			dispatch(fetchUserById({userId}))
		})
		.catch((err) => {
			console.log(`err`, err)
		})

	}
}
