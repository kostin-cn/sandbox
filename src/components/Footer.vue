<template>
  <footer class="footer oo-footer shadow">
    <div class="forNav" id="footer"></div>

    <div class="wrapper">
      <div class="oo-footer-intro">
        <div class="oo-footer-brand">
          <router-link :to="`/${locale}`" class="oo-footer-mark">
            <BrandLogo/>
          </router-link>
          <p class="fs-2" v-html="t('footer.text_1')"/>
        </div>

        <div class="oo-community-card">
          <a class="oo-community-qr" href="https://t.me/+SxdExunv-QBmZTcy" target="_blank" rel="noopener noreferrer">
            <img :src="`${baseUrl}svg/chat-qr.svg`" alt="Telegram QR">
          </a>
          <a
            href="https://t.me/+SxdExunv-QBmZTcy"
            class="oo-footer-action hover font-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('footer.btn_1') }}
            <img :src="`${baseUrl}svg/arrow-right.svg`" alt="">
          </a>
        </div>
      </div>

      <div class="oo-footer-grid">
        <section class="oo-contact-card">
          <p class="oo-footer-label" v-html="t('footer.text_3')"/>
          <a class="oo-contact-link" v-for="item in PHONES" :key="item" :href="`tel:${item}`">{{ item }}</a>
        </section>

        <section class="oo-contact-card">
          <p class="oo-footer-label" v-html="t('footer.text_4')"/>
          <a class="oo-contact-link" v-for="item in EMAILS" :key="item" :href="`mailto:${item}`">{{ item }}</a>
          <p class="font-700" v-html="t('footer.text_6')"/>
          <p v-html="t('footer.text_5')"/>
        </section>

        <section class="oo-contact-card oo-callback-card">
          <p class="oo-footer-label" v-html="t('footer.text_7')"/>
          <p class="mb-2" v-html="t('footer.text_8')"/>
          <form class="oo-callback-form" @submit.prevent="$sendMail({action: 'callMe', phone: phone})">
            <input type="tel" v-model="phone" class="form-input" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
            <button type="submit" class="oo-callback-submit hover font-700" v-html="t('footer.btn_2')"/>
          </form>
        </section>
      </div>

      <div class="oo-footer-social">
        <p class="font-700" v-html="t('footer.text_2')"/>
        <div class="oo-resource-links">
          <a
            class="social oo-resource-link"
            v-for="item in SOCIALS"
            :key="item.title"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            :title="item.title"
          >
            <img :src="`${baseUrl}svg/${item.img_w}`" :alt="item.title">
            <span>{{ item.title }}</span>
          </a>
        </div>
      </div>

      <div class="oo-footer-bottom">
        <div class="oo-legal-links">
          <template v-for="item in links" :key="item.title">
            <router-link
              v-if="item.allowedLocales.includes(locale as Locale)"
              :to="item.link"
            >{{ item.title }}</router-link>
          </template>
        </div>
        <span>© Organization {{ new Date().getFullYear() }}. {{ t('footer.text_9') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES } from '@/service/i18n';
import type { Locale } from '@/service/i18n';
import BrandLogo from '@/components/BrandLogo.vue';

import { SOCIALS, PHONES, EMAILS } from '@/service/constants';

const { locale, t } = useI18n();
const phone = ref(null as string);
const baseUrl = import.meta.env.BASE_URL;

const links = computed(() => ([
  {title: t('footer.title_1'), link: `/${locale.value}/privacy-policy`, allowedLocales: SUPPORT_LOCALES},
  {title: t('footer.title_2'), link: `/${locale.value}/public-offer`, allowedLocales: SUPPORT_LOCALES},
  {title: 'Реєстр ГО', link: `/${locale.value}/go`, allowedLocales: ['ua']}
]));
</script>
