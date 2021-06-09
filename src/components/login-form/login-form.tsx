import { Box, Grid, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import AuthContext from "../../contexts/auth/auth-context";
import LoadableButton from "../loadable-button/loadable-button";
import "./login-form.css"

export default function LoginForm() {
  const { t } = useTranslation()
  const history = useHistory()
  const { signIn, isLoggingIn, errorMessage } = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Grid className="login-form__container">
      <Box className="login-form__container-box" component="div">
        <Grid className="login-form__header-container" item>
          <h3 className="login-form__container-title">
            {t('login_area.title')}
          </h3>
          <Box className="login-form__container-login-feedback" component="span" m={1}>
            {errorMessage}
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('login_area.username')}
              onChange={ev => setUsername(ev.target.value)}
            >
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('login_area.password')}
              type="password"
              onChange={ev => setPassword(ev.target.value)}
            >
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <LoadableButton
              isLoading={isLoggingIn}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => signIn(username, password)}
            >
              {t('login_area.login')}
            </LoadableButton>
          </Box>
        </Grid>
        <Grid item>
          <Box onClick={() => history.push('/login/signup')} className="login-form__register-label" component="div" m={1}>
            {t('login_area.register_label')}
          </Box>
        </Grid>
      </Box>
    </Grid >
  )
}