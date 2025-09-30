<template>
  <section class="py-16 section-obout mt-6 mb-6" id="about-me">
    <div class="container mx-auto px-4 py-6 lg:py-8">
      <div class="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start">
        <!-- Слайдер -->
        <div class="lg:col-span-4">
          <Slider :images="images" :autoplay-delay-ms="3000"/>
        </div>

        <!-- Контент -->
        <div class="lg:col-span-8">
          <p class="text-2xl">{{ $t('services.webdev.section') }}</p>
          <span class="text-4xl text-left md:text-4xl font-bold tracking-tight">{{ $t('services.webdev.title') }}</span>
          <p class="text-zinc-700 dark:text-zinc-300 mb-2 pt-3">{{ $t('services.webdev.p1') }}</p>
          <p class="text-zinc-700 dark:text-zinc-300 mb-2">{{ $t('services.webdev.p2') }}</p>
          <p class="text-zinc-700 dark:text-zinc-300 mb-2">{{ $t('services.webdev.p3') }}</p>

          <ul class="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>{{ $t('services.webdev.bullets.php_fixes') }}</li>
            <li>{{ $t('services.webdev.bullets.speedup') }}</li>
            <li>{{ $t('services.webdev.bullets.plugins') }}</li>
            <li>{{ $t('services.webdev.bullets.themes') }}</li>
            <li>{{ $t('services.webdev.bullets.integrations') }}</li>
            <li>{{ $t('services.webdev.bullets.other') }}</li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import step1Img from '@/assets/images/nhhl.webp'
import step2Img from '@/assets/images/clean.webp'
import step3Img from '@/assets/images/bercy.webp'
import step4Img from '@/assets/images/danker.webp'
import step5Img from '@/assets/images/prglass.webp'

import Slider from "@/components/Slider.vue";

const images = [
  step1Img,
  step2Img,
  step3Img,
  step4Img,
  step5Img,

]

</script>
