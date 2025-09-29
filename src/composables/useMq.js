import { ref, computed } from 'vue'

export const viewportWidth = ref(0)
export const mq = ref('desktop') // 'mobile' | 'tablet' | 'desktop'

function classify(width) {
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

function update() {
  if (typeof window === 'undefined') return
  const w = window.innerWidth
  viewportWidth.value = w
  mq.value = classify(w)
}

export function initMq() {
  if (typeof window === 'undefined') return
  update()
  window.addEventListener('resize', update)
}

export function useMq() {
  const lg = computed(() => viewportWidth.value >= 1024)
  const xl = computed(() => viewportWidth.value >= 1280)
  return { lg, xl }
}

import { ref, onMounted, onUnmounted } from 'vue';

export function useMq() {
    const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

    const breakpoints = {
        mobile: 768,
        tablet: 1024,
        desktop: 1280,
        widescreen: 1920
    };

    const updateWidth = () => {
        width.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });

    return {
        width,
        get mobile() { return width.value < breakpoints.tablet; },
        get tablet() { return width.value >= breakpoints.tablet && width.value < breakpoints.desktop; },
        get lg() { return width.value >= breakpoints.tablet; },
        get xl() { return width.value >= breakpoints.desktop; },
    };
}
