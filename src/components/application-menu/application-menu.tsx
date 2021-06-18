import { useContext } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import AuthContext from '../../contexts/auth/auth-context';
import MenuContext from '../../contexts/menu/menu-context';
import useUrl from '../../hooks/useUrl';
import "./application-menu.css";
import UserSubmenu from './user-submenu/user-submenu';

export default function ApplicationMenu() {
    const { isLoggedIn } = useContext(AuthContext)
    const { isOpen } = useContext(MenuContext)

    const url = useUrl()

    const forbiddenUrls = [
        '/login',
        '/login/signin',
        '/login/signup'
    ]

    if (!url || forbiddenUrls.some(forbidden => url.includes(forbidden))) {
        return null
    }

    return (
        <ProSidebar className="application-menu__container" collapsed={!isOpen} collapsedWidth="0px" >
            <Menu iconShape="circle">
                <UserSubmenu />
                {isLoggedIn && <MenuItem>Logout</MenuItem>}
            </Menu>
        </ProSidebar>
    )
}