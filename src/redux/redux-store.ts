import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";

type ReducersType = typeof rootReducer

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})
export let store = createStore(rootReducer)

export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store

console.log(store.getState())

