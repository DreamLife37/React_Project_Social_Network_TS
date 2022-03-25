import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

// export type StoreType = {
//     _state: StatePropsType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StatePropsType
//     dispatch: (action: ActionsTypes) => void
// }

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export type ReduxStoreType = typeof store

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer
})
export let store = createStore(reducers)

console.log(store.getState())

