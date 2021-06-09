import { AuthState } from "./auth-context"

type AuthAction = {
  type: 'LOGIN' |
  'LOGIN_SUCCESS' |
  'LOGIN_ERROR' |
  'LOGOUT' |
  'REGISTER' |
  'REGISTER_SUCCESS'
  payload?: any
}

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggingIn: true,
        errorMessage: undefined
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        errorMessage: undefined
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        errorMessage: action.payload.message
      }
  }
  return state
}

export default AuthReducer
