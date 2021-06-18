import React from "react"

export type MenuState = {
    isOpen: boolean
    toggleOpen: Function
}

export const defaultContextValue: MenuState = {
    isOpen: false,
    toggleOpen: () => undefined
}

const MenuContext = React.createContext<MenuState>(defaultContextValue)

export default MenuContext
