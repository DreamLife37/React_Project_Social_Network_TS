import {RootAppActionsType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {setError, setIsLoading} from "../../../redux/app-reducer";
import {CommonResponseType} from "../../../api/api";
import {toggleIsFetching} from "../../../redux/users-reducer";

export const handleServerNetworkError = (dispatch: Dispatch<RootAppActionsType>, error: string) => {
    dispatch(setError(error))
    dispatch(setIsLoading(false))
    dispatch(toggleIsFetching(false))
}

export const handleServerAppError = <T>(data: CommonResponseType<T>, dispatch: Dispatch<RootAppActionsType>) => {
    if (data.messages.length) {
        dispatch(setError(data.messages[0]))

    } else {
        dispatch(setError("Some error occurred"))
    }
    dispatch(setIsLoading(false))
    dispatch(toggleIsFetching(false))
}