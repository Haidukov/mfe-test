import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import Header from './Header';
import Progress from './Progress';

const AuthApp = lazy(() => import('./AuthApp'));
const MarketingApp = lazy(() => import('./MarketingApp'));
const DashboardApp = lazy(() => import('./DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

const App = () => {
    const [isSignedIn, setSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <Suspense fallback={<Progress/>}>
                <StylesProvider generateClassName={generateClassName}>
                    <Header signedIn={isSignedIn} onSignOut={() => setSignedIn(false)} />
                </StylesProvider>
                <Switch>
                    <Route path='/auth'>
                        <AuthApp onSignIn={() => {
                            setSignedIn(true)
                        }} />
                    </Route>
                    <Route path='/dashboard'>
                        {!isSignedIn && <Redirect to='/' />}
                        <DashboardApp />
                    </Route>
                    <Route path='/' component={MarketingApp} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;