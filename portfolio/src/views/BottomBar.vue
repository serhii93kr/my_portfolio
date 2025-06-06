<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/utils/helpers';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitStatus = ref('')

// Replace with your actual Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = '8063822567:AAEw_oLblhCfjQ1Sv9Z0kS-K3PehxwN8R84'
const TELEGRAM_CHAT_ID = '1753191265'

const sendToTelegram = async (formData) => {
  try {

    const text = `
      New Contact Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `.trim()

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram')
    }

    return true
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return false
  }
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  submitStatus.value = 'sending'

  try {
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value
    }

    const success = await sendToTelegram(formData)
    
    if (success) {
      submitStatus.value = 'success'
      // Clear form
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <footer class="bottom-bar bg-gray-900 text-white py-8">
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      <!-- Левая часть -->
      <div class="bottom-bar-content space-y-4">
        <p class="text-center sm:text-start text-5xl">{{t('future.title')}}</p>
        <p class="text-center sm:text-start text-gray-300 text-3xl">{{t('future.description')}}</p>

        <!-- Email и соцсети -->
        <div class="space-y-2 text-start text-white">
          <a href="mailto:example@email.com" class="hover:underline font-semibold transition-all duration-300">
            example@email.com
          </a>
        </div>

        <div class="flex items-center gap-6 mt-2 text-gray-300">
          <a href="https://github.com/yourprofile" target="_blank" class="flex items-center gap-2 text-gray-300  transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-github text-2xl">
              <img :src="getImageUrl('icons8-git-50.png')" :alt="github" class="w-8 h-8 object-contain" />
            </i>
            <span class="hidden sm:inline">GitHub</span>
          </a>

          <a href="https://t.me/yourprofile" target="_blank" class="flex items-center gap-2 text-gray-300  transition-all duration-300 transform hover:scale-110">
            <i class="fab fa-github text-2xl">
              <img :src="getImageUrl('icons8-telegram-app-50.png')" :alt="telegram" class="w-8 h-8 object-contain" />
            </i>
            <span class="hidden sm:inline">Telegram</span>
          </a>
        </div>
      </div>

      <!-- Правая часть — контактная форма -->
      <div class="bottom-bar-content mb-8">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input
              v-model="name"
              type="text"
              placeholder="Ваше имя"
              class="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              :disabled="isSubmitting"
          />
          <input
              v-model="email"
              type="email"
              placeholder="Ваш email"
              class="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              :disabled="isSubmitting"
          />
          <textarea
              v-model="message"
              rows="3"
              placeholder="Ваше сообщение"
              class="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              :disabled="isSubmitting"
          ></textarea>
          <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Отправка...</span>
            <span v-else>Отправить</span>
          </button>
          
          <!-- Status messages -->
          <div v-if="submitStatus === 'success'" class="text-green-500 text-center">
            Сообщение успешно отправлено!
          </div>
          <div v-if="submitStatus === 'error'" class="text-red-500 text-center">
            Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
          </div>
        </form>
      </div>
    </div>

    <!-- Нижняя строка -->
    <div class="container mx-auto mt-6 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center py-6">
      <p class="mt-6"> &copy; 2025 Мое Портфолио. Все права защищены.</p>
    </div>
  </footer>
</template>
