<script setup>
import { useThemeStore } from '@/store/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore); // Делаем реактивным
const { setTheme } = themeStore;

function toggleTheme() {
  // Простая логика переключения: light -> dark -> system -> light ...
  // Можно сделать сложнее с выбором из 3 опций
  const nextTheme = currentTheme.value === 'light' ? 'dark' : (currentTheme.value === 'dark' ? 'system' : 'light');
  setTheme(nextTheme);
}

// Или кнопки для выбора конкретной темы
// function selectTheme(theme) {
//   setTheme(theme);
// }
</script>

<template>
  <div class="theme-switcher">
    <button @click="toggleTheme">
      Сменить тему (Текущая: {{ currentTheme }})
    </button>
    {/* Или кнопки для выбора:
    <button @click="selectTheme('light')" :disabled="currentTheme === 'light'">Light</button>
    <button @click="selectTheme('dark')" :disabled="currentTheme === 'dark'">Dark</button>
    <button @click="selectTheme('system')" :disabled="currentTheme === 'system'">System</button>
    */}
  </div>
</template>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>