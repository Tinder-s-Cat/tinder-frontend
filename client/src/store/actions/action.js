import {
	SET_PROFILEBYID,
	SET_FRIENDS,
	SET_CHAT_MESSAGE,
	SHOWGETCAT,
	SET_RANDOMCARD,
} from './actionType'
import axios from 'axios'
import Swal from 'sweetalert2'
import socket from '../../api/socket'
const BASE_URL = 'http://localhost:3000'

export function setUserById(payload) {
	return { type: SET_PROFILEBYID, payload: payload }
}
export function setFriends(payload) {
	return { type: SET_FRIENDS, payload: payload }
}
export function setChatMessage(payload) {
	return { type: SET_CHAT_MESSAGE, payload: payload }
}

export function addChatMessage(payload) {
	return function (dispatch, getState) {
		let msg = JSON.stringify(getState().chatMessage)
		dispatch(setChatMessage([...JSON.parse(msg), payload]))
	}
}
export function fetchChatMessage(payload) {
	return function (dispatch, getState) {
		axios({
			method: 'GET',
			url: `${BASE_URL}/chatroom/${payload.ChatRoomId}/${payload.isMatchId}`,
			headers: {
				access_token: localStorage.access_token,
			},
		})
			.then(({ data }) => {
				dispatch(setChatMessage(data))
				console.log('<<<<<<<')
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

export function fetchFriendMatch(payload) {
	return function (dispatch, getState) {
		axios({
			method: 'GET',
			url: `${BASE_URL}/friend`,
			headers: {
				access_token: localStorage.access_token,
			},
		})
			.then(({ data }) => {
				// console.log(`data`, data)
				dispatch(setFriends(data))
			})
			.catch((err) => {
				console.log(err, '<<<<fetchFriend')
			})
	}
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
				// console.log(`data`, data)
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
				CatId,
			},
		})
			.then(({ data }) => {
				if (data.message === 'You got a new match!') {
					socket.emit('refetch-match', '')
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
export function getCats(payload) {
	return function (dispatch, getState) {
		let query = payload.length === 0 ? '' : `?gender=${payload}`
		axios({
			method: 'GET',
			url: BASE_URL + `/cat${query}`,
			headers: { access_token: localStorage.access_token },
		})
			.then(({ data }) => {
				// console.log(data, 'INI DATA NYA')
				dispatch({ type: SHOWGETCAT, payload: data })
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
export function skipCard() {
	return function (dispatch, getState) {
		let cards = JSON.parse(JSON.stringify(getState().randomCards))
		cards.shift()
		dispatch(setRandomCard(cards))
	}
}

export function addCat({ payload, userId }) {
	console.log(payload.get('profilePicture'), 'payload')

	return function (dispatch, getState) {
		axios({
			method: 'POST',
			url: `${BASE_URL}/cat`,
			headers: {
				access_token: localStorage.access_token,
			},
			data: payload,
		})
			.then((response) => {
				console.log('INI DATA>>>>', response)
				dispatch(fetchUserById({ userId }))
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Successfully Added Your Cats',
					showConfirmButton: false,
					timer: 1500,
				})
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
			Swal.fire({
				title: 'Are you sure?',
				text: 'You will not be able to return this card!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'delete',
			}).then((result) => {
				if (result.isConfirmed) {
					dispatch(fetchUserById({ userId: payload.userId }))
					Swal.fire(
						'Deleted!',
						'Your card has been deleted successfully',
						'success'
					)
				}
			})
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
				const Toast = Swal.mixin({
					toast: true,
					position: 'top-end',
					showConfirmButton: false,
					timer: 3000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.addEventListener('mouseenter', Swal.stopTimer)
						toast.addEventListener('mouseleave', Swal.resumeTimer)
					},
				})

				Toast.fire({
					icon: 'success',
					title: 'Edit success!',
				})
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
