import * as React from 'react'
import { Route, Redirect } from 'react-router'
import { CLIENT_URI, LOGIN_URI } from '../constants'
import { useAuthHook } from '../hooks/authHook'

interface AuthProps {
    children: React.ReactNode
}

export const AuthComponent: React.SFC<AuthProps> = (props) => {
    const auth = useAuthHook()

    return (
        <div>
            {auth.isLoading
                ? (<div />)
                : auth.isAuth
                    ? (<Route children={props.children} />)
                    : (<Redirect to={CLIENT_URI + LOGIN_URI} />)
            }
        </div>
    )
}
