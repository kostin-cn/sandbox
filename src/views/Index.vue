<template>
  <main class="oo-home">
    <section class="oo-hero">
      <div class="wrapper oo-hero-shell">
        <div class="oo-hero-copy animate-block">
          <p class="oo-kicker">OrganizationOffice</p>
          <h1 class="oo-display mb-3" v-html="t('index.s_1.title')"/>
          <p class="oo-lead mb-3" v-html="t('index.s_1.text_1')"/>

          <div class="oo-hero-actions d-flex flex-wrap">
            <router-link
              :to="{ path: `/${locale}`, hash: '#consultation' }"
              class="oo-primary-action hover font-700"
            >
              {{ t('index.s_2.btn') }}
              <img :src="`${baseUrl}svg/arrow-right.svg`" alt="">
            </router-link>
            <router-link
              :to="{ path: `/${locale}`, hash: '#workflows' }"
              class="oo-secondary-action hover font-700"
            >
              {{ t('index.s_4.btn') }}
            </router-link>
          </div>
        </div>

        <div class="oo-hero-visual animate-block from-right delay-1">
          <div class="oo-product-frame">
            <span class="oo-frame-label" v-html="t('index.s_1.text_2')"/>
            <img :src="`${baseUrl}img/${section1.img}`" :alt="t('index.s_1.text_1')">
          </div>

          <div class="oo-app-card">
            <a class="oo-qr" :href="`/${locale}/mobile-app?d=mobile`" target="_blank" rel="noopener noreferrer">
              <img :src="`${baseUrl}svg/${section1.qr}`" alt="QR">
            </a>
            <div>
              <p class="font-700 mb-1" v-html="t('index.s_1.text_2')"/>
              <div class="oo-store-links d-flex flex-wrap">
                <a
                  v-for="item in APPS"
                  :key="item.title"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="oo-store-link d-flex align-center"
                >
                  <img :src="`${baseUrl}svg/${item.img}`" alt="">
                  <span>{{ t('index.s_1.text_3') }}<br><b>{{ item.title }}</b></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="oo-section oo-types">
      <div class="wrapper">
        <div class="oo-section-heading animate-block">
          <h2 class="oo-section-title" v-html="t('index.s_3.title')"/>
        </div>

        <div class="oo-card-grid oo-card-grid-three">
          <article
            v-for="(item, index) in section3"
            :key="item.img"
            :class="`oo-type-card animate-block delay-${index + 1}`"
          >
            <span class="oo-card-index">0{{ index + 1 }}</span>
            <img :src="`${baseUrl}svg/${item.img}`" alt="">
            <p v-html="item.text"/>
          </article>
        </div>
      </div>
    </section>

    <section id="workflows" class="oo-section oo-workflows">
      <div class="forNav" id="control"/>
      <div class="wrapper oo-feature-layout">
        <div class="oo-feature-copy animate-block from-left">
          <p class="oo-kicker" v-html="t('index.s_4.text')"/>
          <h2 class="oo-section-title mb-3" v-html="t('index.s_4.title')"/>
          <div class="oo-workflow-list">
            <div v-for="(item, index) in section4.items" :key="index" class="oo-workflow-row">
              <span>0{{ index + 1 }}</span>
              <p v-html="item"/>
            </div>
          </div>
          <router-link :to="section4.link" class="oo-text-link font-700">
            {{ t('index.s_4.btn') }}
            <img :src="`${baseUrl}svg/arrow-right-3.svg`" alt="">
          </router-link>
        </div>

        <div class="oo-feature-media animate-block from-right delay-1">
          <div class="oo-media-caption" v-html="t('index.s_4.text')"/>
          <img :src="`${baseUrl}img/${section4.img}`" :alt="t('index.s_4.title')">
        </div>
      </div>
    </section>

    <section id="onboarding" class="oo-section oo-onboarding">
      <div class="wrapper">
        <div class="oo-section-heading animate-block">
          <p class="oo-kicker" v-html="t('header.title_2')"/>
          <h2 class="oo-section-title" v-html="t('index.s_7.title')"/>
        </div>

        <ol class="oo-step-list">
          <li v-for="(item, index) in onboardingSteps" :key="item.title" class="animate-block">
            <span class="oo-step-number">{{ index + 1 }}</span>
            <div>
              <h3 v-html="item.title"/>
              <p v-html="item.text"/>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section id="mobileApp" class="oo-section oo-mobile">
      <div class="wrapper oo-mobile-layout">
        <div class="oo-mobile-visual animate-block from-left">
          <div class="oo-phone-glow"></div>
          <img :src="`${baseUrl}img/${section5.img}`" :alt="t('index.s_5.title')">
        </div>

        <div class="oo-feature-copy animate-block delay-1">
          <p class="oo-kicker" v-html="t('index.s_5.text')"/>
          <h2 class="oo-section-title mb-3" v-html="t('index.s_5.title')"/>
          <ul class="oo-check-list mb-3">
            <li v-for="item in section5.items" :key="item" v-html="item"/>
          </ul>
          <router-link :to="section5.link" class="oo-text-link font-700">
            {{ t('index.s_5.btn') }}
            <img :src="`${baseUrl}svg/arrow-right-3.svg`" alt="">
          </router-link>
        </div>
      </div>
    </section>

    <section id="meet" class="oo-section oo-meetings">
      <div class="wrapper oo-meeting-card">
        <div class="oo-feature-copy animate-block">
          <p class="oo-kicker" v-html="t('header.title_3')"/>
          <h2 class="oo-section-title mb-3" v-html="t('index.s_6.title')"/>
          <p class="oo-meeting-intro font-700 mb-2" v-html="section6.text[0]"/>
          <p class="oo-meeting-flow mb-3" v-html="section6.text[1]"/>
          <router-link :to="section6.link" class="oo-light-link font-700">
            {{ t('index.s_6.btn') }}
            <img :src="`${baseUrl}svg/arrow-right.svg`" alt="">
          </router-link>
        </div>
        <div class="oo-meeting-media animate-block from-right delay-1">
          <img :src="`${baseUrl}img/${section6.img}`" :alt="t('index.s_6.title')">
        </div>
      </div>
    </section>

    <section class="oo-section oo-trust">
      <div class="wrapper oo-trust-layout">
        <div class="oo-trust-copy animate-block">
          <h2 class="oo-section-title mb-3" v-html="t('index.s_7.text_7')"/>
          <router-link :to="section7.link" class="oo-text-link font-700">
            {{ t('index.s_7.btn') }}
            <img :src="`${baseUrl}svg/arrow-right-3.svg`" alt="">
          </router-link>
        </div>

        <div class="oo-trust-points">
          <article v-for="item in trustPoints" :key="item.title" class="oo-trust-card animate-block delay-1">
            <h3 v-html="item.title"/>
            <p v-html="item.text"/>
          </article>
        </div>
      </div>
    </section>

    <section id="consultation" class="oo-section oo-consultation">
      <div class="wrapper oo-consultation-shell animate-block">
        <div class="oo-consultation-copy">
          <p class="oo-kicker" v-html="t('header.title_5')"/>
          <h2 class="oo-section-title mb-2" v-html="t('index.s_2.title')"/>
          <p v-html="t('footer.text_8')"/>
        </div>

        <form
          class="oo-consultation-form"
          @submit.prevent="$sendMail({action: 'requestConsultation', name: section2.name, phone: section2.phone, org: section2.org})"
        >
          <input type="text" class="form-input" v-model="section2.name" required :placeholder="t('control.s_2.placeholder_1')">
          <input type="tel" class="form-input" v-model="section2.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          <input type="text" class="form-input" v-model="section2.org" required :placeholder="t('control.s_2.placeholder_2')">
          <button type="submit" class="oo-submit hover font-700">
            {{ t('index.s_2.btn') }}
            <img :src="`${baseUrl}svg/arrow-right.svg`" alt="">
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { APPS } from '@/service/constants';
import { scrollAnimate } from '@/service/global';

const { locale, t } = useI18n();

const baseUrl = '/sandbox/';

const section1 = {
  img: 'index_1_1.png',
  qr: 'qr2.svg'
};

const section2 = ref({
  name: '',
  phone: '',
  org: ''
});

const section3 = computed(() => ([
  { img: 'users.svg', text: t('index.s_3.text_1') },
  { img: 'documents.svg', text: t('index.s_3.text_2') },
  { img: 'online-meeting.svg', text: t('index.s_3.text_3') }
]));

const section4 = computed(() => ({
  img: 'index_4_1.png',
  link: `/${locale.value}/control`,
  items: [
    t('index.s_4.item_1'),
    t('index.s_4.item_2'),
    t('index.s_4.item_3'),
    t('index.s_4.item_4')
  ]
}));

const section5 = computed(() => ({
  img: 'index_5_1.png',
  link: `/${locale.value}/mobile-app`,
  items: [
    t('index.s_5.item_1'),
    t('index.s_5.item_2'),
    t('index.s_5.item_3'),
    t('index.s_5.item_4')
  ]
}));

const section6 = computed(() => ({
  img: 'index_6_1.png',
  link: `/${locale.value}/meeting`,
  text: [
    t('index.s_6.text_1'),
    t('index.s_6.text_2')
  ]
}));

const onboardingSteps = computed(() => ([
  { title: t('index.s_7.text_1'), text: t('index.s_7.list_1_1') },
  { title: t('index.s_7.text_2'), text: t('index.s_7.list_2_1') },
  { title: t('index.s_7.text_3'), text: t('index.s_7.list_3_1') },
  { title: t('index.s_7.text_4'), text: t('index.s_7.list_4_1') }
]));

const trustPoints = computed(() => ([
  { title: t('index.s_7.text_5'), text: t('index.s_7.list_5_1') },
  { title: t('index.s_7.text_6'), text: t('index.s_7.list_6_1') }
]));

const section7 = computed(() => ({
  link: `/${locale.value}/how`
}));

scrollAnimate();
</script>
