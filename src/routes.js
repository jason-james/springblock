import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import { Sidebar } from "./common/nav"
import { Home } from "./views/home"

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Nav/>
                <div style={{marginLeft:"15em", marginRight:"1em"}}>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    );
}

const Nav = withRouter(Sidebar)

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}