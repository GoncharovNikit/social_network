import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navbar: navbarReducer,
    users: usersReducer,
});

let store = createStore(reducers);
export default store;