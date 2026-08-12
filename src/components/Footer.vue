<template>
  <footer class="footer shadow">
    <div class="forNav" id="footer"></div>
    <div class="triangle"/>

    <div class="wrapper">
      <div class="footer-top d-flex align-center">
        <div class="block-left d-flex align-center">
          <img class="mr-2" src="/svg/logo-sm.svg" alt="">
          <a class="d-flex" href="https://t.me/+SxdExunv-QBmZTcy" target="_blank">
            <img src="/svg/chat-qr.svg" alt="">
          </a>
        </div>

        <div class="block-center fs-2">
          <p v-html="t('footer.text_1')"/>
        </div>

        <div class="block-right">
          <a href="https://t.me/+SxdExunv-QBmZTcy" class="btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2" v-html="t('footer.btn_1')" target="_blank"/>
        </div>
      </div>

      <p class="text-center fs-2 mb-2"><b v-html="t('footer.text_2')"/></p>
      
      <div class="d-flex flex-wrap justify-center mb-3">
        <a class="social" v-for="item in SOCIALS" :href="item.link" target="_blank" :title="item.title">
          <img :src="`/svg/${item.img}`" alt="">
        </a>
      </div>

      <div class="row d-flex flex-wrap mb-3">
        <div class="col-4 d-flex flex-column">
          <a class="link font-700 mb-2" v-for="item in PHONES" :href="`tel:${item}`">{{ item }}</a>

          <p class="mb-2" v-html="t('footer.text_3')"/>
        </div>

        <div class="col-4 d-flex flex-column">
          <a class="link font-700 mb-2" v-for="item in EMAILS" :href="`mailto:${item}`">{{ item }}</a>

          <p class="mb-2" v-html="t('footer.text_4')"/>

          <span class="link font-700 mb-2" v-html="t('footer.text_5')"/>

          <p class="mb-2" v-html="t('footer.text_6')"/>
        </div>

        <div class="col-4 d-flex flex-column">
          <span class="link font-700 mb-2" v-html="t('footer.text_7')"/>

          <p class="mb-2" v-html="t('footer.text_8')"/>

          <form class="d-flex" @submit.prevent="$sendMail({action: 'callMe', phone: phone})">
            <input type="tel" v-model="phone" class="form-input" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
            <button type="submit" class="btn btn-sm btn-3 shadow-item hover font-700" v-html="t('footer.btn_2')"/>
          </form>
        </div>
      </div>

      <div class="divider mb-2"></div>

      <div class="footer-bottom d-flex align-center">
        <router-link class="d-flex mb-2" :to="`/${locale}`">
          <img class="logo" src="/svg/logo.svg" alt="Logo">
        </router-link>

        <div class="d-flex flex-wrap flexible justify-center">
          <template v-for="item in links">
            <router-link class="mr-2 mb-2"
                         v-if="item.allowedLocales.includes(locale as Locale)"
                         :to="item.link">{{ item.title }}</router-link>
          </template>
        </div>

        <span class="mb-2">© Organization {{ new Date().getFullYear() }}. {{ t('footer.text_9') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES } from '@/service/i18n';
import type {Locale} from "@/service/i18n";
const { locale, t } = useI18n();

import { SOCIALS, PHONES, EMAILS } from '@/service/constants';

const phone = ref(null as string)

const links = computed(() => ([
  {title: t('footer.title_1'), link: `/${locale.value}/privacy-policy`, allowedLocales: SUPPORT_LOCALES},
  {title: t('footer.title_2'), link: `/${locale.value}/public-offer`, allowedLocales: SUPPORT_LOCALES},
  {title: 'Реєстр ГО', link: `/${locale.value}/go`, allowedLocales: ['ua']}
]))
</script>
