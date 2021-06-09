import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import AuthProvider from "./contexts/auth/auth-provider";
import Login from "./pages/login/login";

import firebase from 'firebase'
import firebaseConfig from './config/firebase-config'

export default function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#FFF"
      }
    }
  })
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">

              {/* Redirects all 404 to the login page */}
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
