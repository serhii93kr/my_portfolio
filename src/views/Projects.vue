<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2
          class="section-title title"
          :class="paddingSize"
          v-html="t('project.title').replace(/\n/g, '<br>')"
      />

      <div class="projects-grid" :class="[gridCols, gapSize, paddingSize]">
        <div
            class="project-card"
            v-for="(item, index) in projects"
            :key="index"
        >
          <router-link
              :to="{ path: '/blog', query: { id: item.id } }"
              class="block"
          >
            <div class="card-inner">
              <img
                  class="project-img"
                  :src="getImageUrl(item.image)"
                  :alt="item.title[locale]"
              />

              <div class="project-content">
                <h3 class="project-title">{{ item.title[locale] }}</h3>

                <hr class="divider"/>

                <p class="project-description">
                  {{ item.description[locale] }}
                </p>
                <div class="project-tags">
                  <span
                      class="project-tag"
                      v-for="(tag, tagIndex) in item.tags"
                      :key="tagIndex"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="project-links">
                  <span v-if="item.github">
                    <a :href="item.github" target="_blank" class="hover-underline">GitHub 🔗</a>
                  </span>

                  <span v-if="item.link">
                    <a
                        :href="item.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                    >
                      Play Market →
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <h2
          class="section-title title"
          :class="paddingSize"
          v-html="t('project.title_site').replace(/\n/g, '<br>')"
      />
      <div class="projects-grid" :class="[gridCols, gapSize, paddingSize]">
        <div
            class="project-card"
            v-for="(item, index) in web_projects"
            :key="index"
        >
          <div class="card-inner">
            <img
                class="project-img"
                :src="getImageUrl(item.image)"
                :alt="item.title[locale]"
            />

            <div class="project-content">
              <h3 class="project-title">{{ item.title[locale] }}</h3>

              <p class="project-description">
                {{ item.description[locale] }}
              </p>

              <hr class="divider"/>

              <p
                  class="project-description"
                  v-html="item.fullDescription[locale].replace(/\n/g, '<br>')"
              />

              <div class="project-tags">
                <span
                    class="project-tag"
                    v-for="(tag, tagIndex) in item.tags"
                    :key="tagIndex"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="project-links">
                <span v-if="item.github">
                  <a :href="item.github" target="_blank" class="hover-underline">GitHub 🔗</a>
                </span>

                <span v-if="item.link">
                  <a
                      :href="item.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="project-link"
                  >
                    {{ t('project.go_to_site') }} →
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, computed} from 'vue'
import {projects} from '@/data/projects';
import {web_projects} from '@/data/web_projects';
import {useI18n} from 'vue-i18n';
import {getImageUrl} from '@/utils/helpers';
import { useMq } from '@/utils/mq.js';

const {t, locale} = useI18n();
const mq = useMq();

const gridCols = computed(() => {
  if (mq.xl) return 'grid-cols-3';
  if (mq.lg) return 'grid-cols-2';
  return 'grid-cols-1';
});

const gapSize = computed(() => {
  if (mq.xl) return 'gap-8';
  if (mq.lg) return 'gap-6';
  return 'gap-4';
});

const paddingSize = computed(() => {
  if (mq.xl) return 'pt-8';
  if (mq.lg) return 'pt-6';
  return 'pt-4';
});
</script>

<style scoped>
.projects {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

.projects-grid {
  display: grid;
  width: 100%;
  gap: 1rem;
}

/* Base grid layout for mobile first */
.grid-cols-1 {
  grid-template-columns: 1fr;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.gap-4 {
  gap: 1rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pt-8 {
  padding-top: 2rem;
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;
}

.card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-inner:hover {
  transform: translateY(-5px);
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--title-color);
}

.divider {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 0.5rem 0;
}

.project-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.project-tag {
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
}

.project-links {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  font-size: 0.875rem;
}

.project-link,
.hover-underline {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.hover-underline:hover {
  text-decoration: underline;
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .project-img {
    height: 220px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .project-img {
    height: 240px;
  }

  .project-title {
    font-size: 1.3rem;
  }

  .project-description {
    font-size: 1.1rem;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .projects {
    padding: 1rem 0;
  }

  .container {
    padding: 0 0.75rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-card {
    margin: 0;
  }

  .project-content {
    padding: 0.75rem;
  }

  .project-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .project-description {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }

  .project-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }

  .project-links {
    font-size: 0.875rem;
    margin-top: 0.75rem;
  }

  .project-img {
    height: 180px;
  }
}
</style>