import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { loginReducer, LoginState } from './states/loginState'
import { createBrowserHistory, History } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { authReducer, AuthState } from './states/authState'
import axios from 'axios'

export const history = createBrowserHistory()

export type AppState = {
    login: LoginState,
    auth: AuthState,
}

const createRootReducer = (history: History<any>) => combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    auth: authReducer,
})

const thunkWithAxios = thunk.withExtraArgument(axios)

const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunkWithAxios
        )
    )
)

export default store
