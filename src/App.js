import React from 'react';
import styles from './App.module.css';
import {
    Router,
    Route,
    Redirect,
} from 'react-router-dom'
import store from './store'
import Dashboard from "./components/dashboard/Dashboard";
import createHistory from 'history/createBrowserHistory'

const history = createHistory({
    basename: '/'
});

const Unauthenticated = () => {
    return <div>Unauthenticated</div>
};

function isAuthenticated() {
    return store.getState().authenticated;
}

function App() {
    return (
        <div className={styles.app}>
            <Router history={history}>
                <Route
                    exact={true}
                    path="/"
                    render={() => isAuthenticated() ? <Redirect to="/todo/list"/> : <Unauthenticated/>}
                />
                <Route
                    path="/todo/:type"
                    render={() => isAuthenticated() ? <Dashboard/> : <Redirect to="/"/>}
                />
            </Router>
        </div>
    );
}

export default App;
