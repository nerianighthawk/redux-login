import { useSelector } from 'react-redux'
import { AppState } from '../store'
import useActions from '../useActions'
import { updateUsername, updatePassword, submit } from '../actions/loginAction'
import { TYPE_TEXT, USER_ID, TYPE_PASSWORD, PASSWORD } from '../constants'
import { Form } from '../types'

export const useLoginHook = () => {
    const login = useSelector((state: AppState) => state.login)
    const [uName, uPass, s] = useActions([updateUsername, updatePassword, submit], [])
    const formList = [
        { type: TYPE_TEXT, placeholder: USER_ID, value: login.username, onChange: uName },
        { type: TYPE_PASSWORD, placeholder: PASSWORD, value: login.password, onChange: uPass }
    ] as Form[]
    return {
        form: formList,
        submit: s
    }
}