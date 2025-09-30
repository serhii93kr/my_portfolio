<template>
  <section class="py-16 section-obout mt-6 mb-6" id="about-me">
    <div class="container mx-auto px-4 py-6 lg:py-8">
      <div class="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start">
        <!-- Контент -->
        <div class="lg:col-span-8">
          <p class="text-2xl">{{$t('services.mobiledev.section')}}</p>
          <span class="text-4xl text-left md:text-4xl font-bold tracking-tight">{{$t('services.mobiledev.title')}}</span>
          <p class="text-zinc-700 dark:text-zinc-300 mb-2 pt-3">{{$t('services.mobiledev.p1')}}</p>
          <p class="text-zinc-700 dark:text-zinc-300 mb-2">{{$t('services.mobiledev.p2')}}</p>

          <ul class="list-disc pl-5 text-zinc-700 dark:text-zinc-200 marker:text-zinc-500 dark:marker:text-zinc-400 space-y-1">
            <li>{{$t('services.mobiledev.bullets.modern')}}</li>
            <li>{{$t('services.mobiledev.bullets.architecture')}}</li>
            <li>{{$t('services.mobiledev.bullets.maintainable')}}</li>
            <li>{{$t('services.mobiledev.bullets.docs')}}</li>
          </ul>
        </div>
        <!-- Слайдер -->
        <div class="lg:col-span-4">
          <Slider :images="images" :autoplay-delay-ms="3000"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import step1Img from '@/assets/images/room.webp'
import step2Img from '@/assets/images/didido.webp'
import step3Img from '@/assets/images/kiiashko.webp'
import step4Img from '@/assets/images/car.webp'
import step5Img from '@/assets/images/castle.webp'
import step6Img from '@/assets/images/quick.webp'

import Slider from "@/components/Slider.vue";

const images = [
  step1Img,
  step2Img,
  step3Img,
  step4Img,
  step5Img,
  step6Img,
]

</script>
