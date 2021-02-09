import {counterReducer} from "./reducer";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    count: counterReducer
})
export const store = createStore(reducer)
export type rootStateType = ReturnType<typeof reducer>