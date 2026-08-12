<template>
  <main class="page-control">
    <!-- SECTION 1 -->
    <section class="section1">
      <div class="wrapper d-flex flex-column align-center">
        <h1 class="title text-center mb-3 animate-block" v-html="t('control.s_1.title')"/>

        <p class="text-block text-center fs-2 mb-3 animate-block delay-1" v-html="t('control.s_1.text')"/>

        <img class="desktop-img w-100 animate-block delay-2" :src="`/img/${section1.img}`" alt="">
      </div>
    </section>

    <!-- SECTION 2 -->
    <section class="section2 bg-secondary animate-block from-left">
      <form class="form-container wrapper v1" @submit.prevent="$sendMail({action: 'requestConsultation', name: section2.name, phone: section2.phone, org: section2.org})">
        <h3 class="text-center mb-3 animate-block delay-1" v-html="t('control.s_2.title')"/>

        <div class="row d-flex flex-wrap">
          <div class="col-3 mb-2 animate-block delay-2">
            <input type="text" class="form-input" v-model="section2.name" required :placeholder="t('control.s_2.placeholder_1')">
          </div>

          <div class="col-3 mb-2 animate-block delay-3">
            <input type="tel" class="form-input" v-model="section2.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          </div>

          <div class="col-3 mb-2 animate-block delay-4">
            <input type="text" class="form-input" v-model="section2.org" required :placeholder="t('control.s_2.placeholder_2')">
          </div>

          <div class="col-3 d-flex justify-end mb-2 animate-block delay-5">
            <button type="submit" class="btn btn-sm btn-6 shadow-item hover d-flex align-center font-700">{{ t('control.s_2.btn') }} <img src="/svg/arrow-right-3.svg" alt=""></button>
          </div>
        </div>
      </form>
    </section>

    <!-- SECTION 3 -->
    <section class="section3 bg-secondary">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('control.s_3.title')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section3" :class="`col-4 mb-3 animate-block delay-${index+1}`">
            <div :class="`block-item d-flex flex-column align-center bg-${index % 2 ? 8 : 5}`">
              <img class="mb-2" :src="`/svg/${item.img}`" alt="">
              <p class="fs-2 text-center" v-html="item.text"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 -->
    <section class="section4 bg-secondary">
      <div class="wrapper">
        <p class="title text-center mb-3 animate-block" v-html="t('control.s_4.text')"/>

        <div class="d-flex flex-wrap align-center">
          <div class="block-left">
            <div class="text-container">
              <h3 class="title mb-3 animate-block delay-1" v-html="t('control.s_4.title')"/>

              <ul class="list-3 mb-3 animate-block delay-2">
                <li class="fs-2 mb-2" v-for="item in section4.items" v-html="item"/>
              </ul>
            </div>
          </div>

          <div class="block-right">
            <img class="animate-block from-right delay-3" :src="`/img/${section4.img}`" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section class="section5">
      <div class="wrapper">
        <div class="row d-flex flex-wrap align-center">
          <div class="col-6 block-left">
            <img class="animate-block from-left" :src="`/img/${section5.img}`" alt="">
          </div>

          <div class="col-6 block-right">
            <div class="text-container">
              <h3 class="title mb-3 animate-block delay-1" v-html="t('control.s_5.title')"/>

              <ul class="list-4 mb-3 animate-block delay-2">
                <li class="fs-2 mb-2" v-for="item in section5.items" v-html="item"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6 -->
    <section class="s-6 section4 bg-secondary">
      <div class="wrapper">
        <div class="d-flex flex-wrap align-center">
          <div class="block-left">
            <div class="text-container">
              <h3 class="title mb-3 animate-block" v-html="t('control.s_6.title')"/>

              <ul class="list-3 mb-3 animate-block delay-1">
                <li class="fs-2 mb-2" v-for="item in section6.items" v-html="item"/>
              </ul>
            </div>
          </div>

          <div class="block-right">
            <img class="animate-block from-right delay-2" :src="`/img/${section6.img}`" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7 -->
    <section class="s-7 section1">
      <div class="wrapper bg-gradient d-flex flex-wrap align-center">
        <div class="block-left">
          <div class="text-container">
            <h3 class="title mb-3 animate-block" v-html="t('control.s_7.title')"/>

            <p class="fs-2 mb-3 animate-block delay-1" v-html="t('control.s_7.text_1')"/>

            <p class="fs-2 mb-3 animate-block delay-1" v-html="t('control.s_7.text_2')"/>

            <div class="app-block d-flex align-center animate-block delay-2">
              <a class="img-container d-flex mr-2" href="/en/mobile-app?d=mobile" target="_blank">
                <img :src="`/svg/${section7.qr}`" alt="QR">
              </a>

              <div class="btn-container">
                <p class="mb-1" v-html="t('control.s_7.text_3')"/>

                <div class="d-flex flex-wrap">
                  <a v-for="item in APPS" :href="item.link" target="_blank"
                     class="btn btn-4 shadow-item hover d-flex align-center mb-2 mr-2">
                    <img class="mr-2" :src="`/svg/${item.img}`" alt="">
                    <span>{{ t('control.s_7.btn') }}<br><b>{{ item.title }}</b></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block-right">
          <img class="animate-block from-right delay-3" :src="`/img/${section7.img}`" alt="">
        </div>
      </div>
    </section>

    <!-- SECTION 8 -->
    <section class="s-8 section2">
      <form class="form-container wrapper v2" @submit.prevent="$sendMail({action: 'getAdmin', name: section8.name, phone: section8.phone})">
        <h3 class="text-center mb-1 animate-block" v-html="t('control.s_8.title')"/>

        <p class="text-center mb-3 animate-block delay-1" v-html="t('control.s_8.text')"/>

        <div class="row d-flex justify-center flex-wrap">
          <div class="col-3 mb-2 animate-block delay-2">
            <input type="text" class="form-input" v-model="section8.name" required :placeholder="t('control.s_8.placeholder')">
          </div>

          <div class="col-3 mb-2 animate-block delay-3">
            <input type="tel" class="form-input" v-model="section8.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          </div>

          <div class="col-3 d-flex justify-end mb-2 animate-block delay-4">
            <button type="submit" class="btn btn-sm btn-1 shadow-item hover d-flex align-center font-700">{{ t('control.s_8.btn') }} <img src="/svg/arrow-right.svg" alt=""></button>
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

import { APPS } from '@/service/constants';
import {scrollAnimate} from "@/service/global";

const section1 = {
  img: 'control_1_1.png'
};

const section2 = ref({
  name: '',
  phone: '',
  org: ''
});

const section3 = computed(() => ([
  {img: 'accept.svg', text: t('control.s_3.item_1')},
  {img: 'file.svg', text: `${t('control.s_3.item_2')} <a href="mailto: support@organizationoffice.com">support@organizationoffice.com</a>`},
  {img: 'registration-form.svg', text: t('control.s_3.item_3')}
]));

const section4 = computed(() => ({
  img: 'control_4_1.png',
  items: [
      t('control.s_4.item_1'),
      t('control.s_4.item_2'),
      t('control.s_4.item_3')
  ]
}));

const section5 = computed(() => ({
  img: 'control_5_1.png',
  items: [
    t('control.s_5.item_1'),
    t('control.s_5.item_2'),
    t('control.s_5.item_3'),
    t('control.s_5.item_4')
  ]
}));

const section6 = computed(() => ({
  img: 'control_6_1.png',
  items: [
    t('control.s_6.item_1'),
    t('control.s_6.item_2'),
    t('control.s_6.item_3'),
    t('control.s_6.item_4')
  ]
}));

const section7 = {
  img: 'control_7_1.png',
  qr: 'qr2.svg'
};

const section8 = ref({
  name: '',
  phone: ''
});

scrollAnimate();
</script>

<style scoped lang="scss">
.page-control {
  padding-top: 80px;
}

.section1 {
  overflow: hidden;

  .circle-sm {
    top: 0;
    bottom: auto;
    left: 100%;
    transform: translate3d(0, 0, 0);
  }

  .text-block {
    max-width: 470px;
  }

  &.s-7 {
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
}

.section2 {
  .circle-lg {
    top: auto;
    bottom: 0;
    left: 2vw;
  }

  &.s-8 {
    .form-container {
      z-index: 5;

      .btn-sm {
        max-width: 216px;
      }
    }
  }
}

.section3 {
  .col-4 {
    padding-top: 24px;
  }

  .block-item {
    height: 100%;
    padding: 64px 48px 48px;
    border-radius: 8px;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 160px;
      height: 60px;
      transform: translate3d(-50%, 0, 0);
      border-style: solid;
      border-width: 60px 80px 0;
      border-color: #FFFFFF transparent transparent;
      z-index: 2;
    }

    img {
      position: absolute;
      top: -24px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      z-index: 3;
    }
  }
}

.section4 {
  .block-left {
    width: 40%;
  }
  .block-right {
    width: 60%;

    img {
      margin-bottom: -160px;
      z-index: 2;
    }
  }

  &.s-6 {
    padding: 24px 0;
    .block-right img {
      margin-bottom: 0;
    }
  }
}

.section5 {
  padding-top: 96px;

  .text-container {
    max-width: 480px;
    margin-left: auto;
  }
}

@media (max-width: 1200px) {
  .section2.s-8 {
    .col-3 {
      width: 33.33333%;
    }
  }
}

@media (max-width: 850px) {
  .section1 {
    padding-top: 0;

    &.s-7 {
      padding-top: 48px;
      .block-left {
        padding: 5vw;
      }
    }

    .desktop-img {
      display: none;
    }
  }
  .section2.s-8 {
    padding-bottom: 48px;
    .col-3 {
      width: 100%;
    }
    .form-container {
      transform: translate3d(0, -120px, 0);
    }
  }
  .section4 {
    .block-left,
    .block-right {
      width: 100%;
      img {
        margin-bottom: 0;
      }
    }
  }
  .section5 {
    padding-top: 48px;
    .text-container {
      max-width: 100%;
    }
  }
}

@media (max-width: 370px) {
  .s-7 {
    .app-block {
      .btn {
        margin-right: 0 !important;
      }
    }
  }
}
@media (max-width: 350px) {
  .s-7 {
    .app-block {
      .btn {
        min-width: auto;
        width: 100%;
        padding: 8px 10px;

        img {
          margin-right: 10px !important;
        }
      }
    }
  }
}
</style>