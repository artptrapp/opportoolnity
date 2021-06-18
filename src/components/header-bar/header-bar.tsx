import { Box, Grid } from "@material-ui/core"
import { useContext } from "react"
import useUrl from "../../hooks/useUrl"
import "./header-bar.css"
import { Menu, MenuOpen } from '@material-ui/icons';
import MenuContext from "../../contexts/menu/menu-context"

export default function HeaderBar() {
    const { isOpen, toggleOpen } = useContext(MenuContext)
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
        <Grid className="header-bar__container" container>
            <Grid item className="header-bar__container-menu-icon">
                <Box onClick={() => toggleOpen()} component="div">
                    {
                        isOpen ?
                            <MenuOpen fontSize="inherit" /> :
                            <Menu fontSize="inherit" />
                    }
                </Box>
            </Grid>
        </Grid>
    )
}