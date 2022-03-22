import React, { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const withNavigation = (mount, props = {}) => (componentProps = {}) => {
    const elRef = useRef(null);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        const propsToPass = Object.keys(props).reduce((result, propName) => {
            const propValue = props[propName];
            return {
                ...result,
                [propName]: typeof propValue === 'function'? 
                    () => propValue(componentProps) : 
                    propValue
            };
        }, {});
        const { onParentNavigate } = mount(elRef.current, {
            initialPathname: location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                if (location.pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            ...propsToPass
        });
        const unsubscribe = history.listen(onParentNavigate);
        return () => unsubscribe();
    }, []);
    return <div ref={elRef} />
};

export default withNavigation;