<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1 section9">
      <div class="wrapper">
        <h1 class="title text-center mb-3 animate-block" v-html="t('tariffs.s_1.title')"/>

        <p class="text-uppercase text-center fs-2 mb-3 animate-block delay-1" v-html="t('tariffs.s_1.text_1')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section1" :class="`col-4 mb-3 animate-block delay-${index+2}`">
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

    <!-- SECTION 2 -->
    <section class="s-2">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('tariffs.s_2.title')"/>

        <div v-for="(item, index) in section2" class="animate-block delay-1 mb-3">
          <div :class="`accordion shadow-item bg-secondary ${index === activeFAQ ? 'active' : ''}`">
            <div class="acc-header d-flex align-center" @click="openFAQ(index)">
              <span class="question d-flex align-center justify-center bg-7 color-secondary font-700">?</span>
              <h3 class="font-700 flexible" v-html="item.title"/>
              <span class="collapse d-flex align-center justify-center">
              <img src="/svg/plus.svg" alt="">
            </span>
            </div>
            <div class="acc-body fs-2">
              <p v-html="item.text"/>
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
const { t } = useI18n();

import {scrollAnimate} from "@/service/global";

const listClass = [
    'list-1',
    'list-2',
    'list-6'
];

const section1 = computed(() => ([
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

const section2 = computed(() => ([
  {
    title: t('tariffs.s_2.title_1'),
    text: t('tariffs.s_2.text_1'),
  },
  {
    title: t('tariffs.s_2.title_2'),
    text: t('tariffs.s_2.text_2'),
  },
  {
    title: t('tariffs.s_2.title_3'),
    text: t('tariffs.s_2.text_3'),
  },
  {
    title: t('tariffs.s_2.title_4'),
    text: t('tariffs.s_2.text_4'),
  },
  {
    title: t('tariffs.s_2.title_5'),
    text: t('tariffs.s_2.text_5'),
  },
]));

const activeFAQ = ref<number | null>(null);

const openFAQ = (index: number) => {
  activeFAQ.value = index === activeFAQ.value ? null : index;
}

scrollAnimate();
</script>

<style scoped lang="scss">
.s-1 {
  padding: 128px 0 0;
  z-index: 1;
}

.s-2 {
  margin-top: -128px;
  padding: 160px 0 128px;
}

@media (max-width: 850px) {
  .s-1 {
    padding-top: 64px;
  }
}
</style>