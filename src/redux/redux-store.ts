import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

type ReducersType = typeof rootReducer

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export let store = createStore(rootReducer)

export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store

console.log(store.getState())

// @ts-ignore
window.store=store

