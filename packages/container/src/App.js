import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './Header';
import AuthApp from './AuthApp';
import MarketingApp from './MarketingApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/auth' component={AuthApp} />
                        <Route path='/' component={MarketingApp} />
                    </Switch>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;