import { legacy_createStore as createStore } from "redux"
import { rootReducer } from "../reducers/rootReducer"

// this func make able to see the JSON were we have all the state of the app
import { composeWithDevTools } from "redux-devtools-extension"

export const createAppStore = () => {
    let store  = createStore(rootReducer, composeWithDevTools())

    return store;
}