import React, { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const withNavigation = (mount) => () => {
    const elRef = useRef(null);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        const { onParentNavigate } = mount(elRef.current, {
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
    return <div ref={elRef} />
};

export default withNavigation;