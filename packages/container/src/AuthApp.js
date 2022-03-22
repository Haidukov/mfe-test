import { mount } from 'auth/AuthApp';
import withNavigation from './withNavigation';

const AuthApp = withNavigation(mount, {
    onSignIn: (props) => {
        props.onSignIn();   
    }
});

export default AuthApp;