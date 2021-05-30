import { SHOWCATID, SET_PROFILEBYID, SHOWGETCAT, SET_RANDOMCARD } from '../actions/actionType'

const initialState = {
	listFriends: [],
	randomCards: [
		{
			"id": 1,
			"UserId": 1,
			"name": "mengki",
			"gender": "male",
			"age": 3,
			"race": "domestic",
			"status": true,
			"profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/1200px-American_Shorthair.jpg",
			"description": "kucing jantan umur 3 tahun cari pasangan, dijamin sehat",
			"createdAt": "2021-05-29T06:29:31.709Z",
			"updatedAt": "2021-05-29T06:29:31.709Z",
			"User": {
				"id": 1,
				"username": "test3",
				"location": "jakarta barat",
				"email": "test3@mail.com",
				"password": "$2b$10$vMGN3Ns/F1GqsNeZqBapDuhlVwjv1pqnhlgSEnlTJwunjtCdA3ZOq",
				"profilePicture": "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg",
				"createdAt": "2021-05-29T06:08:35.987Z",
				"updatedAt": "2021-05-29T06:08:35.987Z"
			}
		},
		{
			"id": 4,
			"UserId": 2,
			"name": "Pikachu",
			"gender": "female",
			"age": 2,
			"race": "sphynx",
			"status": true,
			"profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/American_Shorthair.jpg/1200px-American_Shorthair.jpg",
			"description": "ayo kenalan!!",
			"createdAt": "2021-05-29T09:13:22.324Z",
			"updatedAt": "2021-05-29T09:21:24.122Z",
			"User": {
				"id": 2,
				"username": "test3",
				"location": "jakarta barat",
				"email": "test3@mail.com",
				"password": "$2b$10$DtDM3H1OKMLrKsj1iwcYFuvFzTOZgldr57VfJiOLRqWcWKUVeeuwy",
				"profilePicture": "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg",
				"createdAt": "2021-05-29T09:11:52.415Z",
				"updatedAt": "2021-05-29T09:11:52.415Z"
			}
		}
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
			console.log(payload, 'INI PAYLOAD NYA');
			return { ...state, randomCards: payload }
		case SET_RANDOMCARD:
			return { ...state, randomCards: payload } 
		default:
			return state
	}
}

export default reducer
