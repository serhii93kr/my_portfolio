<template>
  <div id="app-wrapper">
    <AppHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- Оборачиваем компонент в дополнительный контейнер -->
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>

  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import { useThemeStore } from './store/theme';

const themeStore = useThemeStore();
themeStore.initializeTheme();
</script>

<style>
/* Стили для плавного перехода */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>