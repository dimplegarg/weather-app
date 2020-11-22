import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./login";
import Weather from "./App";

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={(props) => ( localStorage.getItem('token') ?  (<Redirect to="/weather" />) : (<Login {...props} />) )} />
                <Route exact path="/weather" render={(props) => ( localStorage.getItem('token') ?  (<Weather {...props} />) : (<Redirect to="/" />) )} />
            </Switch>
        </Router>
    )
}

export default AppRoute;