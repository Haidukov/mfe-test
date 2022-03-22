import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
   const app = createApp(Dashboard);
   app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
    const devEl = document.getElementById('dashboard-dev');
    if (devEl) {
        mount(devEl);
    }
}

export { mount };
