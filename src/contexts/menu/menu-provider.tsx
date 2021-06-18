import { useReducer } from 'react'
import MenuContext, { MenuState, defaultContextValue } from './menu-context'
import MenuReducer from './menu-reducer'

type Props = {
  children?: any
}

const MenuProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(MenuReducer, defaultContextValue)

  const toggleOpen = () => {
    dispatch({ type: 'TOGGLE_OPEN' })
  }

  const value: MenuState = {
    ...state,
    toggleOpen
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider