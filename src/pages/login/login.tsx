import { Box, Container, Grid } from '@material-ui/core'
import {
  Route,
  Switch
} from "react-router-dom";
import LoginForm from '../../components/login-form/login-form'
import LoginMotto from '../../components/login-motto/login-motto'
import RegisterForm from '../../components/register-form/register-form';
import "./login.css"
import logo from "../../images/tool-easy-logo.png"

export default function Login() {
  return (
    <Container className="login-page__container">
      <Grid container>
        <Grid item xl={8} md={8}>
          <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block' }}>
            <LoginMotto />
          </Box>
        </Grid>
        <Grid className="login-page__form-container" item xl={4} md={4} sm={12} xs={12}>
          <Box component="div" m={1}>
            <Box className="login-page__logo-container" component="div">
              <img src={logo} height={200} />
            </Box>
            <Switch>
              <Route exact path={["/login", "/login/signin"]}>
                <LoginForm />
              </Route>
              <Route exact path="/login/signup">
                <RegisterForm />
              </Route>
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}