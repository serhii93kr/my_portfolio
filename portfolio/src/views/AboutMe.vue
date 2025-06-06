<script setup>

import {getImageUrl} from '@/utils/helpers';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const skills = [
  {
    "name": "Java",
    "image": "icons8-java-96.png"
  },
  {
    "name": "kotlin",
    "image": "icons8-kotlin-96.png"
  },
  {
    "name": "Flutter",
    "image": "icons8-flutter-96.png"
  },
  {
    "name": "JavaScript",
    "image": "icons8-javascript-96.png"
  },
  {
    "name": "Vue.js",
    "image": "icons8-vue-js-96.png"
  },
  {
    "name": "PHP",
    "image": "icons8-php-80.png"
  },
  {
    "name": "WordPress",
    "image": "icons8-wordpress-96.png"
  },
  {
    "name": "git",
    "image": "icons8-git-96.png"
  },
  {
    "name": "Figma",
    "image": "icons8-figma-96.png"
  }
];

</script>

<template>
  <section class="py-16 section-obout" id="about-me">
    <div class="container mx-auto px-4">

      <div class="flex flex-col md:flex-row md:justify-around  md:items-start gap-10 mb-16">
        <div class="md:w-1/2">
          <div class="relative inline-block w-50">
            <h2 class="about-title title relative z-10">{{ t('obout.title') }}</h2>
          </div>

          <div class="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p class="obout-description" v-for="(paragraph, index) in t('obout.description').split('\n')" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <img :src="getImageUrl('progress_git.webp')" class="object-contain pt-8"/>
          <a
              href="https://github.com/Sergiyss"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-8 border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-medium py-2 px-4 rounded transition"
          >
            GitHub
          </a>
        </div>
        <div>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-600 text-base">
            <li v-for="(skill, index) in skills" :key="index" class="flex justify-center">
              <div class="flex flex-col items-center text-center gap-2">
                <img :src="getImageUrl(skill.image)" :alt="skill.name" class="w-24 h-24 object-contain"/>
                <span>{{ skill.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
