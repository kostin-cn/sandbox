<template>
  <header class="header shadow">
    <nav id="navMenu" class="nav-menu wrapper d-flex align-center justify-center">
      <div class="nav-container d-flex flex-wrap justify-end text-uppercase">
        <router-link v-for="item in nav1" class="nav-link" :to="item.link">{{ item.title }}</router-link>
      </div>

      <router-link class="logo" :to="`/${locale}`">
        <img src="/svg/logo.svg" alt="logo">
      </router-link>

      <div class="nav-container d-flex flex-wrap text-uppercase">
        <router-link v-for="item in nav2" class="nav-link" :to="item.link">{{ item.title }}</router-link>
      </div>

      <div id="menuBtn" class="menuBtn" @click="btnClick">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    <div class="lang-switcher fs-2 text-uppercase">
      <div id="langCurrent" class="current-lang" @click="langClick">{{ locale }}</div>
      <div id="langList" class="lang-list shadow-item flex-column align-center bg-secondary">
        <router-link v-for="lang in SUPPORT_LOCALES.filter(elem => elem !== locale)" :to="getLangLink(lang)" @click="langClick">{{ lang }}</router-link>
      </div>
    </div>

    <div id="mobileMenu" class="mobile-menu flex-column align-center">
      <router-link v-for="item in nav1" class="nav-link" :to="item.link" @click="btnClick">{{ item.title }}</router-link>
      <router-link v-for="item in nav2" class="nav-link" :to="item.link" @click="btnClick">{{ item.title }}</router-link>

      <div class="mobile-lang-switcher fs-2 text-uppercase">
        <div id="mobLangCurrent" class="current-lang mb-2" @click="mobLangClick">{{ locale }}</div>
        <div id="mobLangList" class="lang-list shadow-item">
          <router-link v-for="lang in SUPPORT_LOCALES.filter(elem => elem !== locale)" class="lang-link" :to="getLangLink(lang)" @click="mobLangClick">{{ lang }}</router-link>
        </div>
      </div>
    </div>

    <div class="triangle"/>
  </header>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();
import { SUPPORT_LOCALES } from '@/service/i18n'

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
  {title: t('header.title_1'), link: `/${locale.value}/#control`},
  {title: t('header.title_2'), link: `/${locale.value}/#mobileApp`},
  {title: t('header.title_3'), link: `/${locale.value}/#meet`}
]));

const nav2 = computed(() => ([
  {title: t('header.title_4'), link: `/${locale.value}/tariffs`},
  {title: t('header.title_5'), link: '#footer'},
  {title: t('header.title_6'), link: `/${locale.value}/admin`}
]));

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

const getLangLink = (newLang: string) => {
  const route = useRoute();
  const pathWithoutLang = route.path.replace(/^\/[^/]+/, '')
  return {
    path: `/${newLang}${pathWithoutLang}`,
    hash: route.hash
  }
}
</script>

<style scoped lang="scss">
.lang-switcher {
  position: absolute;
  top: 50%;
  right: 3vw;
  transform: translateY(-50%);

  .current-lang {
    cursor: pointer;
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
    cursor: pointer;
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