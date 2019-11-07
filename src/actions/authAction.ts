import actionCreatorFactory, { Action } from 'typescript-fsa'
import { Dispatch } from 'react'
import { myInfo } from '../apiService'

const actionCreator = actionCreatorFactory()

export const authActions = {
    updateIsAuth: actionCreator<boolean>('ACTIONS_UPDATE_IS_AUTH'),
    updateIsLoading: actionCreator<boolean>('ACTION_UPDATE_ISLOADING')
}

export const checkLogedIn = () => {
    return async (dispatch: Dispatch<Action<boolean>>) => {
        return myInfo().then(() => {
            dispatch(authActions.updateIsAuth(true))
            dispatch(authActions.updateIsLoading(false))
        }).catch(() => {
            dispatch(authActions.updateIsAuth(false))
            dispatch(authActions.updateIsLoading(false))
        })
    }
}
