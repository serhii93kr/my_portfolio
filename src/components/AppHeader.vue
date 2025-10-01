<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '../store/theme';
import { setLocale } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const { t } = useI18n();
const menuActive = ref(false);
const currentLanguage = ref(localStorage.getItem('locale') || 'en');

// Theme store
const themeStore = useThemeStore();

const isDarkTheme = computed(() => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return themeStore.currentTheme === 'dark' || (themeStore.currentTheme === 'system' && systemPrefersDark);
});

const toggleTheme = () => {
  const newTheme = themeStore.currentTheme === 'light' ? 'dark' : 'light';
  themeStore.setTheme(newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
  document.body.style.overflow = menuActive.value ? 'hidden' : '';
};

const closeMenu = () => {
  menuActive.value = false;
  document.body.style.overflow = '';
};

const changeLanguage = (lang) => {
  currentLanguage.value = lang;
  setLocale(lang);
};
</script>

<template>
  <header class="app-header bg-white dark:bg-gray-900 shadow-sm">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <div class="logo text-xl font-bold text-gray-900 dark:text-white">
          {{ t('navigation.name') }}
        </div>

        <button
            class="mobile-menu-btn p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            @click="toggleMenu"
            :aria-expanded="menuActive ? 'true' : 'false'"
            aria-controls="mobile-menu"
            :aria-label="menuActive ? t('navigation.close_menu') : t('navigation.open_menu')"
        >
          <span class="sr-only">Menu</span>
          <span class="text-2xl transition-transform duration-300" :class="{ 'rotate-90': menuActive }">≡</span>
        </button>

        <!-- Overlay -->
        <div
            class="fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity md:hidden"
            :class="{ 'opacity-100 pointer-events-auto': menuActive }"
            @click="closeMenu"
        />

        <div
            id="mobile-menu"
            class="menu flex items-center space-x-4"
            :class="{ 'active': menuActive }"
        >
          <div class="desktop-menu flex md:flex-wrap items-center gap-6">
            <router-link
                class="menu-item px-2 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                to="/"
                @click="closeMenu"
            >
              {{ t('navigation.home') }}
            </router-link>
            <router-link
                class="menu-item px-2 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                to="/web_dev"
                @click="closeMenu"
            >
              {{ t('navigation.web_dev') }}
            </router-link>
            <router-link
                class="menu-item px-2 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                to="/mobile_dev"
                @click="closeMenu"
            >
              {{ t('navigation.mobile_dev') }}
            </router-link>
            <router-link
                class="menu-item px-2 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                to="/pricing"
                @click="closeMenu"
            >
              {{ t('navigation.pricing') }}
            </router-link>
            <router-link
                class="menu-item px-2 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                to="/contact"
                @click="closeMenu"
            >
              {{ t('navigation.contact') }}
            </router-link>
          </div>


          <div class="flex items-center space-x-4">
            <button
                class="theme-toggle p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                @click="toggleTheme"
                :title="isDarkTheme ? t('theme.light_mode') : t('theme.dark_mode')"
            >
              <span class="text-xl">{{ isDarkTheme ? '☀️' : '🌙' }}</span>
            </button>

            <select
                class="lang-switch bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                v-model="currentLanguage"
                @change="(e) => { changeLanguage(currentLanguage); closeMenu(); }"
            >
              <option value="uk">Українська</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Mobile menu styles */


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
