import { useEffect, useReducer } from 'react'
import AuthContext, { AuthState, defaultContextValue } from './auth-context'
import AuthReducer from './auth-reducer'
import * as config from '../../config/api-config'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import firebase from 'firebase'
import { UserRecord } from './auth-types'

type Props = {
  children?: any
}

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, defaultContextValue)
  const { t } = useTranslation()

  const checkIdToken = async (token: string) => {
    return axios.post(`${config.SERVER_URL}/auth/validate-token`, {
      token
    })
  }

  const signIn = (
    username: string,
    password: string) => {
    dispatch({ type: 'LOGIN' })

    axios.post(`${config.SERVER_URL}/auth/verify`, {
      email: username,
      password
    }).then((result) => {
      if (result.data.token) {
        const token = result.data.token
        localStorage.setItem('auth_token', result.data.token)
        return firebase.auth().signInWithCustomToken(token)
      }

      dispatch({ type: 'LOGIN_ERROR', payload: { message: t('error_messages.invalid_login_attempt') } })
    })
      .then(tokenLoginResult => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: tokenLoginResult?.user })
      })
      .catch(_ => {
        dispatch({ type: 'LOGIN_ERROR', payload: { message: t('error_messages.invalid_login_attempt') } })
      })
  }

  const register = () => {
    dispatch({ type: 'REGISTER' })
    setTimeout(() => {
      dispatch({ type: 'REGISTER_SUCCESS' })
    }, 1500)
  }

  useEffect(() => {
    const checkExistentLocalStorageAuth = async () => {
      const authToken = localStorage.getItem('auth_token')

      if (authToken) {
        dispatch({ type: 'LOGIN' })

        try {
          const tokenLoginResult = await firebase.auth().signInWithCustomToken(authToken)
          const idToken = await firebase.auth().currentUser?.getIdToken()
          if (!idToken) {
            throw new Error('No id token')
          }

          const checkIdTokenResult = await checkIdToken(idToken)
          const userData = checkIdTokenResult.data as UserRecord
          dispatch({ type: 'LOGIN_SUCCESS', payload: userData })

        } catch (e) {
          dispatch({ type: 'LOGIN_ERROR', payload: { message: '' } })
        }
      }
    }

    checkExistentLocalStorageAuth()

  }, [])

  const value: AuthState = {
    ...state,
    signIn
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider