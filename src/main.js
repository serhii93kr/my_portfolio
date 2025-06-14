import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируем роутер
import i18n from './i18n'; // Импортируем i18n (создали ранее)
import { createPinia } from 'pinia'; // Импортируем Pinia
import { createHead } from '@vueuse/head'; // Импортируем @vueuse/head
import VueMq from 'vue-mq';

import './assets/styles/main.css';
import './assets/styles/desktop.css';
import './assets/styles/table.css';
import './assets/styles/mobile.css';

const app = createApp(App);
const pinia = createPinia(); // Создаем экземпляр Pinia
const head = createHead(); // Создаем экземпляр для управления head

// Конфигурация Vue MQ
app.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    widescreen: 1920
  },
  defaultBreakpoint: 'mobile'
});

app.use(router); // Используем роутер
app.use(i18n);   // Используем i18n
app.use(pinia);  // Используем Pinia
app.use(head);   // Используем @vueuse/head

app.mount('#app');
