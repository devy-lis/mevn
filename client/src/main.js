import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/app.css'
import axios from 'axios';

// Setting up default vue's http modules for api calls
createApp.$http = axios
// createApp.prototype.$http = axios;

// Load the token from browser locaSstorage
const token = localStorage.getItem('token');

// Append default axios authorization headers if exists
if (token) {
    createApp.$http.defaults.headers.common['Authorization'] = token;
    // createApp.prototype.$http.defaults.headers.common['Authorization'] = token;
}


createApp(App).use(store).use(router).mount('#app')
