import {combineReducers, createStore} from "redux";
import timerReducer from "./timerReducer";

let reducers = combineReducers(
    {
    currentTime: timerReducer
    }
);


let store = createStore(reducers);


export default store;