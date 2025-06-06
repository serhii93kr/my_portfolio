<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <h1 class="text-4xl title font-bold text-gray-900 sm:text-5xl">{{ $t('pricing.title') }}</h1>
        <p class="mt-4 text-xl text-gray-600">{{ $t('pricing.subtitle') }}</p>
      </div>

      <!-- Web Development Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center title mb-8">{{ $t('pricing.web.title') }}</h2>
        <div class="grid gap-8 lg:grid-cols-3">
          <PricingCard
            :title="$t('pricing.web.support.title')"
            :description="$t('pricing.web.support.description')"
            :price="$t('pricing.web.support.price')"
            :features="[
              $t('pricing.web.support.features.support'),
              $t('pricing.web.support.features.bugfixes'),
              $t('pricing.web.support.features.updates')
            ]"
            :per-hour="$t('pricing.per_hour')"
          />
          <PricingCard
            :title="$t('pricing.web.mvp.title')"
            :description="$t('pricing.web.mvp.description')"
            :price="$t('pricing.web.mvp.price')"
            :features="[
              $t('pricing.web.mvp.features.development'),
              $t('pricing.web.mvp.features.design'),
              $t('pricing.web.mvp.features.documentation'),
              $t('pricing.web.mvp.features.support')
            ]"
            :per-hour="$t('pricing.per_hour')"
            is-popular
          />
          <PricingCard
            :title="$t('pricing.web.maximum.title')"
            :description="$t('pricing.web.maximum.description')"
            :price="$t('pricing.web.maximum.price')"
            :features="[
              $t('pricing.web.maximum.features.development'),
              $t('pricing.web.maximum.features.design'),
              $t('pricing.web.maximum.features.testing'),
              $t('pricing.web.maximum.features.support')
            ]"
            :per-hour="$t('pricing.per_hour')"
          />
        </div>
      </div>

      <!-- Mobile Development Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center title mb-8">{{ $t('pricing.mobile.title') }}</h2>
        <div class="grid gap-8 lg:grid-cols-3">
          <PricingCard
            :title="$t('pricing.mobile.support.title')"
            :description="$t('pricing.mobile.support.description')"
            :price="$t('pricing.mobile.support.price')"
            :features="[
              $t('pricing.mobile.support.features.support'),
              $t('pricing.mobile.support.features.bugfixes'),
              $t('pricing.mobile.support.features.updates')
            ]"
            :per-hour="$t('pricing.per_hour')"
          />
          <PricingCard
            :title="$t('pricing.mobile.mvp.title')"
            :description="$t('pricing.mobile.mvp.description')"
            :price="$t('pricing.mobile.mvp.price')"
            :features="[
              $t('pricing.mobile.mvp.features.development'),
              $t('pricing.mobile.mvp.features.design'),
              $t('pricing.mobile.mvp.features.documentation'),
              $t('pricing.mobile.mvp.features.support')
            ]"
            :per-hour="$t('pricing.per_hour')"
            is-popular
          />
          <PricingCard
            :title="$t('pricing.mobile.maximum.title')"
            :description="$t('pricing.mobile.maximum.description')"
            :price="$t('pricing.mobile.maximum.price')"
            :features="[
              $t('pricing.mobile.maximum.features.development'),
              $t('pricing.mobile.maximum.features.design'),
              $t('pricing.mobile.maximum.features.testing'),
              $t('pricing.mobile.maximum.features.support')
            ]"
            :per-hour="$t('pricing.per_hour')"
          />
        </div>
      </div>

      <!-- Contact Button -->
      <div class="mt-16 text-center">
        <a
          href="https://t.me/your_telegram_username"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.09-.2-.1-.06-.24-.04-.34-.02-.15.02-2.49 1.58-7.02 4.66-.67.47-1.28.7-1.83.69-.6-.01-1.76-.34-2.62-.62-1.06-.35-1.91-.54-1.84-1.14.03-.33.5-.67 1.37-1.03 5.45-2.4 9.08-3.98 10.9-4.7 5.16-2.1 6.22-2.47 6.91-2.47.16 0 .51.04.74.24.21.18.27.42.29.58-.01.06-.01.24-.02.38z"/>
          </svg>
          {{ $t('pricing.contact') }}
        </a>
      </div>
    </div>
  </div>
  <BottomBar/>
</template>

<script setup lang="ts">
import PricingCard from '@/components/PricingCard.vue'
import BottomBar from '@/views/BottomBar.vue';
</script>
  