import './assets/main.css';
import Vue3Lazyload from 'vue3-lazyload';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Vue3Lazyload, {
    lazyComponent: true
});
app.use(createPinia())
app.use(router)

app.mount('#app')
