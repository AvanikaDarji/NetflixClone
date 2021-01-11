import React from "react";
import "./styles.css";
/*import { Calendar } from "./components/calender";*/
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";
/*import { Counter } from "./components/counterExample";*/
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
export default function App() {
  const { user } = useAuthListener();

  return (
    <div className="App">
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </div>
  );
}
