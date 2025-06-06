<script setup>
import {useI18n} from 'vue-i18n';
const {t} = useI18n(); // подключаем $t для переводов


import { useHead } from '@vueuse/head';
import Projects from '@/views/Projects.vue';
import AboutMe  from "@/views/AboutMe.vue";
import Hero from '@/views/Hero.vue';
import BottomBar  from "@/views/BottomBar.vue";
useHead({
  title: 'Главная | Мое Портфолио', // Динамический title
  meta: [
    { name: 'description', content: 'Портфолио веб-разработчика и мобильного разработчика...' },
    // Другие мета-теги (og:title, og:description и т.д.)
  ],
});
</script>

<template>
  <main>
    <Hero
        :title="t('hero.title')"
      :subtitle="t('hero.subtitle')"
      image="Memoji round.png"
      :showImage = "false"
    />
    <Projects />
    <AboutMe />
    <BottomBar />
  </main>
</template>

<style scoped>
/* Стили только для этого компонента */
h1 {
  color: var(--text-color); /* Пример использования CSS переменной для темы */
}
</style>