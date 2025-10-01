<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watchEffect } from "vue"

interface VisibleSlidesConfig {
  default?: number
  mobile?: number
  tablet?: number
  desktop?: number
}

interface Props {
  images: string[]
  autoplayDelayMs?: number
  visibleSlidesConfig?: VisibleSlidesConfig
  gap?: number // расстояние между слайдами в px
}

const props = defineProps<Props>()

const currentIndex = ref(0)
const isPaused = ref(false)
const gap = props.gap ?? 16
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const windowWidth = ref(window.innerWidth)
window.addEventListener('resize', () => windowWidth.value = window.innerWidth)

const visibleSlides = computed(() => {
  const cfg = props.visibleSlidesConfig || {}
  if (windowWidth.value < 640) return cfg.mobile ?? cfg.default ?? 1
  if (windowWidth.value < 1024) return cfg.tablet ?? cfg.default ?? 1
  return cfg.desktop ?? cfg.default ?? 1
})

// Пересчитываем текущий индекс при изменении числа видимых слайдов
watchEffect(() => {
  if (currentIndex.value > props.images.length - visibleSlides.value) {
    currentIndex.value = Math.max(props.images.length - visibleSlides.value, 0)
  }
})

const maxIndex = computed(() => Math.max(props.images.length - visibleSlides.value, 0))

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % (maxIndex.value + 1)
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + (maxIndex.value + 1)) % (maxIndex.value + 1)
}

function goToSlide(index: number) {
  if (index < 0 || index > maxIndex.value) return
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

<template>
  <div class="my-6 shadow-md rounded-xl p-3">
    <div
        class="relative overflow-hidden"
        style="height: 400px"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
    >
      <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              gap: gap + 'px'
          }"
      >
        <div
            v-for="(image, index) in images"
            :key="index"
            class="flex-shrink-0 rounded-xl overflow-hidden"
            :style="{ width: `calc(${100 / visibleSlides}% - ${gap}px)` }"
        >
          <img
              :src="image"
              alt="Slide image"
              class="w-full h-full object-cover rounded-xl"
              style="height: 350px;"
              loading="lazy"
              decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
</template>
