import { 
    SHOWCATID
} from '../actions/actionType'

const initialState = {
    listFriends: [
        {
            id: 1,
            username: 'diaz',
            email: 'diaz123@mail.com',
            pictureProfil: 'https://images.unsplash.com/flagged/photo-1622311584622-81990bfc12fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
            location: 'yogyakarta',
            cats: [{
                name: 'milo',
                CatId: 1,
                isActive: true
            }]
        },
        {
            id: 2,
            username: 'majid',
            email: 'majid123@mail.com',
            pictureProfil: 'https://images.unsplash.com/flagged/photo-1622311584622-81990bfc12fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
            location: 'jakarta',
            cats: [{
                name: 'garfile',
                CatId: 2,
                isActive: true
            }]
        }
    ],
    randomCards: [],
    loading: false,
    error: null,
}

function reducer (state = initialState, action)  {
    const { type, payload } = action
    switch (type) {
        case SHOWCATID:
            return { ...state, listFriends: payload }
        default:
        return state
    }
}

export default reducer