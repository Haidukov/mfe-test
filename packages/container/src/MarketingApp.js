import React, { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const marketingRef = useRef(null);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        const { onParentNavigate } = mount(marketingRef.current, {
            initialPathname: location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                if (location.pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        const unsubscribe = history.listen(onParentNavigate);
        return () => unsubscribe();
    }, []);
    return <div ref={marketingRef} />
};

export default MarketingApp;