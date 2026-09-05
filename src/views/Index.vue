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
          <img
            class="oo-hero-image"
            :src="`${baseUrl}img/${section1.img}`"
            :alt="t('index.s_1.text_1')"
            :width="section1.width"
            :height="section1.height"
            fetchpriority="high"
            decoding="async"
          >
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
          <img
            :src="`${baseUrl}img/${section4.img}`"
            :alt="section4.alt"
            :width="section4.width"
            :height="section4.height"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section id="onboarding" class="oo-section oo-onboarding">
      <div class="wrapper">
        <div class="oo-section-heading">
          <p class="oo-kicker" v-html="t('header.title_2')"/>
          <h2 class="oo-section-title" v-html="t('index.s_7.title')"/>
        </div>

        <ol class="oo-step-list">
          <li v-for="(item, index) in onboardingSteps" :key="item.title">
            <div class="oo-step-card-head">
              <span class="oo-step-number">{{ index + 1 }}</span>
              <img :src="`${baseUrl}svg/${item.icon}`" alt="" aria-hidden="true">
            </div>
            <div>
              <h3 v-html="item.title"/>
              <p v-html="item.text"/>
            </div>
          </li>
        </ol>

        <div class="oo-onboarding-support">
          <div class="oo-trust-copy">
            <h2 class="oo-section-title mb-3" v-html="t('index.s_7.text_7')"/>
            <router-link :to="section7.link" class="oo-text-link font-700">
              {{ t('index.s_7.btn') }}
              <img :src="`${baseUrl}svg/arrow-right-3.svg`" alt="">
            </router-link>
          </div>

          <div class="oo-trust-points">
            <article v-for="item in trustPoints" :key="item.title" class="oo-trust-card">
              <h3 v-html="item.title"/>
              <p v-html="item.text"/>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="dija" class="oo-section oo-dija">
      <div class="wrapper">
        <div class="row d-flex flex-wrap">
          <div class="col-6 mb-3">
            <div class="oo-consultation-copy">
              <p class="oo-kicker" v-html="sectionDija.meta.category"/>
              <h2 class="oo-section-title mb-3" v-html="sectionDija.meta.title"/>
              <p class="mb-3" v-html="sectionDija.meta.description"/>
            </div>

            <div class="oo-dija-list row d-flex flex-wrap">
              <div v-for="item in sectionDija.metrics" class="col-4 mb-3">
                <h3 v-html="item.value"/>
                <p v-html="item.label"/>
              </div>
            </div>
          </div>

          <div class="col-6 mb-3">
            <div class="oo-workflow-list">
              <div v-for="(item, index) in sectionDija.steps" :key="index" class="oo-workflow-row">
                <span>0{{ index + 1 }}</span>
                <p>
                  <b>{{ item.title }}</b><br>
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="oo-kicker" v-html="sectionDija.benefitsSection.title"/>

        <ul class="oo-check-list d-flex mb-3">
          <li v-for="item in sectionDija.benefitsSection.items" class="mr-2">{{ item }}</li>
        </ul>

      </div>
    </section>

    <section id="mobileApp" class="oo-section oo-mobile">
      <div class="wrapper oo-mobile-layout">
        <div class="oo-mobile-visual animate-block from-left">
          <div class="oo-phone-glow"></div>
          <img
            :src="`${baseUrl}img/${section5.img}`"
            :alt="section5.alt"
            :width="section5.width"
            :height="section5.height"
            loading="lazy"
            decoding="async"
          >
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

          <div class="oo-store-links">
            <a
              v-for="app in APPS"
              :key="app.title"
              :href="app.link"
              class="oo-store-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="`${baseUrl}svg/${app.img}`" :alt="app.title">
              <span>
                <small>{{ t('mobile_app.s_1.btn') }}</small>
                <strong>{{ app.title }}</strong>
              </span>
            </a>
          </div>
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
          <img
            :src="`${baseUrl}img/${section6.img}`"
            :alt="section6.alt"
            :width="section6.width"
            :height="section6.height"
            loading="lazy"
            decoding="async"
          >
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

import { scrollAnimate } from '@/service/global';
import { APPS } from '@/service/constants';

const { locale, t } = useI18n();

const baseUrl = import.meta.env.BASE_URL;

const localizedImageAlt = (section: 4 | 5 | 6) => {
  const key = `index.s_${section}`;

  return locale.value === 'en' || locale.value === 'ua'
    ? t(`${key}.image_alt`)
    : t(`${key}.title`);
};

const section1 = computed(() => locale.value === 'ua'
  ? { img: 'hero_real_workspace_ua.png', width: 1448, height: 1086 }
  : { img: 'hero_real_workspace_en.png', width: 1448, height: 1086 }
);

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
  img: locale.value === 'ua'
    ? 'organization_operating_model_ua.png'
    : 'organization_operating_model_en.png',
  width: locale.value === 'ua' ? 1337 : 1402,
  height: locale.value === 'ua' ? 1176 : 1122,
  alt: localizedImageAlt(4),
  link: `/${locale.value}/control`,
  items: [
    t('index.s_4.item_1'),
    t('index.s_4.item_2'),
    t('index.s_4.item_3'),
    t('index.s_4.item_4')
  ]
}));

const sectionDija = computed(() => ({
  "meta": {
    "category": t('index.s_9.category'),
    "title": t('index.s_9.title'),
    "description": t('index.s_9.description'),
  },
  "metrics": [
    {
      "value": t('index.s_9.list_1_1_value'),
      "label": t('index.s_9.list_1_1_label')
    },
    {
      "value": t('index.s_9.list_1_2_value'),
      "label": t('index.s_9.list_1_2_label')
    },
    {
      "value": t('index.s_9.list_1_3_value'),
      "label": t('index.s_9.list_1_3_label')
    }
  ],
  "steps": [
    {
      "title": t('index.s_9.list_2_1_title'),
      "description": t('index.s_9.list_2_1_description')
    },
    {
      "title": t('index.s_9.list_2_2_title'),
      "description": t('index.s_9.list_2_2_description')
    },
    {
      "title": t('index.s_9.list_2_3_title'),
      "description": t('index.s_9.list_2_3_description')
    }
  ],
  "benefitsSection": {
    "title": t('index.s_9.category_1'),
    "items": [
      t('index.s_9.list_3_1'),
      t('index.s_9.list_3_2'),
      t('index.s_9.list_3_3'),
      t('index.s_9.list_3_4')
    ]
  }
}));

const section5 = computed(() => ({
  img: locale.value === 'ua' ? 'mobile_real_screens_ua.png' : 'mobile_real_screens_en.png',
  width: 1149,
  height: locale.value === 'ua' ? 1369 : 1368,
  alt: localizedImageAlt(5),
  link: `/${locale.value}/mobile-app`,
  items: [
    t('index.s_5.item_1'),
    t('index.s_5.item_2'),
    t('index.s_5.item_3'),
    t('index.s_5.item_4')
  ]
}));

const section6 = computed(() => ({
  img: locale.value === 'ua'
    ? 'meetings_workflow_visual_ua.png'
    : 'meetings_workflow_visual_en.png',
  width: 1448,
  height: 1086,
  alt: localizedImageAlt(6),
  link: `/${locale.value}/meeting`,
  text: [
    t('index.s_6.text_1'),
    t('index.s_6.text_2')
  ]
}));

const onboardingSteps = computed(() => ([
  { icon: 'users.svg', title: t('index.s_7.text_1'), text: t('index.s_7.list_1_1') },
  { icon: 'documents.svg', title: t('index.s_7.text_2'), text: t('index.s_7.list_2_1') },
  { icon: 'registration.svg', title: t('index.s_7.text_3'), text: t('index.s_7.list_3_1') },
  { icon: 'communication.svg', title: t('index.s_7.text_4'), text: t('index.s_7.list_4_1') }
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
