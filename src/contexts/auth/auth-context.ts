import React from "react"

export type AuthState = {
    isLoggingIn: boolean,
    isLoggedIn: boolean,
    signIn: Function,
    errorMessage?: string
}

export const defaultContextValue: AuthState = {
    isLoggingIn: false,
    isLoggedIn: false,
    signIn: () => { },
    errorMessage: undefined
}

const AuthContext = React.createContext<AuthState>(defaultContextValue)

export default AuthContext
