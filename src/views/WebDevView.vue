<template>
  <section class="projects" id="projects">
    <SliderLeftWithContent/>
    <div class="container">
      <div class="flex justify-between">
        <h2
            class="section-title title"
            :class="paddingSize"
            v-html="t('project.title_site').replace(/\n/g, '<br>')"
        />
        <div class="place-self-center flex flex-col items-center">
          <span class="bg-orange-500 p-2 rounded-xl text-3xl text-white font-semibold">От 350 грн / час</span>
          <router-link to="/contact" class="mt-2 underline text-blue-600 hover:text-blue-800 text-center">
            Заказать услугу
          </router-link>
        </div>
      </div>

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

  <BottomBar />
</template>

<script setup>
import {computed} from 'vue'
import {projects} from '@/data/projects';
import {web_projects} from '@/data/web_projects';
import {useI18n} from 'vue-i18n';
import {getImageUrl} from '@/utils/helpers';
import {useMq} from '@/composables/useMq';
import SliderLeftWithContent from "@/views/SliderLeftWithContent.vue";
import SliderRightWithContent from "@/views/SliderRightWithContent.vue";
import BottomBar from "@/views/BottomBar.vue";

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