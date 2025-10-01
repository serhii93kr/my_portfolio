<script setup>
import { ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  expandFirst: { type: Boolean, default: true },
  allowOne: { type: Boolean, default: true }
})

const { t } = useI18n()

const items = ref([
  { id: 'faq-1', q: t('faq.q1'), a: t('faq.a1'), open: false },
  { id: 'faq-2', q: t('faq.q2'), a: t('faq.a2'), open: false },
  { id: 'faq-3', q: t('faq.q3'), a: t('faq.a3'), open: false },
  { id: 'faq-4', q: t('faq.q4'), a: t('faq.a4'), open: false },
  { id: 'faq-5', q: t('faq.q5'), a: t('faq.a5'), open: false }
])

const panelRefs = new Map()
const buttonRefs = new Map()

function registerPanel(id, el) {
  if (el) panelRefs.set(id, el)
}

function registerButton(id, el) {
  if (el) buttonRefs.set(id, el)
}

function toggle(id) {
  const target = items.value.find(i => i.id === id)
  if (!target) return
  const btn = buttonRefs.get(id)
  const prevTop = btn ? btn.getBoundingClientRect().top : null

  // Просто меняем состояние текущего элемента
  target.open = !target.open

  nextTick(() => {
    target.open ? animateOpen(id) : animateClose(id)

    // Scroll compensation
    if (btn && prevTop !== null) {
      const newTop = btn.getBoundingClientRect().top
      const delta = newTop - prevTop
      if (Math.abs(delta) > 1) window.scrollBy({ top: delta, left: 0 })
    }
  })
}

function animateOpen(id) {
  const el = panelRefs.get(id)
  if (!el) return
  el.style.display = 'block' // показываем перед анимацией
  const h = el.scrollHeight
  el.style.height = '0px'
  el.style.opacity = '0'
  el.style.transform = 'translateY(-6px)'

  // force reflow
  void el.offsetHeight

  el.style.transition = 'height 450ms cubic-bezier(0.22,1,0.36,1), opacity 350ms ease, transform 400ms ease'
  el.style.height = h + 'px'
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'

  const onEnd = () => {
    el.style.height = 'auto'
    el.style.overflow = ''
    el.style.willChange = ''
    el.removeEventListener('transitionend', onEnd)
  }
  el.addEventListener('transitionend', onEnd)
}

function animateClose(id) {
  const el = panelRefs.get(id)
  if (!el) return
  const h = el.scrollHeight
  el.style.height = h + 'px'
  el.style.opacity = '1'
  el.style.transform = 'translateY(0)'

  // force reflow
  void el.offsetHeight

  el.style.transition = 'height 380ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease, transform 350ms ease'
  el.style.height = '0px'
  el.style.opacity = '0'
  el.style.transform = 'translateY(-6px)'

  const onEnd = () => {
    el.style.overflow = ''
    el.style.display = 'none' // скрываем после закрытия
    el.style.willChange = ''
    el.removeEventListener('transitionend', onEnd)
  }
  el.addEventListener('transitionend', onEnd)
}
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <h2 class="title section-title">{{ t('faq.title') }}</h2>

      <div class="faq-list" role="tablist">
        <div
          v-for="it in items"
          :key="it.id"
          class="faq-item"
          :class="{ open: it.open }"
          :aria-expanded="it.open ? 'true' : 'false'"
        >
          <button
            class="faq-question"
            :aria-controls="`${it.id}-panel`"
            :id="`${it.id}-button`"
            @click="toggle(it.id)"
            :ref="(el) => registerButton(it.id, el)"
          >
            <span class="q-text">{{ it.q }}</span>
            <span class="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
          <div
              class="faq-answer"
              role="region"
              :id="`${it.id}-panel`"
              :aria-labelledby="`${it.id}-button`"
              :ref="(el) => registerPanel(it.id, el)"
              v-show="it.open"
          >
            <p v-html="it.a" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 48px 0;
}

.title.section-title {
  color: var(--title-color);
}

.faq-list {
  display: grid;
  gap: 12px;
  /* Prevent layout shifts due to anchor-based scroll adjustments */
  overflow-anchor: none;
}

.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
}

.faq-item.open {
  box-shadow: 0 10px 24px rgba(0,0,0,0.07);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 18px;
  gap: 12px;
  color: var(--text-color);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.q-text { text-align: left; font-weight: 600; }

.icon { transition: transform 300ms ease; color: var(--primary-color); }

.faq-item.open .icon { transform: rotate(45deg); }

.faq-answer {
  padding: 0 18px 16px 18px;
  color: var(--text-color);
  line-height: 1.55;
}

/* Dark theme */
.dark .faq-item { background: var(--dk-card-bg); border-color: var(--dk-br-color-card); }
.dark .faq-question { color: var(--dk-title-color); }
.dark .faq-answer { color: var(--dk-text-color); }
.dark .icon { color: var(--dk-link-color); }

@media (max-width: 768px) {
  .faq-section { padding: 32px 0; }
}
</style>


