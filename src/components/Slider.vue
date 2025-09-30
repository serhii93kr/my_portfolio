<template>
  <div
      class="relative h-56 sm:h-64 md:h-72 lg:h-[420px] overflow-hidden rounded-xl shadow-lg bg-transparent"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
  >
    <!-- Слайды с анимацией -->
    <Transition
        enter-active-class="transition duration-500 ease-out"
        leave-active-class="transition duration-500 ease-in"
        enter-from-class="opacity-0 translate-x-4"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-4"
    >
      <img
          :key="images[currentIndex]"
          :src="images[currentIndex]"
          alt="Slide image"
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
      />
    </Transition>

    <!-- Кнопки -->
    <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 dark:bg-zinc-800/70 shadow hover:bg-white dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Previous slide"
    >
      ‹
    </button>
    <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-white/80 dark:bg-zinc-800/70 shadow hover:bg-white dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Next slide"
    >
      ›
    </button>

    <!-- Индикаторы -->
    <div class="flex justify-center mt-3 gap-2 absolute bottom-2 w-full">
      <button
          v-for="(image, index) in images"
          :key="index"
          class="w-2.5 h-2.5 rounded-full transition-colors duration-300 ring-1 ring-black/10 dark:ring-white/10"
          :class="currentIndex === index ? 'bg-blue-600' : 'bg-zinc-300 dark:bg-zinc-700'"
          @click="goToSlide(index)"
          :aria-current="currentIndex === index ? 'true' : 'false'"
          :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

interface Props {
  images: string[]
  autoplayDelayMs?: number
}

const props = defineProps<Props>()

const currentIndex = ref(0)
const isPaused = ref(false)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function goToSlide(index: number) {
  if (index < 0 || index >= props.images.length) return
  currentIndex.value = index
}

function startAutoplay() {
  if (autoplayTimer) return
  autoplayTimer = setInterval(() => {
    if (!isPaused.value) nextSlide()
  }, props.autoplayDelayMs ?? 4000)
}

function stopAutoplay() {
  if (!autoplayTimer) return
  clearInterval(autoplayTimer)
  autoplayTimer = null
}

function pauseAutoplay() { isPaused.value = true }
function resumeAutoplay() { isPaused.value = false }

onMounted(() => startAutoplay())
onBeforeUnmount(() => stopAutoplay())
</script>
