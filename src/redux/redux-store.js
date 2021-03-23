import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navbar: navbarReducer,
});

let store = createStore(reducers);
export default store;