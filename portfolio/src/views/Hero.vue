<template>
  <section class="hero">
    <div class="container">
      <!-- Условное отображение изображения -->
      <img
          v-if="showImage"
          class="image_hero m-auto"
          :src="getImageUrl(image)"
          alt="Hero Image"
      />
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>

import { getImageUrl } from '@/utils/helpers';


const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  cta: {
    type: String,
    default: 'Связаться с нами', // Значение по умолчанию
  },
  image: {
    type: String,
    required: true,
  },
  showImage: {
    type: Boolean,
    default: true, // По умолчанию изображение будет показываться
  }
});

</script>
  