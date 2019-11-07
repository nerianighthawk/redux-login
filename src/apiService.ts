import store from './store'
import axios from 'axios'
import { SERVER_URI, LOGIN_URI, API_URI, URI_USER, URI_MYINFO, SESSIONID } from './constants'
import { LoginResponse, MyInfoResponse } from './types'

const createHeader = () => {
    const sessionid = localStorage.getItem(SESSIONID)
    return {headers: {Authorization: 'JWT ' + sessionid}}
}

export const login = () => {
    const uri = SERVER_URI + LOGIN_URI
    const form = store.getState().login
    return new Promise<LoginResponse>(function (ok, ng) {
        axios.post(uri, form).then(res => {
            const json = JSON.parse(res.request.response)
            ok(json)
        }).catch(err => {
            ng(err)
        })
    })
}

export const myInfo = () => {
    const uri = API_URI + URI_USER + URI_MYINFO
    const header = createHeader()
    return new Promise<MyInfoResponse>(function (ok, ng) {
        axios.get(uri, header).then(res => {
            const json = JSON.parse(res.request.response)
            ok(json)
        }).catch(err => {
            ng(err)
        })
    })
}
