import { MenuState } from "./menu-context"

type MenuAction = {
  type: 'TOGGLE_OPEN'
}

const MenuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case 'TOGGLE_OPEN':
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}

export default MenuReducer
