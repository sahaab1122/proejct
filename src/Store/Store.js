import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducers from './Reducer/Cartreducer'
import thunk from 'redux-thunk'

const configureStore = combineReducers({
    cartReducers:cartReducers
})

const store = createStore(configureStore, applyMiddleware(thunk));

export default store;