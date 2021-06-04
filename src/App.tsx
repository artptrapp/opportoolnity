import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Login from "./pages/login/login";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: "#FFF"
      }
    }
  })
  return (
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
  );
}
