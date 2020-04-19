import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./Home";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Coffee from "./pages/Menu/Coffee/Coffee";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/menu/coffee" component={Coffee} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;