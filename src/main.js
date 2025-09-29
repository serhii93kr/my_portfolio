import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import './assets/styles/main.css';
import './assets/styles/desktop.css';
import './assets/styles/table.css';
import './assets/styles/mobile.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(createHead());

app.mount('#app');