<script setup>
import { ref, computed, watch, onMounted, onUnmounted, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '../store/theme';
import { setLocale } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const { t, locale } = useI18n();
const themeStore = useThemeStore();
const mq = inject('mq'); // ✅ реактивный объект с текущим breakpoint

const isMenuOpen = ref(false);
const isDark = computed(() => themeStore.isDark);

const toggleTheme = () => {
  themeStore.toggleTheme();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

// Закрываем меню при изменении размера экрана
watch(() => mq.value, (current) => {
  if (current !== 'mobile') {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
});

// Закрываем меню при клике вне меню
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (isMenuOpen.value && !e.target.closest('.menu') && !e.target.closest('.mobile-menu-btn')) {
      isMenuOpen.value = false;
      document.body.style.overflow = '';
    }
  });
});

onUnmounted(() => {
  document.body.style.overflow = '';
});

const changeLanguage = (lang) => {
  locale.value = lang;
  setLocale(lang);
};
</script>

<template>
  <header class="header">
    <nav class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="logo">Portfolio</router-link>

        <button
            v-if="mq.value === 'mobile'"
            class="mobile-menu-btn"
            @click="toggleMenu"
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>

        <div class="menu" :class="{ 'active': isMenuOpen }">
          <div class="desktop-menu">
            <router-link to="/" class="menu-item">{{ t('menu.home') }}</router-link>
            <router-link to="/blog" class="menu-item">{{ t('menu.blog') }}</router-link>
            <router-link to="/contact" class="menu-item">{{ t('menu.contact') }}</router-link>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button class="theme-toggle" @click="toggleTheme">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
          <select v-model="locale" class="lang-switch">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
  padding: 8px;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    padding: 80px 20px 20px;
    z-index: 999;
  }

  .menu.active {
    display: block;
  }

  .desktop-menu {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .desktop-menu a {
    font-size: 24px;
    padding: 12px 0;
  }
}

/* Dark mode styles */
.dark .app-header,
.dark .menu {
  background-color: #2e2b25;
}

.dark .menu-item {
  color: #e0e0e0;
}
.dark p,
.dark .logo{
  color : #f1e7d0
}


/* Animation for theme toggle */
.theme-toggle {
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
}
</style>
