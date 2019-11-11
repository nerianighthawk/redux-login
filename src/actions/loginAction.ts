import actionCreatorFactory, { Action } from 'typescript-fsa'
import { Dispatch } from 'react'
import { login } from '../apiService'
import { SESSIONID, CLIENT_URI } from '../constants'
import { push } from 'connected-react-router'

const actionCreator = actionCreatorFactory()

export const loginActions = {
    updateUsername: actionCreator<string>('ACTIONS_UPDATE_NAME'),
    updatePassword: actionCreator<string>('ACTIONS_UPDATE_PASSWORD'),
}

const setLocal = async (key: string, value: string) => {
    return Promise.resolve().then(function () {
        localStorage.setItem(key, value)
    })
}

export const updateUsername = (v: string) => (
    async (dispatch: Dispatch<Action<string>>) => dispatch(loginActions.updateUsername(v))
)

export const updatePassword = (v: string) => (
    async (dispatch: Dispatch<Action<string>>) => dispatch(loginActions.updatePassword(v))
)

export const submit = () => (
    async (dispatch: Dispatch<Action<{} | { params: {} } & { error: {} }>>) => {
        login()
            .then(async res => {
                await setLocal(SESSIONID, res.token)
                dispatch(push(CLIENT_URI))
            })
            .catch(() => { })
    }
)
