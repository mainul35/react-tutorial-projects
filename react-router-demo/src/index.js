import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

const dashboardComponent = () => (
    <div>
        <h3>This is dashboard page</h3>
    </div>
)

const loginPage = () => (
    <div>
        <h3>This is login page</h3>
    </div>
)

const notFoundPage = () => (
    <div>
        <h3>404: Not Found</h3>
        <Link to="/">Go Home</Link>
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={dashboardComponent}/>
            <Route exact path='/login' component={loginPage}/>
            <Route component={notFoundPage}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));