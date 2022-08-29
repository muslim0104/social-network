import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./components/reducers/profile-reducer";
import {dialogReducer} from "./components/reducers/dialog-reducer";
import Friends from "./components/Friends/Friends";
import {friendsReducer} from "./components/reducers/friends-reducer";
import {UserReducer} from "./components/reducers/users-reducer";

export type RootState = ReturnType<typeof reducers>


let reducers=combineReducers({
    profilePage:profileReducer,
    messages:dialogReducer,
    friendsPage:friendsReducer,
    usersPage:UserReducer,
})

export let store=legacy_createStore(reducers)
