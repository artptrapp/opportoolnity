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
import Home from "./pages/home/home";
import HeaderBar from "./components/header-bar/header-bar";
import ApplicationMenu from "./components/application-menu/application-menu";
import MenuProvider from "./contexts/menu/menu-provider";

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
      <MenuProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <HeaderBar />
            <ApplicationMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
            </Switch>
          </Router>
        </ThemeProvider>
      </MenuProvider>
    </AuthProvider>
  );
}
