import { Box, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import LoadableButton from "../loadable-button/loadable-button";
import "./register-form.css"

export default function RegisterForm() {
  const { t } = useTranslation()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  return (
    <Grid className="register-form__container">
      <Box className="register-form__container-box" component="div">
        <Grid item>
          <h3 className="login-form__container-title">
            {t('register_area.title')}
          </h3>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box component="div" m={1}>
              <TextField
                fullWidth
                variant="outlined"
                label={t('register_area.first_name')}>
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box component="div" m={1}>
              <TextField
                fullWidth
                variant="outlined"
                label={t('register_area.last_name')}>
              </TextField>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('register_area.email')}>
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('register_area.email_confirmation')}>
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('register_area.password')}
              type="password">
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('register_area.password_confirmation')}
              type="password">
            </TextField>
          </Box>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <LoadableButton
              fullWidth
              variant="contained"
              color="primary"
              isLoading={loading}
              onClick={() => setLoading(true)}
            >
              {t('register_area.register')}
            </LoadableButton>
          </Box>
        </Grid>
        <Grid item>
          <Box onClick={() => history.replace('/login/signin')} className="register-form__register-label" component="div" m={1}>
            {t('register_area.login_label')}
          </Box>
        </Grid>
      </Box>
    </Grid >
  )
}