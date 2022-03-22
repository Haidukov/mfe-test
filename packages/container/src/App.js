import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './Header';
import Progress from './Progress';

const AuthApp = lazy(() => import('./AuthApp'));
const MarketingApp = lazy(() => import('./MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    const [isSignedIn, setSignedIn] = useState(false);
    return (
            <BrowserRouter>
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
                        <Route path='/' component={MarketingApp} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
    );
};

export default App;