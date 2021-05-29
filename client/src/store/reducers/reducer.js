import { 
    SHOWUSER
} from '../actions/actionType'

const initialState = {
    listFriends: [],
    randomCards: [],
    loading: false,
    error: null,
}

function reducer (state = initialState, action)  {
    const { type, payload } = action
    switch (type) {
        case SHOWUSER:
        return { ...state, user: payload }
        default:
        return state
    }
}

export default reducer