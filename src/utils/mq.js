import { ref, onMounted, onUnmounted } from 'vue'

export function useMq() {
  const width = ref(0)

  function updateWidth() {
    if (typeof window === 'undefined') return
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    get lg() {
      return width.value >= 1024
    },
    get xl() {
      return width.value >= 1280
    }
  }
}


