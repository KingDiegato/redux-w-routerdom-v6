import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducers";


export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
    }
)