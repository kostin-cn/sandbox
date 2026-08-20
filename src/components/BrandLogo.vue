<template>
  <span class="oo-brand-lockup">
    <img
      class="oo-brand-logo-mark"
      :src="`${baseUrl}svg/logo-sm.svg`"
      alt=""
      aria-hidden="true"
    >
    <span class="oo-brand-name">OrganizationOffice</span>
  </span>
</template>

<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL;
</script>
