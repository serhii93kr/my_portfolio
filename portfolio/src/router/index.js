import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioView from '../views/PortfolioView.vue'; // Правильный путь
import BlogView from '../views/BlogView.vue';
import BlogPostView from '../views/BlogPostView.vue'; // Для отдельного поста
import PricingView from '../views/PricingView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/blog/:slug', name: 'BlogPost', component: BlogPostView, props: true }, // :slug - динамический параметр для поста
  { path: '/pricing', name: 'Pricing', component: PricingView },
  { path: '/contact', name: 'Contact', component: ContactView },
  // Можно добавить страницу 404
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
];

const router = createRouter({
  history: createWebHistory(), // Используем History API для чистых URL (важно для SEO)
  routes,
  // Прокрутка к верху страницы при переходе
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
