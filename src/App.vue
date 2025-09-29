<template>
  <div id="app-wrapper">
    <AppHeader />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <div>
          <component :is="Component" :key="route.fullPath" />
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
/* Page transition: more pronounced slide-fade */
.page-enter-active,
.page-leave-active {
  transition: opacity 450ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
              filter 450ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(24px) scale(0.985);
  filter: saturate(0.9);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-24px) scale(0.985);
  filter: saturate(0.9);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: opacity 200ms linear;
  }
  .page-enter-from,
  .page-leave-to {
    transform: none;
    filter: none;
  }
}
</style>
