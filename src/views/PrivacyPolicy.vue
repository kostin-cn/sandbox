<template>
  <main class="privacy-policy fs-2">
    <div class="wrapper">
      <h3 class="title mb-3" v-html="t('privacy_policy.title_1')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_1_1')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_1_2')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_1_3')"/>

      <p class="mb-3">{{ t('privacy_policy.text_1_4') }} <a href='https://zakon.rada.gov.ua/go/2297-17'>https://zakon.rada.gov.ua/go/2297-17</a></p>

      <p class="mb-3" v-html="t('privacy_policy.text_1_5')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_1_6')"/>

      <p class="mb-3">{{ t('privacy_policy.text_1_7') }} <a href='mailto:support@organizationoffice.com'>support@organizationoffice.com</a></p>

      <h3 class="title mb-3" v-html="t('privacy_policy.title_2')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_2_1')"/>
      
      <p class="mb-3" v-html="t('privacy_policy.text_2_2')"/>

      <h3 class="mb-3" v-html="t('privacy_policy.title_3')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_3_1')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_3_1_1')"/>

      <ul class="list-2 mb-3">
        <li class="mb-2" v-html="t('privacy_policy.list_3_1_1')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_3_1_2')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_3_1_3')"/>
      </ul>

      <p class="mb-3" v-html="t('privacy_policy.text_3_2')"/>

      <ul class="list-2 mb-3">
        <li class="mb-2" v-html="t('privacy_policy.list_3_2_1')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_3_2_2')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_3_2_3')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_3_2_4')"/>
      </ul>

      <h3 class="mb-3" v-html="t('privacy_policy.title_4')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_4_1')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_4_1_1')"/>

      <ul class="list-2 mb-3">
        <li class="mb-2" v-html="t('privacy_policy.list_4_1')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_4_2')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_4_3')"/>
      </ul>

      <p class="mb-3" v-html="t('privacy_policy.text_4_2')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_4_2_1')"/>

      <h3 class="mb-3" v-html="t('privacy_policy.title_5')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_5_1')"/>

      <ul class="list-2 mb-3">
        <li class="mb-2" v-html="t('privacy_policy.list_5_1')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_5_2')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_5_3')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_5_4')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_5_5')"/>
        <li class="mb-2" v-html="t('privacy_policy.list_5_6')"/>
      </ul>

      <p class="mb-3">{{ t('privacy_policy.text_5_2') }} <a href='mailto:support@organizationoffice.com'>support@organizationoffice.com</a></p>

      <h3 class="mb-3" v-html="t('privacy_policy.title_6')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_6_1')"/>

      <h3 class="mb-3" v-html="t('privacy_policy.title_7')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_7_1')"/>

      <p class="mb-3" v-html="t('privacy_policy.text_7_2')"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped lang="scss">
.privacy-policy {
  padding: 80px 0;
}
</style>