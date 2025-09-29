<template>
  <div id="app-wrapper">
    <AppHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
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
import { provide, onMounted } from 'vue';
import { mq, initMq } from './composables/useMq';

const themeStore = useThemeStore();
themeStore.initializeTheme();

// Инициализируем слежение за шириной окна
onMounted(() => {
  initMq();
});

// Делаем mq доступным через inject
provide('mq', mq);
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
