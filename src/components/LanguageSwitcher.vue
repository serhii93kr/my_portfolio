<script setup>
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';

const { locale } = useI18n();

function setLocale(lang) {
  locale.value = lang;
}

// Сохраняем выбор в localStorage при изменении
watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale);
  // Обновляем атрибут lang у тега <html> для доступности и SEO
  document.documentElement.lang = newLocale;
});

// Устанавливаем начальный lang при монтировании
import { onMounted } from 'vue';
onMounted(() => {
   document.documentElement.lang = locale.value;
});

</script>

<template>
  <div class="language-switcher">
    <button @click="setLocale('en')" :disabled="locale === 'en'">EN</button>
    <button @click="setLocale('uk')" :disabled="locale === 'uk'">UA</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>