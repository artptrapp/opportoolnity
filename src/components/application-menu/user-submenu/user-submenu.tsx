import { useContext } from "react"
import { MenuItem } from "react-pro-sidebar"
import AuthContext from "../../../contexts/auth/auth-context"
import User from "@material-ui/icons/Person"
import { useTranslation } from "react-i18next"
import { Box, Grid } from "@material-ui/core"
import "./user-submenu.css"
import { Link, useHistory } from 'react-router-dom';

export default function UserSubmenu() {
    const { isLoggedIn } = useContext(AuthContext)
    const { t } = useTranslation()

    const renderLoggedOutIcon = () => (
        <MenuItem icon={<User scale={2} />}>
            <Grid container>
                <Box component="span">
                    {t("menu.not_logged_in")}
                </Box>
                <Box className="usersubmenu__container__logged-out-secondary" component="span">
                    {t("menu.click_to_login")}
                </Box>
            </Grid>
            <Link to="/login" />
        </MenuItem>
    )

    if (isLoggedIn) {
        return <div>a</div>
    }

    return renderLoggedOutIcon()
}