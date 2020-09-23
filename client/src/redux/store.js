import {combineReducers, createStore, compose, applyMiddleware} from "redux";

import thunk from "redux-thunk";
import contractors from "./reducers/contractorsReducer";
import tasks from './reducers/tasksReducer'

const rootReducer = combineReducers({
    contractors,
    tasks
})
const composeEnhancers = compose

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


export default store