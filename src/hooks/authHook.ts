import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store'
import useActions from '../useActions'
import { checkLogedIn } from '../actions/authAction'

export const useAuthHook = () => {
    const auth = useSelector((state: AppState) => state.auth)
    const [checkAuth] = useActions([checkLogedIn], [])

    useEffect(() => {
        checkAuth()
    }, [checkAuth])
    return auth
}