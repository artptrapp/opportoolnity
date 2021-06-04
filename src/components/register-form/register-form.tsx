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
      <Box component="div">
        <Grid item>
          <h3>
            {t('register_area.title')}
          </h3>
        </Grid>
        <Grid item>
          <Box component="div" m={1}>
            <TextField
              fullWidth
              variant="outlined"
              label={t('register_area.username')}>
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
              loading={loading}
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
    </Grid>
  )
}