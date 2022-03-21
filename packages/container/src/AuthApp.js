import { mount } from 'auth/AuthApp';
import withNavigation from './withNavigation';

const AuthApp = withNavigation(mount);

export default AuthApp;