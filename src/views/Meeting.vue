<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1 section1">
      <div class="wrapper d-flex flex-wrap align-end">
        <div class="block-left">
          <div class="text-container">
            <h1 class="title mb-3 animate-block">{{ t('meeting.s_1.title') }}<br><span class="color-secondary">OrganizationOffice</span></h1>

            <p class="text-block fs-2 mb-3 animate-block delay-1" v-html="t('meeting.s_1.text_1')"/>
            <p class="text-block fs-2 mb-3 animate-block delay-1" v-html="t('meeting.s_1.text_2')"/>
            <p class="text-block fs-2 mb-3 animate-block delay-1" v-html="t('meeting.s_1.text_3')"/>

            <div class="animate-block delay-2" style="height: 80px">
              <router-link :to="section1.link" class="d-none btn btn-lg btn-2 shadow-item hover d-flex align-center font-700 fs-2 mb-3"><span v-html="t('meeting.s_1.btn')"/> <img src="/svg/arrow-right.svg" alt=""></router-link>
            </div>
          </div>
        </div>

        <div class="block-right animate-block from-right delay-3">
          <img :src="`/img/${section1.img}`" alt="">
        </div>
      </div>
    </section>

    <!-- SECTION 2 -->
    <section class="s-2 section3 bg-secondary">
      <div class="wrapper">
        <h3 class="title text-center mb-3 animate-block" v-html="t('meeting.s_2.title')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section2" :class="`col-6 block-item d-flex mb-3 animate-block delay-${index+1}`">
            <div class="img-container mr-2">
              <img class="bg-image" :src="`/svg/${item.bgImg}`" alt="">
              <img class="image" :src="`/svg/${item.img}`" alt="">
            </div>
            <div>
              <p class="title" :style="`color: ${item.color}`">{{ index + 1 }}</p>
              <p class="fs-2" v-html="item.text"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section class="s-3 section2">
      <form class="form-container wrapper" @submit.prevent="$sendMail({action: 'requestConsultation', name: section3.name, phone: section3.phone, org: section3.org})">
        <h3 class="text-center mb-3 animate-block" v-html="t('meeting.s_3.title')"/>

        <div class="row d-flex flex-wrap">
          <div class="col-3 mb-2 animate-block delay-1">
            <input type="text" class="form-input" v-model="section3.name" required :placeholder="t('meeting.s_3.placeholder_1')">
          </div>

          <div class="col-3 mb-2 animate-block delay-2">
            <input type="tel" class="form-input" v-model="section3.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          </div>

          <div class="col-3 mb-2 animate-block delay-3">
            <input type="text" class="form-input" v-model="section3.org" required :placeholder="t('meeting.s_3.placeholder_2')">
          </div>

          <div class="col-3 d-flex justify-end mb-2 animate-block delay-4">
            <button type="submit" class="btn btn-sm btn-1 shadow-item hover d-flex align-center font-700">{{ t('meeting.s_3.btn') }} <img src="/svg/arrow-right.svg" alt=""></button>
          </div>
        </div>
      </form>
    </section>

    <!-- SECTION 4 -->
    <section class="s-4 section1">
      <div class="wrapper bg-gradient d-flex flex-wrap align-center">
        <div class="block-left">
          <img :src="`/img/${section4.img}`" alt="">
        </div>

        <div class="block-right">
          <div class="text-container">
            <h3 class="title mb-3 animate-block"><span v-html="t('meeting.s_4.title')"/></h3>

            <div class="row d-flex flex-wrap">
              <div v-for="(item, index) in section4.items" :class="`col-6 mb-3 animate-block delay-${index+1}`">
                <img src="/svg/check-2.svg" alt="">
                <p class="fs-2" v-html="item"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section class="s-5 section2">
      <form class="form-container wrapper v2" @submit.prevent="$sendMail({action: 'getAdmin', name: section5.name, phone: section5.phone})">
        <h3 class="text-center mb-1 animate-block" v-html="t('meeting.s_5.title')"/>

        <p class="text-center mb-3 animate-block delay-1" v-html="t('meeting.s_5.text')"/>

        <div class="row d-flex justify-center flex-wrap">
          <div class="col-3 mb-2 animate-block delay-2">
            <input type="text" class="form-input" v-model="section5.name" required :placeholder="t('meeting.s_5.placeholder_1')">
          </div>

          <div class="col-3 mb-2 animate-block delay-3">
            <input type="tel" class="form-input" v-model="section5.phone" required placeholder="+_ _ (_ _ _) _ _ _-_ _-_ _">
          </div>

          <div class="col-3 d-flex justify-end mb-2 animate-block delay-4">
            <button type="submit" class="btn btn-sm btn-1 shadow-item hover d-flex align-center font-700">{{ t('meeting.s_5.btn') }} <img src="/svg/arrow-right.svg" alt=""></button>
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

import {scrollAnimate} from "@/service/global";

const section1 = {
  img: 'meeting_1_1.png',
  link: '#'
};

const section2 = computed(() => ([
  {img: 'registration.svg', bgImg: 'bg-2.svg', color: '#E2EBF8', text: t('meeting.s_2.item_1')},
  {img: 'click.svg', bgImg: 'bg-1.svg', color: '#FFEEE6', text: t('meeting.s_2.item_2')},
  {img: 'customer.svg', bgImg: 'bg-3.svg', color: '#E7D9E8', text: t('meeting.s_2.item_3')},
  {img: 'video-call.svg', bgImg: 'bg-4.svg', color: '#FFEEE6', text: t('meeting.s_2.item_4')}
]));

const section3 = ref({
  name: '',
  phone: '',
  org: ''
});

const section4 = computed(() => ({
  img: 'meeting_4_1.png',
  items: [
      t('meeting.s_4.item_1'),
      t('meeting.s_4.item_2'),
      t('meeting.s_4.item_3'),
      t('meeting.s_4.item_4')
  ]
}));

const section5 = ref({
  name: '',
  phone: ''
});

scrollAnimate();
</script>

<style scoped lang="scss">
.s-1 {
  padding: 0;
  overflow: hidden;

  .bg-circle {
    left: 100%;
    top: 64px;
    right: auto;
    bottom: auto;
    transform: none;
    z-index: 8;
  }

  .block-left {
    width: 40%;
    padding-bottom: 0;
    z-index: 2;
  }

  .block-right {
    width: 60%;
    img {
      width: 131%;
      transform: translate3d(-11%, 5px, 0);
    }
  }

  .title {
    .color-secondary {
      display: block;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

.s-2 {
  padding: 80px 0 128px;

  .circle-lg {
    top: 0;
    left: 2vw;
    transform: translate3d(0, -35%, 0);
  }

  .img-container {
    padding: 16px;
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate3d(-50%, 0, 0);
  }

  .image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    object-position: center;
  }
}

.s-3 {
  .form-container {
    z-index: 5;
  }
}

.s-4 {
  padding-top: 0;

  .wrapper {
  margin-top: -160px;
  }

  .block-left {
    width: 40%;
    padding: 0;
    img {
      transform: translate3d(-80px, 0, 0);
      z-index: 10;
    }
  }
  .block-right {
    width: 60%;
    padding-right: 2vw;

    .title {
      line-height: 1.8;
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: auto;
        right: 0;
        width: 145%;
        height: 100%;
        background-color: white;
        border-radius: 8px;
        z-index: 1;
      }
      span {
        z-index: 2;
      }
    }

    img {
      width: auto;
      height: 32px;
    }
  }
}

.s-5 {
  .form-container {
    z-index: 5;

    .btn-sm {
      max-width: 216px;
    }
  }
}

@media (max-width: 850px) {
  .s-1 {
    .block-left {
      width: 100%;
      padding-top: 80px;
    }
    .title {
      .color-secondary {
        display: inline-block;
        border-radius: 32px;
      }
    }
  }

  .s-2 {
    .col-6 {
      width: 100%;
    }
  }

  .s-4 {
    padding-bottom: 0;
    .block-left {
      display: none;
    }
    .block-right {
      display: block;
      width: 100%;
      padding: 160px 2vw 48px;
      .title:before {
        width: 102%;
      }
    }
    .col-6 {
      width: 100%;
    }
  }

  .s-5 {
    padding-bottom: 48px;
    .col-3 {
      width: 100%;
    }
  }
}
</style>