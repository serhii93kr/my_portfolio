import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // 'light', 'dark' или 'system'
  const currentTheme = ref('system'); // Начнем с системной настройки

  function setTheme(theme) {
    currentTheme.value = theme;
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }

  function applyTheme(theme) {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let themeToApply = theme;

    if (theme === 'system') {
      themeToApply = systemPrefersDark ? 'dark' : 'light';
    }

    if (themeToApply === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Функция для инициализации темы при загрузке приложения
  function initializeTheme() {
      const savedTheme = localStorage.getItem('theme') || 'system';
      currentTheme.value = savedTheme; // Устанавливаем начальное значение из localStorage
      applyTheme(savedTheme); // Применяем тему

      // Слушаем изменения системной темы, если выбрано 'system'
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          if (currentTheme.value === 'system') {
              applyTheme('system');
          }
      });
  }


  // Следим за изменениями currentTheme (если нужно)
  // watch(currentTheme, (newTheme) => {
  //   applyTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  // });

  return { currentTheme, setTheme, initializeTheme };
});