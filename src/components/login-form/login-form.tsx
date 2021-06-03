import { Box, Button, Grid, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import "./login-form.css"

export default function LoginForm() {
  const { t } = useTranslation()
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
            <Button fullWidth variant="contained" color="primary">
              {t('login_area.login')}
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box className="login-form__register-label" component="span" m={1}>
            {t('login_area.register_label')}
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}