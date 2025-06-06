<template>
  <div
      class="project-card rounded-2xl shadow-lg overflow-hidden relative"
      :class="{ 'border-2 border-blue-500 transform scale-105': isPopular }"
  >
    <div class="px-6 py-8 price-container">
      <div
          v-if="isPopular"
          class="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-tl-lg"
      >
        {{ $t('pricing.popular') }}
      </div>
      <h3 class="text-2xl title font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-4 text-gray-600">{{ description }}</p>
      <div class="mt-6">
        <span class="text-4xl font-bold price">{{ price }}</span>
        <span class="price-pre-hour">{{ perHour }}</span>
      </div>
      <ul class="mt-8 space-y-4">
        <li v-for="feature in features" :key="feature" class="flex items-center">
          <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="ml-3 text-gray-600">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  price: string
  features: string[]
  perHour: string
  isPopular?: boolean
}>()
</script> 