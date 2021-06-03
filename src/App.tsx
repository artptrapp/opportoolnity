import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";


import Login from "./pages/login/login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />

          {/* Redirects all 404 to the login page */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
