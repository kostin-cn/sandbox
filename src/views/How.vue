<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1 section1">
      <div class="wrapper">
        <h1 class="title text-center mb-3" v-html="t('how.title')"/>

        <p class="text-center fs-2 mb-3" v-html="t('how.text')"/>

        <div class="row d-flex flex-wrap">
          <div v-for="(item, index) in section1" class="col-4 mb-3">
            <div class="block-item bg-secondary d-flex flex-column">
              <div :class="`block-header d-flex align-center justify-center ${blockClassList[index % 3]}`">
                <h3 class="text-center font-700 mb-2" v-html="item.title"/>
              </div>

              <div class="block-text d-flex flex-column align-center flexible">
                <ul :class="`list-${index % 3 + 3} flexible`">
                  <li class="mb-2" v-for="el in item.list" v-html="el"/>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p class="font-700 fs-2 mb-2" v-html="t('how.text_1')"/>

        <p class="fs-2 mb-3" v-html="t('how.text_2')"/>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {computed} from "vue";
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const blockClassList = [
  'bg-5',
  'bg-7 color-secondary',
  'bg-6',
];

const borderClassList = [
  'br-5',
  'br-7',
  'br-6',
];

const section1 = computed(() => ([
  {
    title: t('how.title_1'),
    list: [
      t('how.list_1_1'),
      t('how.list_1_2'),
      t('how.list_1_3')
    ]
  },
  {
    title: t('how.title_2'),
    list: [
      t('how.list_2_1'),
      t('how.list_2_2')
    ]
  },
  {
    title: t('how.title_3'),
    list: [
      t('how.list_3_1'),
      t('how.list_3_2')
    ]
  },
  {
    title: t('how.title_4'),
    list: [
      t('how.list_4_1'),
      t('how.list_4_2')
    ]
  },
  {
    title: t('how.title_5'),
    list: [
      t('how.list_5_1'),
      t('how.list_5_2')
    ]
  },
  {
    title: t('how.title_6'),
    list: [
      t('how.list_6_1'),
      t('how.list_6_2')
    ]
  }
]));
</script>

<style scoped lang="scss">
.s-1 {
  padding: 128px 0;

  .block-item {
    max-width: 450px;
    height: 100%;
    margin: 0 auto;
    border-radius: 16px;
    overflow: hidden;
    z-index: 3;

    h3 {
      font-size: 32px;
    }
  }
  .block-header {
    min-height: 130px;
    padding: 16px 16px 0;
    border-radius: 16px;
  }
  .block-text {
    padding: 16px;
  }
}

@media (max-width: 1200px) {
  .s-1 {
    .block-item {
      h3 {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 850px) {
  .s-1 {
    padding-top: 64px;
    .col-4 {
      width: 50%;
    }
    .block-header {
      min-height: auto;
    }
  }
}

@media (max-width: 640px) {
  .s-1 {
    .col-4 {
      width: 100%;
    }
  }
}
</style>