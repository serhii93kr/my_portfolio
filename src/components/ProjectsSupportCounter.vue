<script setup>
import { ref, onMounted, watch, computed, onUnmounted } from 'vue'

const props = defineProps({
  count: { type: Number, required: true },
  durationMs: { type: Number, default: 1600 },
  label: { type: String, default: 'Supported projects' },
  startFrom: { type: Number, default: 0 },
  suffix: { type: String, default: '+' }
})

const current = ref(props.startFrom)
const hasAnimated = ref(false)
let rafId = 0

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function animate(toValue) {
  cancelAnimationFrame(rafId)

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || props.durationMs <= 0) {
    current.value = toValue
    return
  }

  const start = performance.now()

  const step = (now) => {
    const elapsed = now - start
    const t = Math.min(1, elapsed / props.durationMs)
    const eased = easeOutCubic(t)
    current.value = Math.round(props.startFrom + (toValue - props.startFrom) * eased)
    if (t < 1) rafId = requestAnimationFrame(step)
  }

  rafId = requestAnimationFrame(step)
}

// Trigger when component becomes visible
let observer
const rootEl = ref(null)

onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true
        animate(props.count)
      }
    }, { threshold: 0.35 })
    if (rootEl.value) observer.observe(rootEl.value)
  } else {
    // Fallback: animate on mount
    animate(props.count)
  }
})

onUnmounted(() => {
  if (observer && rootEl.value) observer.unobserve(rootEl.value)
  cancelAnimationFrame(rafId)
})

// Re-animate when prop changes (if already animated once)
watch(() => props.count, (val) => {
  if (hasAnimated.value) animate(val)
})

const display = computed(() => new Intl.NumberFormat().format(current.value))
</script>

<template>
  <div ref="rootEl" class="counter-card">
    <div class="counter-value">
      <span class="digits">{{ display }}</span>
      <span class="suffix" aria-hidden="true">{{ suffix }}</span>
    </div>
    <p class="counter-label">{{ label }}</p>
  </div>
  
</template>

<style scoped>
.counter-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  transition: transform 300ms ease, box-shadow 300ms ease, background-color 300ms ease, border-color 300ms ease;
}

.counter-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.counter-value {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  color: var(--title-color);
}

.digits {
  font-family: 'NunitoBold', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.5px;
}

.suffix {
  font-size: 28px;
  color: var(--primary-color);
}

.counter-label {
  margin: 0;
  font-size: 14px;
  color: var(--text-color);
  text-align: center;
}

/* Dark mode */
.dark .counter-card {
  background: var(--dk-card-bg);
  border-color: var(--dk-br-color-card);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.dark .counter-value {
  color: var(--dk-title-color);
}

.dark .counter-label {
  color: var(--dk-text-color);
}

.dark .suffix {
  color: var(--dk-link-color);
}

@media (min-width: 768px) {
  .counter-card { padding: 18px 24px; }
  .digits { font-size: 56px; }
  .suffix { font-size: 30px; }
}

@media (min-width: 1280px) {
  .digits { font-size: 64px; }
  .suffix { font-size: 32px; }
}
</style>


