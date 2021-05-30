import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer'

const rootReducers = combineReducers({
    reducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store