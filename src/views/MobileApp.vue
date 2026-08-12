<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1 section1">
      <div class="wrapper d-flex flex-wrap align-center">
        <div class="block-left">
          <div class="text-container">
            <h1 class="title mb-3 animate-block" v-html="t('mobile_app.s_1.title')"/>

            <p class="text-block fs-2 mb-3 animate-block delay-1" v-html="t('mobile_app.s_1.text_1')"/>

            <ul class="list-4 animate-block delay-1">
              <li class="mb-2" v-for="item in section1.items" v-html="item"></li>
            </ul>

            <div class="app-block d-flex align-center animate-block delay-2">
              <a class="img-container d-flex mr-2" href="/en/mobile-app?d=mobile" target="_blank">
                <img :src="`/svg/${section1.qr}`" alt="QR">
              </a>

              <div class="btn-container">
                <p class="mb-1" v-html="t('mobile_app.s_1.text_2')"/>
                <div class="d-flex flex-wrap">
                  <a v-for="item in APPS" :href="item.link" target="_blank"
                     class="btn btn-4 shadow-item hover d-flex align-center mb-2 mr-2">
                    <img class="mr-2" :src="`/svg/${item.img}`" alt="">
                    <span>{{ t('mobile_app.s_1.btn') }}<br><b>{{ item.title }}</b></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block-right">
          <img class="animate-block from-right delay-3" :src="`/img/${section1.img}`" alt="">
        </div>
      </div>
    </section>

    <!-- SECTION 2 -->
    <section class="s-2 bg-secondary">
      <div class="wrapper d-flex flex-wrap align-center">
        <div class="block-left">
          <div class="img-container">
            <img :src="`/img/${section2.img}`" alt="">
          </div>
        </div>
        
        <div class="block-right color-secondary">
          <h3 class="title mb-3 animate-block" v-html="t('mobile_app.s_2.title')"/>

          <p class="fs-2 mb-3 animate-block delay-1" v-html="t('mobile_app.s_2.text_1')"/>

          <div class="divider bg-secondary mb-3 animate-block delay-1"></div>

          <p class="fs-2 mb-3 animate-block delay-2" v-html="t('mobile_app.s_2.text_2')"/>

          <div class="d-flex flex-wrap animate-block delay-2">
            <a class="social" v-for="item in SOCIALS" :href="item.link" target="_blank" :title="item.title">
              <img :src="`/svg/${item.img_w}`" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section class="s-3 section3 bg-secondary">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('mobile_app.s_3.title')"/>

        <div class="row d-flex flex-wrap justify-center">
          <div v-for="(item, index) in section3" :class="`col-4 mb-3 animate-block delay-${index+1}`">
            <div :class="`block-item b-${index % 3} d-flex flex-column align-center`">
              <img class="mb-3" :src="`/svg/${item.img}`" alt="">
              <p class="fs-2 text-center" v-html="item.text"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 -->
    <section class="s-4 section3 bg-secondary">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('mobile_app.s_4.title')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section4" :class="`col-4 mb-3 animate-block delay-${index+1}`">
            <div :class="`block-item b-${index % 3} d-flex flex-column`">
              <div class="block-title font-700">
                <img class="mb-2" :src="`/svg/${item.img}`" alt="">
                <p v-html="item.text"/>
              </div>

              <div class="block-text fs-2 bg-secondary flexible">
                <ul :class="`list-${index % 3 === 0 ? 5 : index % 3 === 1 ? 3 : 4}`">
                  <li class="mb-2" v-for="el in item.list" v-html="el"/>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section class="s-5 section1">
      <div class="wrapper bg-gradient d-flex flex-wrap align-center">
        <div class="block-left">
          <div class="text-container">
            <h3 class="title mb-3 animate-block" v-html="t('mobile_app.s_5.title')"/>

            <p class="fs-2 mb-3 animate-block delay-1" v-html="t('mobile_app.s_5.text_1')"/>

            <p class="fs-2 mb-3 animate-block delay-1" v-html="t('mobile_app.s_5.text_2')"/>

            <div class="app-block d-flex align-center animate-block delay-2">
              <a class="img-container d-flex mr-2" href="/en/mobile-app?d=mobile" target="_blank">
                <img :src="`/svg/${section5.qr}`" alt="QR">
              </a>

              <div class="btn-container">
                <p class="mb-1" v-html="t('mobile_app.s_5.text_3')"/>

                <div class="d-flex flex-wrap">
                  <a v-for="item in APPS" :href="item.link" target="_blank"
                     class="btn btn-4 shadow-item hover d-flex align-center mb-2 mr-2">
                    <img class="mr-2" :src="`/svg/${item.img}`" alt="">
                    <span>{{ t('mobile_app.s_5.btn') }}<br><b>{{ item.title }}</b></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block-right">
          <img class="animate-block from-right delay-3" :src="`/img/${section5.img}`" alt="">
        </div>
      </div>
    </section>

    <!-- SECTION 6 -->
    <section class="s-6 section2">
      <form class="form-container wrapper v2" @submit.prevent="$sendMail({action: 'getAdmin', name: section6.name, phone: section6.phone})">
        <h3 class="text-center mb-1 animate-block" v-html="t('mobile_app.s_6.title')"/>

        <p class="text-center mb-3 animate-block delay-1" v-html="t('mobile_app.s_6.text')"/>

        <div class="row d-flex justify-center flex-wrap">
          <div class="col-3 mb-2 animate-block delay-2">
            <input type="text" class="form-input" v-model="section6.name" required :placeholder="t('mobile_app.s_6.placeholder')">
          </div>

          <div class="col-3 mb-2 animate-block delay-3">
            <input type="tel" class="form-input" v-model="section6.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          </div>

          <div class="col-3 d-flex justify-end mb-2 animate-block delay-4">
            <button type="submit" class="btn btn-sm btn-1 shadow-item hover d-flex align-center font-700">{{ t('mobile_app.s_6.btn') }} <img src="/svg/arrow-right.svg" alt=""></button>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import { APPS, SOCIALS } from '@/service/constants';
import {scrollAnimate} from "@/service/global";

// redirect to app by QR
if (window.location.search.includes('d=mobile')) {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) window.location.href = APPS[1].link;
  if (/iphone|ipad|ipod/.test(userAgent)) window.location.href = APPS[0].link;
}

const section1 = computed(() => ({
  img: 'mobile-app_1_1.png',
  qr: 'qr2.svg',
  items: [
      t('mobile_app.s_1.item_1'),
      t('mobile_app.s_1.item_2'),
      t('mobile_app.s_1.item_3')
  ]
}));

const section2 = {
  img: 'mobile-app_2_1.png',
}

const section3 = computed(() => ([
  {img: 'download.svg', text: t('mobile_app.s_3.item_1')},
  // {img: 'list-search.svg', text: t('mobile_app.s_3.item_2')},
  // {img: 'hash.svg', text: t('mobile_app.s_3.item_3')}
]));

const section4 = computed(() => ([
  {img: 'transparency.svg',
    text: t('mobile_app.s_4.item_1'),
    list: [
      t('mobile_app.s_4.list_1_1'),
      t('mobile_app.s_4.list_1_2'),
      t('mobile_app.s_4.list_1_3'),
      t('mobile_app.s_4.list_1_4')
    ]
  },
  {img: 'communication.svg',
    text: t('mobile_app.s_4.item_2'),
    list: [
      t('mobile_app.s_4.list_2_1'),
      t('mobile_app.s_4.list_2_2')
    ]},
  {img: 'like.svg',
    text: t('mobile_app.s_4.item_3'),
    list: [
      t('mobile_app.s_4.list_3_1'),
      t('mobile_app.s_4.list_3_2'),
      t('mobile_app.s_4.list_3_3'),
      t('mobile_app.s_4.list_3_4')
    ]}
]));

const section5 = {
  img: 'control_7_1.png',
  qr: 'qr2.svg'
};

const section6 = ref({
  name: '',
  phone: ''
});

scrollAnimate();
</script>

<style scoped lang="scss">
.s-1 {
  z-index: 3;
}

.s-2 {
  padding: 96px 0 80px;
  .circle-lg {
    top: -160px;
    left: 5vw;
    z-index: 2;
  }
  .wrapper {
    background-color: #AF72AF;
    border-radius: 16px;
  }
  .block-left {
    width: 40%;

    .img-container {
      width: 100%;
      padding-bottom: 100%;
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        border-radius: 16px;
        transform: translate3d(-32%, 0, 0) rotate(45deg);
      }
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transform: scale(2.2) translate3d(-17%, 0, 0);
      z-index: 3;
    }
  }
  .block-right {
    width: 60%;
    padding: 24px 5vw 24px 24px;
    z-index: 5;
  }
  .social {
    margin: 0 48px 24px 0;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));

    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));
    }

    img {
      width: auto;
      height: 48px;
    }
  }
}

.s-3 {
  z-index: 5;
  .block-item {
    height: 100%;
    padding: 16px 16px 48px;
    border: 3px dashed transparent;
    border-radius: 16px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -3px;
      left: 50%;
      width: 230px;
      height: 96px;
      transform: translate3d(-50%, 0, 0);
      border-style: solid;
      border-width: 96px 115px 0;
      border-radius: 8px;
    }

    &.b-0 {
      border-color: #E2EBF8;
      &:before {
        border-color: #E2EBF8 transparent transparent;
      }
    }
    &.b-1 {
      border-color: #E7D9E8;
      &:before {
        border-color: #E7D9E8 transparent transparent;
      }
    }
    &.b-2 {
      border-color: #FFEEE6;
      &:before {
        border-color: #FFEEE6 transparent transparent;
      }
    }
  }
}

.s-4 {
  .block-item {
    height: 100%;
    border: 3px solid transparent;
    border-radius: 16px;
    overflow: hidden;

    &.b-0 {
      border-color: #FFEEE6;
      .block-title {
        background-color: #FFEEE6;
        &:before {
          background-color: #FFEEE6;
        }
      }
    }
    &.b-1 {
      border-color: #E2EBF8;
      .block-title {
        background-color: #E2EBF8;
        &:before {
          background-color: #E2EBF8;
        }
      }
    }
    &.b-2 {
      border-color: #E7D9E8;
      .block-title {
        background-color: #E7D9E8;
        &:before {
          background-color: #E7D9E8;
        }
      }
    }

    .block-title {
      width: 70%;
      padding: 24px 24px 48px;
      font-size: 32px;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: auto;
        right: -50px;
        width: 170px;
        height: 170px;
        border-radius: 8px;
        transform: rotate(45deg);
      }
    }

    .block-text {
      max-width: none;
      margin-top: -24px;
      padding: 16px 24px;
      border-radius: 16px;
    }
  }
}

.s-5 {
  padding-top: 96px;
  .block-left {
    padding-left: 5vw;
  }
  .block-right {
    img {
      margin: -80px 0;
    }
  }
}

.s-6 {
  .form-container {
    z-index: 5;

    .btn-sm {
      max-width: 216px;
    }
  }
}

@media (max-width: 1200px) {
  .s-4 {
    .block-item .block-title {
      width: 60%;
      font-size: 24px;
      &:before {
        width: 154px;
        height: 154px;
      }
    }
  }
  .s-6 {
    .col-3 {
      width: 33.33333%;
    }
  }
}

@media (max-width: 950px) {
  .s-2 {
    .block-left {
      .img-container {
        &:before {
          transform: translate3d(-42%, 0, 0) rotate(45deg);
        }
      }
      img {
        transform: scale(2.2) translate3d(-21%, 0, 0);
      }
    }
  }
}

@media (max-width: 850px) {
  .s-2 {
    padding: 48px 0;
    .block-left {
      display: none;
    }
    .block-right {
      width: 100%;
      padding-right: 24px;
    }
  }
  .s-5 {
    padding-top: 48px;
    .block-left {
      padding: 5vw;
    }
  }
  .s-6 {
    padding-bottom: 48px;
    .col-3 {
      width: 100%;
    }
    .form-container {
      transform: translate3d(0, -120px, 0);
    }
  }
}
</style>