<script setup>
import Projects from '@/views/Projects.vue';
import { watch } from 'vue'
import { ref, computed } from 'vue';
import {useRoute} from 'vue-router';
import {useI18n} from 'vue-i18n';
import {projects} from '@/data/projects';
import Hero from '@/views/Hero.vue';
import BottomBar from '@/views/BottomBar.vue';
import {getImageUrl} from "@/utils/helpers";

const {t, locale} = useI18n();
const route = useRoute();

const projectId = ref(null);
const project = ref(null);

// Get other projects excluding the current one
const otherProjects = computed(() => {
  if (!project.value) return [];
  return projects.filter(p => p.id !== project.value.id).slice(0, 3);
});

watch(
    () => route.query.id,
    (newId) => {
      projectId.value = Number(newId);
      project.value = projects.find(p => p.id === projectId.value);

      if (!project.value) {
        console.log('Project not found!');
      }
    },
    { immediate: true }
)

// computed title
const projectTitle = computed(() => project.value?.title ?? {});
</script>

<template>
  <Hero
      :title="t('blog.title')"
      :subtitle="projectTitle[locale]"
      image="Memoji round.png"
      :showImage="false"
  />

  <div v-if="project" class="project-wrapper">
    <div class="project-content">
      <img
          class="project-image"
          :src="getImageUrl(project.image)"
          :alt="project.title[locale]"
      />

      <h1 class="project-title">{{ project.title[locale] }}</h1>
      <div class="project-description">

        <div class="project-description" v-html="project.fullDescription[locale]"></div>
      </div>

      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>

    <!-- Other Projects Section -->
    <div class="other-projects">
      <h2 class="other-projects-title title">{{ t('blog.other_projects') }}</h2>
      <div class="other-projects-grid">
        <router-link
            v-for="otherProject in otherProjects"
            :key="otherProject.id"
            :to="{ path: '/blog', query: { id: otherProject.id } }"
            class="other-project-card"
        >
          <img
              class="other-project-image"
              :src="getImageUrl(otherProject.image)"
              :alt="otherProject.title[locale]"
          />
          <div class="other-project-content">
            <h3 class="other-project-title">{{ otherProject.title[locale] }}</h3>
            <p class="other-project-description">{{ otherProject.description[locale] }}</p>
            <!-- 🔗 Кнопка-ссылка -->
            <router-link
                :to="{ path: '/blog', query: { id: otherProject.id } }"
                class="inline-block mt-2 text-blue-600 hover:underline text-sm font-medium"
            >
              {{ t('blog.read_more') }} →
            </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <Projects/>
  </div>

  <BottomBar/>
</template>

<style scoped>
.project-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  gap: 2rem;
}

.project-content {
  max-width: 920px;
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.project-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #eef1f6;
  color: #333;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.875rem;
}

/* Other Projects Styles */
.other-projects {
  max-width: 920px;
  width: 100%;
}

.other-projects-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
}

.other-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.other-project-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.other-project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.other-project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.other-project-content {
  padding: 1rem;
}

.other-project-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.other-project-description {
  font-size: 0.875rem;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
