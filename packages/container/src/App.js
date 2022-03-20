import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Header from './Header';
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
                    <MarketingApp />    
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};

export default App;