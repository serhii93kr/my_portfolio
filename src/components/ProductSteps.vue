<script setup>
import {useI18n} from 'vue-i18n';

import step1Img from '@/assets/images/1-255x300.png'
import step2Img from '@/assets/images/2-248x300.png'
import step3Img from '@/assets/images/3-264x300.png'

const { t } = useI18n()

const steps = [
  { key: 'discussion', img: step1Img },
  { key: 'design', img: step2Img },
  { key: 'mvp', img: step3Img }
]
</script>

<template>
  <section class="product-steps container mx-auto px-4 py-12">
    <h2 class="section-title title pt-8">{{ t('productSteps.title') }}</h2>
    <div class="project-description">
      <p class="text-center">{{ t('productSteps.description') }}</p>

      <div class="grid md:grid-cols-3 gap-8 pt-8 pb-8">
        <div v-for="step in steps" :key="step.key" class="step-card text-center project-card project-content">
          <img :src="step.img" class="w-40 h-auto mx-auto transition-filter duration-300 dark:filter dark:brightness-150"  alt="">
          <p class="text-blue-500 font-bold text-lg">{{ t(`productSteps.steps.${step.key}.number`) }}</p>
          <h3 class="text-xl font-semibold mb-2 project-description">{{ t(`productSteps.steps.${step.key}.title`) }}</h3>
          <p class="text-gray-600 project-description">{{ t(`productSteps.steps.${step.key}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
