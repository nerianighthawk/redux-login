export type Form = {
    type: 'text' | 'password',
    placeholder: string,
    value: string | number,
    onChange: Function
}

export type LoginResponse = {
    token: string
}

export type MyInfoResponse = {
    username: string,
    email: string
}
