import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPathname } = {}) => {
    const history = defaultHistory || createMemoryHistory();
    if (history.location.pathname !== initialPathname) {
        history.push(initialPathname);
    }

    const onParentNavigate = ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
            history.push(nextPathname);
        }
    };

    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate
    }
};

if (process.env.NODE_ENV === 'development') {
    const devEl = document.getElementById('auth-dev');
    if (devEl) {
        mount(devEl, {
            defaultHistory: createBrowserHistory()
        });
    }
}

export { mount };
