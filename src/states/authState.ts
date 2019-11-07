import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { authActions } from '../actions/authAction'

export interface AuthState {
    isAuth: boolean,
    isLoading: boolean
}

const initialState: AuthState = {
    isAuth: false,
    isLoading: true
}

export const authReducer = reducerWithInitialState(initialState)
    .case(authActions.updateIsAuth, (state, isAuth) => (
        Object.assign({}, state, { isAuth })
    ))
    .case(authActions.updateIsLoading, (state, isLoading) => (
        Object.assign({}, state, { isLoading })
    ))
