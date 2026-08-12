<template>
  <main>
    <!-- SECTION 1 -->
    <section class="section1">
      <div class="wrapper d-flex flex-wrap align-center">
        <div class="block-left">
          <div class="text-container">
            <h1 class="title mb-3 animate-block" v-html="t('index.s_1.title')"/>

            <p class="text-block fs-2 mb-3 animate-block delay-1" v-html="t('index.s_1.text_1')"/>

            <div class="app-block d-flex align-center animate-block delay-2">
              <a class="img-container d-flex mr-2" href="/en/mobile-app?d=mobile" target="_blank">
                <img :src="`/svg/${section1.qr}`" alt="QR">
              </a>

              <div class="btn-container">
                <p class="mb-1" v-html="t('index.s_1.text_2')"/>
                <div class="d-flex flex-wrap">
                  <a v-for="item in APPS" :href="item.link" target="_blank"
                     class="btn btn-4 shadow-item hover d-flex align-center mb-2 mr-2">
                    <img class="mr-2" :src="`/svg/${item.img}`" alt="">
                    <span>{{ t('index.s_1.text_3') }}<br><b>{{ item.title }}</b></span>
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
    <section class="section2 animate-block from-left">
      <form class="form-container wrapper v1" @submit.prevent="$sendMail({action: 'requestConsultation', name: section2.name, phone: section2.phone, org: section2.org})">
        <h3 class="text-center mb-3 animate-block delay-1" v-html="t('index.s_2.title')"/>

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
            <button type="submit" class="btn btn-sm btn-6 shadow-item hover d-flex align-center font-700">{{ t('index.s_2.btn') }} <img src="/svg/arrow-right-3.svg" alt=""></button>
          </div>
        </div>
      </form>
    </section>

    <!-- SECTION 3 -->
    <section class="section3">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('index.s_3.title')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section3" :class="`col-4 block-item d-flex flex-column align-center mb-3 animate-block delay-${index+1}`">
            <p class="block-value countUp">{{ item.value }}</p>
            <img class="mb-2" :src="`/svg/${item.img}`" alt="">
            <p class="block-text fs-2 text-center" v-html="item.text"/>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 -->
    <section class="section4">
      <div class="forNav" id="control"/>
      <div class="wrapper">
        <span class="bg-circle circle-lg"></span>

        <p class="text-center text-uppercase fs-2 font-700 mb-2 animate-block" v-html="t('index.s_4.text')"/>

        <div class="row d-flex flex-wrap align-center">
          <div class="col-6 block-left">
            <div class="text-container">
              <h3 class="title mb-3 animate-block delay-1" v-html="t('index.s_4.title')"/>

              <ul class="list-1 mb-3 animate-block delay-2">
                <li class="fs-2 mb-2" v-for="item in section4.items" v-html="item"></li>
              </ul>

              <div class="animate-block delay-3">
                <router-link :to="section4.link" class="btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2"><span v-html="t('index.s_4.btn')"/> <img src="/svg/arrow-right.svg" alt=""></router-link>
              </div>
            </div>
          </div>

          <div class="col-6 block-right">
            <img class="animate-block from-right delay-4" :src="`/img/${section4.img}`" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7 -->
    <section class="section7">
      <div class="wrapper">
        <h3 class="title mb-3 animate-block" v-html="t('index.s_7.title')"/>

        <div class="row d-flex flex-wrap mb-3">
          <div class="fs-2 col-6 animate-block delay-1">
            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_1')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_1_1')"></li>
            </ul>

            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_2')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_2_1')"></li>
            </ul>

            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_3')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_3_1')"></li>
            </ul>
          </div>

          <div class="fs-2 col-6 animate-block delay-2">
            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_4')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_4_1')"></li>
            </ul>

            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_5')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_5_1')"></li>
            </ul>

            <h3 class="font-700 mb-2" v-html="t('index.s_7.text_6')"/>

            <ul class="list-4 mb-2">
              <li class="mb-2" v-html="t('index.s_7.list_6_1')"></li>
            </ul>
          </div>
        </div>

        <div class="row d-flex flex-wrap align-center">
          <div class="fs-2 col-6">
            <h3 class="section-text font-500 mb-2 animate-block delay-3" v-html="t('index.s_7.text_7')"></h3>
          </div>

          <div class="fs-2 col-6">
            <div class="animate-block delay-4">
              <router-link :to="section7.link" class="btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2 mb-2"><span v-html="t('index.s_7.btn')"/> <img src="/svg/arrow-right.svg" alt=""></router-link>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION 5 -->
    <section class="section5 bg-secondary">
      <div class="forNav" id="mobileApp"/>
      <div class="wrapper">
        <p class="text-center text-uppercase fs-2 font-700 mb-2 animate-block" v-html="t('index.s_5.text')"/>

        <div class="row d-flex flex-wrap align-center">
          <div class="col-6 block-left">
            <img class="animate-block from-left delay-1" :src="`/img/${section5.img}`" alt="" style="margin-left: -10%">
          </div>

          <div class="col-6 block-right">
            <div class="text-container">
              <h3 class="title mb-3 animate-block delay-2" v-html="t('index.s_5.title')"/>

              <ul class="list-2 mb-3 animate-block delay-3">
                <li class="fs-2 mb-2" v-for="item in section5.items" v-html="item"></li>
              </ul>

              <div class="animate-block delay-4">
                <router-link :to="section5.link" class="btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2"><span v-html="t('index.s_5.btn')"/> <img src="/svg/arrow-right.svg" alt=""></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6 -->
    <section class="section6">
      <div class="forNav" id="meet"/>
      <div class="wrapper">
        <div class="row d-flex flex-wrap align-center">
          <div class="col-6 block-left">
            <div class="text-container">
              <h3 class="title mb-3 animate-block" v-html="t('index.s_6.title')"/>

              <div class="mb-3 animate-block delay-1">
                <p class="font-500 fs-2 mb-2" v-for="item in section6.text" v-html="item"/>
              </div>

              <div class="animate-block delay-2">
                <router-link :to="section6.link" class="btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2"><span v-html="t('index.s_6.btn')"/> <img src="/svg/arrow-right.svg" alt=""></router-link>
              </div>
            </div>
          </div>

          <div class="col-6 block-right animate-block from-right delay-3">
            <img :src="`/img/${section6.img}`" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9 -->
    <section class="section9">
      <div class="forNav" id="tariffs"/>
      <div class="wrapper">
        <h1 class="title text-center mb-3 animate-block" v-html="t('tariffs.s_1.title')"/>

        <p class="text-uppercase text-center fs-2 mb-3 animate-block delay-1" v-html="t('tariffs.s_1.text_1')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section9" :class="`col-4 mb-3 animate-block delay-${index+2}`">
            <div :class="`block-item shadow-item bg-secondary d-flex flex-column block-${index % 3 + 1}`">
              <div class="block-header d-flex flex-column align-center">
                <h3 class="text-center font-700 mb-2" v-html="item.title"/>
                <p class="flexible text-center mb-3" v-html="item.text"/>
                <div class="divider"/>
              </div>

              <div class="block-text d-flex flex-column align-center flexible">
                <ul :class="`${listClass[index % 3]} flexible w-100`">
                  <li class="mb-2" v-for="el in item.list" v-html="el"/>
                </ul>
                <div class="divider mb-2"/>
                <p class="title mb-3">{{ item.cost }} <span class="font-700 fs-2">{{ item.value }}</span></p>
                <router-link class="d-none btn btn-lg btn-2 shadow-item hover d-flex justify-center font-700 fs-2 mb-3" to="#" v-html="t('tariffs.s_1.btn')"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8 -->
    <section class="section8 d-none">
      <div class="forNav" id="team"/>
      <div class="wrapper">
        <h3 class="title text-center mb-2 animate-block" v-html="t('index.s_8.title')"/>
        <p class="text-center text-uppercase fs-2 mb-3 animate-block delay-1">Organization Office</p>

        <div class="row d-flex flex-wrap align-center">
          <div v-for="(item, index) in section8"
               :class="`d-flex align-center justify-center mb-3 animate-block ${index ? 'col-4 delay-3' : 'col-12 delay-2'}`">
            <div class="block-img mr-2">
              <img :class="`img-${index + 1}`" :src="`/img/${item.img}`" alt="">
            </div>

            <div>
              <p class="fs-2 font-700 mb-1 text-uppercase color-2" v-html="item.title"/>
              <p class="fs-3 font-500" v-html="item.text"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

import { APPS } from '@/service/constants';
import {scrollAnimate} from "@/service/global";

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
  {value: '389', img: 'users.svg', text: t('index.s_3.text_1')},
  {value: '6', img: 'documents.svg', text: t('index.s_3.text_2')},
  {value: '526', img: 'online-meeting.svg', text: t('index.s_3.text_3')}
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
    t('index.s_6.text_2'),
  ]
}));

const section7 = computed(() => ({
  link: `/${locale.value}/how`
}));

const section8 = computed(() => ([
  {
    title: 'Founder',
    text: t('index.s_8.text_1'),
    img: 'team_1.png'
  },
  {
    title: 'Mobile Developer',
    text: t('index.s_8.text_2'),
    img: 'team_2.png'
  },
  {
    title: 'Frontend Developer',
    text: t('index.s_8.text_3'),
    img: 'team_3.png'
  },
  {
    title: 'Project Manager',
    text: t('index.s_8.text_4'),
    img: 'team_4.png'
  },
  {
    title: 'Backend Developer',
    text: t('index.s_8.text_5'),
    img: 'team_5.png'
  },
  {
    title: 'DevOps Engineer',
    text: t('index.s_8.text_6'),
    img: 'team_6.png'
  },
  {
    title: 'Community Manager',
    text: t('index.s_8.text_7'),
    img: 'team_7.png'
  }
]));

const section9 = computed(() => ([
  {
    title: t('tariffs.s_1.title_1'),
    text: t('tariffs.s_1.item_1'),
    cost: '2 000',
    value: t('tariffs.s_1.value_1'),
    list: [
      t('tariffs.s_1.list_1_1'),
      t('tariffs.s_1.list_1_2')
    ]
  },
  {
    title: t('tariffs.s_1.title_2'),
    text: t('tariffs.s_1.item_2'),
    cost: '4 000',
    value: t('tariffs.s_1.value_2'),
    list: [
      t('tariffs.s_1.list_2_1'),
      t('tariffs.s_1.list_2_2'),
      t('tariffs.s_1.list_2_3'),
      t('tariffs.s_1.list_2_4')
    ]
  },
  {
    title: t('tariffs.s_1.title_3'),
    text: t('tariffs.s_1.item_3'),
    cost: '8 000',
    value: t('tariffs.s_1.value_3'),
    list: [
      t('tariffs.s_1.list_3_1'),
      t('tariffs.s_1.list_3_2'),
      t('tariffs.s_1.list_3_3'),
      t('tariffs.s_1.list_3_4'),
      t('tariffs.s_1.list_3_5'),
      t('tariffs.s_1.list_3_6'),
      t('tariffs.s_1.list_3_7')
    ]
  }
]));

const listClass = [
  'list-1',
  'list-2',
  'list-6'
];

scrollAnimate();
</script>