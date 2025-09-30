<template>
  <section class="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Заголовок -->


      <!-- Прогрес бар -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-bold text-blue-600 dark:text-blue-400">
            {{ Math.round(progress) }}%
          </span>
        </div>
        <div class="h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
          <div
              class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out rounded-full"
              :style="{ width: `${progress}%` }"
          />
        </div>
      </div>

      <!-- Канвас з анімацією -->
      <div class="relative aspect-[16/10] w-full rounded-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-900 shadow-2xl mb-8">
        <svg class="w-full h-full" viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Градієнти -->
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
              <stop offset="100%" style="stop-color:#a855f7;stop-opacity:0.8" />
            </linearGradient>

            <!-- Тіні -->
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.15"/>
            </filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- Фон - сітка -->
          <g :opacity="getOpacity(0)" style="transition: opacity 0.5s">
            <line v-for="i in 20" :key="`v${i}`"
                  :x1="70 * i" y1="0" :x2="70 * i" y2="900"
                  stroke="#e2e8f0" stroke-width="1" opacity="0.3"/>
            <line v-for="i in 15" :key="`h${i}`"
                  x1="0" :y1="60 * i" x2="1400" :y2="60 * i"
                  stroke="#e2e8f0" stroke-width="1" opacity="0.3"/>
          </g>

          <!-- Етап 1: Основна рамка браузера -->
          <g :opacity="getOpacity(15)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(15)})`, transformOrigin: '700px 450px' }">
            <rect x="100" y="100" width="1200" height="700" rx="20"
                  fill="white" stroke="url(#grad1)" stroke-width="4" filter="url(#shadow)"/>

            <!-- Кнопки браузера -->
            <circle cx="140" cy="140" r="10" fill="#ff5f57"/>
            <circle cx="170" cy="140" r="10" fill="#febc2e"/>
            <circle cx="200" cy="140" r="10" fill="#28c840"/>

            <!-- URL бар -->
            <rect x="250" y="125" width="900" height="30" rx="15"
                  fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
            <text x="270" y="145" fill="#94a3b8" font-size="16" font-family="monospace">
              https://your-amazing-site.com
            </text>
          </g>

          <!-- Етап 2: Навігаційний хедер -->
          <g :opacity="getOpacity(40)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(40)})`, transformOrigin: '700px 220px' }">
            <rect x="120" y="180" width="1160" height="80"
                  fill="url(#grad2)" filter="url(#shadow)" rx="10"/>

            <!-- Логотип -->
            <circle cx="180" cy="220" r="25" fill="white" opacity="0.9"/>
            <path d="M 180 205 L 165 235 L 195 235 Z" fill="url(#grad1)"/>

            <!-- Пункти меню -->
            <g v-for="(item, i) in ['Головна', 'Про нас', 'Послуги', 'Портфоліо', 'Контакти']" :key="i">
              <rect :x="360 + i * 160" y="205" width="120" height="30" rx="15"
                    fill="white" opacity="0.2"/>
              <text :x="380 + i * 160" y="225" fill="white" font-size="16" font-weight="500">
                {{ item }}
              </text>
            </g>
          </g>

          <!-- Етап 3: Hero секція -->
          <g :opacity="getOpacity(50)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(50)})`, transformOrigin: '700px 380px' }">
            <rect x="150" y="290" width="1100" height="200" rx="16"
                  fill="url(#grad1)" opacity="0.1" stroke="url(#grad1)" stroke-width="2"/>

            <!-- Головний заголовок -->
            <text x="700" y="350" fill="#1e293b" font-size="42" font-weight="bold" text-anchor="middle">
              Створюємо сучасні сайти
            </text>
            <text x="700" y="390" fill="#64748b" font-size="20" text-anchor="middle">
              Від ідеї до реалізації за 30 днів
            </text>

            <!-- CTA кнопки -->
            <rect x="550" y="410" width="140" height="45" rx="22"
                  fill="url(#grad1)" filter="url(#shadow)"/>
            <text x="620" y="438" fill="white" font-size="16" font-weight="600" text-anchor="middle">
              Почати
            </text>

            <rect x="710" y="410" width="140" height="45" rx="22"
                  fill="white" stroke="url(#grad1)" stroke-width="2"/>
            <text x="780" y="438" fill="#3b82f6" font-size="16" font-weight="600" text-anchor="middle">
              Детальніше
            </text>
          </g>

          <!-- Етап 4: Секція переваг (3 картки) -->
          <g :opacity="getOpacity(65)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(65)})`, transformOrigin: '700px 580px' }">
            <g v-for="i in 3" :key="`card${i}`">
              <rect :x="170 + (i-1) * 370" y="520" width="330" height="180" rx="16"
                    fill="white" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)"/>

              <!-- Іконка -->
              <circle :cx="220 + (i-1) * 370" cy="570" r="30" fill="url(#grad1)" opacity="0.2"/>
              <circle :cx="220 + (i-1) * 370" cy="570" r="20" fill="url(#grad1)" filter="url(#glow)"/>

              <!-- Заголовок картки -->
              <rect :x="180 + (i-1) * 370" y="610" width="200" height="20" rx="4" fill="#e2e8f0"/>
              <rect :x="180 + (i-1) * 370" y="640" width="280" height="12" rx="4" fill="#f1f5f9"/>
              <rect :x="180 + (i-1) * 370" y="660" width="250" height="12" rx="4" fill="#f1f5f9"/>
            </g>
          </g>

          <!-- Етап 5: Форма контактів -->
          <g :opacity="getOpacity(80)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(80)})`, transformOrigin: '400px 750px' }">
            <rect x="150" y="730" width="480" height="130" rx="16"
                  fill="white" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)"/>

            <!-- Поля форми -->
            <rect x="180" y="760" width="200" height="35" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
            <rect x="400" y="760" width="200" height="35" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
            <rect x="180" y="810" width="360" height="35" rx="8" fill="url(#grad1)" filter="url(#glow)"/>
            <text x="360" y="833" fill="white" font-size="16" font-weight="600" text-anchor="middle">
              Відправити
            </text>
          </g>

          <!-- Етап 6: Статистика -->
          <g :opacity="getOpacity(80)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(80)})`, transformOrigin: '1000px 750px' }">
            <rect x="670" y="730" width="580" height="130" rx="16"
                  fill="white" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)"/>

            <!-- Графіки -->
            <g v-for="i in 4" :key="`bar${i}`">
              <rect :x="710 + (i-1) * 130" :y="810 - (i-1) * 12" width="90" :height="40 + (i-1) * 12"
                    fill="url(#grad1)" opacity="0.8" rx="6"/>
              <text :x="755 + (i-1) * 130" y="855" fill="#64748b" font-size="14" text-anchor="middle">
                {{ ['Q1', 'Q2', 'Q3', 'Q4'][i-1] }}
              </text>
            </g>
          </g>

          <!-- Етап 7: Футер -->
          <g :opacity="getOpacity(90)"
             :style="{ transition: 'all 0.6s', transform: `scale(${getScale(90)})`, transformOrigin: '700px 870px' }">
            <rect x="120" y="870" width="1160" height="10"
                  fill="url(#grad1)" opacity="0.3" rx="5"/>
          </g>

          <!-- Фінальний ефект - конфетті -->
          <g v-if="progress >= 95">
            <circle v-for="i in 30" :key="`confetti${i}`"
                    :cx="confetti[i].x"
                    :cy="confetti[i].y"
                    :r="confetti[i].r"
                    :fill="confetti[i].color"
                    opacity="0.6"
                    :style="`animation: float ${confetti[i].duration}s ease-in-out infinite; animation-delay: ${confetti[i].delay}s;`"
            />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const progress = ref(0)
const isPlaying = ref(true)
let timer = null

const stages = [
  { id: 0, title: 'Концепція', desc: 'Збираємо ідеї та вимоги', progress: 0 },
  { id: 1, title: 'Архітектура', desc: 'Плануємо структуру сайту', progress: 15 },
  { id: 2, title: 'Дизайн системи', desc: 'Створюємо UIKit та компоненти', progress: 30 },
  { id: 3, title: 'Навігація', desc: 'Розробляємо хедер та меню', progress: 40 },
  { id: 4, title: 'Hero секція', desc: 'Головний блок з CTA', progress: 50 },
  { id: 5, title: 'Контент', desc: 'Додаємо основні секції', progress: 65 },
  { id: 6, title: 'Інтерактив', desc: 'Форми та взаємодія', progress: 80 },
  { id: 7, title: 'Футер', desc: 'Завершальні елементи', progress: 90 },
  { id: 8, title: 'Готово!', desc: 'Оптимізація та запуск', progress: 100 }
]

const currentStage = computed(() => {
  return stages.findIndex((s, i) => {
    const nextStage = stages[i + 1]
    return progress.value >= s.progress && (!nextStage || progress.value < nextStage.progress)
  })
})

const confetti = Array.from({ length: 30 }, () => ({
  x: Math.random() * 1400,
  y: Math.random() * 900,
  r: Math.random() * 8 + 2,
  color: ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'][Math.floor(Math.random() * 4)],
  duration: 1 + Math.random() * 2,
  delay: Math.random() * 2
}))

const getOpacity = (stageProgress) => {
  return progress.value >= stageProgress ? 1 : 0
}

const getScale = (stageProgress) => {
  const diff = progress.value - stageProgress
  if (diff < 0) return 0.8
  if (diff < 5) return 0.8 + (diff / 5) * 0.2
  return 1
}

watch(isPlaying, (newVal) => {
  if (newVal) {
    startTimer()
  } else {
    stopTimer()
  }
})

const startTimer = () => {
  timer = setInterval(() => {
    progress.value += 0.5
    if (progress.value >= 100) {
      setTimeout(() => {
        progress.value = 0
      }, 1000)
    }
  }, 50)
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (isPlaying.value) {
    startTimer()
  }
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}
</style>