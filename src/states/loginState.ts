import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { loginActions } from '../actions/loginAction'

export interface LoginState {
    username: string,
    password: string,
}

const initialState: LoginState = {
    username: '',
    password: '',
}

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.updateUsername, (state, username) => (
        Object.assign({}, state, { username })
    ))
    .case(loginActions.updatePassword, (state, password) => (
        Object.assign({}, state, { password })
    ))
