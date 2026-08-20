<template>
  <header class="header shadow">
    <nav id="navMenu" class="nav-menu oo-header-nav wrapper d-flex align-center">
      <router-link class="logo" :to="`/${locale}`">
        <BrandLogo/>
      </router-link>

      <div class="nav-container oo-main-nav d-flex flex-wrap justify-end text-uppercase">
        <router-link
          v-for="item in navItems"
          :key="item.title"
          :class="['nav-link', { 'header-admin-link': item.isAction }]"
          :to="item.link"
        >{{ item.title }}</router-link>
      </div>

      <div class="lang-switcher fs-2 text-uppercase">
        <button id="langCurrent" type="button" class="current-lang" aria-haspopup="true" @click="langClick">{{ locale }}</button>
        <div id="langList" class="lang-list shadow-item flex-column align-center bg-secondary">
          <router-link v-for="lang in SUPPORT_LOCALES.filter(elem => elem !== locale)" :key="lang" :to="getLangLink(lang)" @click="langClick">{{ lang }}</router-link>
        </div>
      </div>

      <button id="menuBtn" type="button" class="menuBtn" :aria-label="menuLabel" @click="btnClick">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div id="mobileMenu" class="mobile-menu flex-column align-center">
      <router-link v-for="item in navItems" :key="item.title" class="nav-link" :to="item.link" @click="btnClick">{{ item.title }}</router-link>

      <div class="mobile-lang-switcher fs-2 text-uppercase">
        <button id="mobLangCurrent" type="button" class="current-lang mb-2" aria-haspopup="true" @click="mobLangClick">{{ locale }}</button>
        <div id="mobLangList" class="lang-list shadow-item">
          <router-link v-for="lang in SUPPORT_LOCALES.filter(elem => elem !== locale)" :key="lang" class="lang-link" :to="getLangLink(lang)" @click="handleMobileLanguageClick">{{ lang }}</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();
const route = useRoute();
import { SUPPORT_LOCALES } from '@/service/i18n'
import BrandLogo from '@/components/BrandLogo.vue';

const localizedMetaAvailable = computed(() => ['en', 'ua'].includes(locale.value));
const menuLabel = computed(() => localizedMetaAvailable.value ? t('header.menu_label') : 'Menu');

watchEffect(() => {
  document.documentElement.lang = locale.value === 'ua' ? 'uk' : locale.value;
  document.title = localizedMetaAvailable.value ? t('header.meta_title') : 'OrganizationOffice';
});

window.addEventListener('scroll', () => {
  window.scrollY >= 100 ? document.body.classList.add('scrolled') : document.body.classList.remove('scrolled');
});

document.addEventListener('click', (event: MouseEvent) => {
  const langList = document.querySelector('#langList');
  const langCurrent = document.querySelector('#langCurrent');
  const mobLangList = document.querySelector('#mobLangList');
  const mobLangCurrent = document.querySelector('#mobLangCurrent');

  if (!langList.contains(event.target as Node) && !langCurrent.contains(event.target as Node)) {
    langList.classList.remove('d-flex');
  }

  if (!mobLangList.contains(event.target as Node) && !mobLangCurrent.contains(event.target as Node)) {
    mobLangList.classList.remove('d-flex');
  }
})

const nav1 = computed(() => ([
  {title: t('header.title_1'), link: `/${locale.value}/#workflows`, isAction: false},
  {title: t('header.title_2'), link: `/${locale.value}/#onboarding`, isAction: false},
  {title: t('header.title_3'), link: `/${locale.value}/#meet`, isAction: false}
]));

const nav2 = computed(() => ([
  {title: t('header.title_4'), link: `/${locale.value}/#mobileApp`, isAction: false},
  {title: t('header.title_5'), link: `/${locale.value}/#consultation`, isAction: false},
  {title: t('header.title_6'), link: `/${locale.value}/admin`, isAction: true}
]));

const navItems = computed(() => ([...nav1.value, ...nav2.value]));

const btnClick = () => {
  document.querySelector('#menuBtn').classList.toggle('active');
  document.querySelector('#mobileMenu').classList.toggle('active');
  document.querySelector('#navMenu').classList.toggle('active');
  document.body.classList.toggle('block');
};

const langClick = () => {
  document.querySelector('#langList').classList.toggle('d-flex');
};

const mobLangClick = () => {
  document.querySelector('#mobLangList').classList.toggle('d-flex');
};

const handleMobileLanguageClick = () => {
  mobLangClick();
  btnClick();
};

const getLangLink = (newLang: string) => {
  const pathWithoutLang = route.path.replace(/^\/[^/]+/, '')
  return {
    path: `/${newLang}${pathWithoutLang}`,
    hash: route.hash
  }
}
</script>

<style scoped lang="scss">
.lang-switcher {
  flex: 0 0 auto;
  margin-left: 12px;

  .current-lang {
    appearance: none;
    padding: 6px 8px;
    border: 0;
    border-radius: 6px;
    color: inherit;
    background: transparent;
    font: inherit;
    line-height: 1;
    text-transform: inherit;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;

    &:focus-visible {
      outline: 2px solid #287dac;
      outline-offset: 3px;
    }
  }

  .lang-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 8px;
    border-radius: 8px;
    transform: translateX(-50%);
  }
}

.mobile-lang-switcher {
  margin-top: 16px;

  .current-lang {
    appearance: none;
    padding: 6px 8px;
    border: 0;
    border-radius: 6px;
    color: inherit;
    background: transparent;
    font: inherit;
    line-height: 1;
    text-transform: inherit;
    cursor: pointer;
    user-select: none;
    caret-color: transparent;

    &:focus-visible {
      outline: 2px solid #287dac;
      outline-offset: 3px;
    }
  }

  .lang-list {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 8px;
    border-radius: 8px;
    transform: translateX(-50%);
  }

  .lang-link {
    padding: 8px;
  }
}

@media (max-width: 1200px) {
  .lang-switcher {
    display: none;
  }
}
</style>
