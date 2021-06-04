import { Box, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import LoadableButton from "../loadable-button/loadable-button";
import "./login-form.css"

export default function LoginForm() {
  const { t } = useTranslation()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  return (
    <Grid className="login-form__container">
      <Box component="div">
        <Grid item>
          <h3>
            {t('login_area.title')}
          </h3>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('login_area.username')}>
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('login_area.password')}
              type="password">
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <LoadableButton
              loading={loading}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => setLoading(true)}
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
    </Grid>
  )
}