import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import MarketingApp from './MarketingApp';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />    
            </div>
        </BrowserRouter>
    );
};

export default App;