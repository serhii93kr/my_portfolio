import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/uk.json';

// Функция для определения языка браузера или из localStorage
function getStartingLocale() {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    return savedLocale;
  }
  return 'en'; // По умолчанию английский
}

let uk = ua; // Переименование переменной для соответствия коду
const i18n = createI18n({
  legacy: false, // Используем Composition API
  locale: getStartingLocale(), // Язык по умолчанию
  fallbackLocale: 'en', // Язык, если перевод отсутствует
  messages: { 
    en,
    ru,
    uk,
  },
  globalInjection: true, // Делает $t доступным глобально
});

// Функция для изменения языка
export function setLocale(newLocale) {
  i18n.global.locale.value = newLocale;
  localStorage.setItem('locale', newLocale); // Сохраняем выбранный язык
}

export default i18n;
