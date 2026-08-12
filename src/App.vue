<template>
  <div class="page-container">
    <Header/>
    <RouterView/>
    <Footer/>

    <div id="toast" class="toast bg-7 br-7 color-secondary fs-2">
      <span class="close" @click="closeToast()">×</span>
      <div id="toastText"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../src/components/Header.vue"
import Footer from "../src/components/Footer.vue"

const closeToast = () => document.getElementById('toast').classList.remove('show');
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: -200px;
  padding: 16px 48px 16px 24px;
  border-radius: 16px;
  transition: all 0.5s ease-in-out;
  transform: translate3d(-50%, 0, 0);
  z-index: 1000;

  &.show {
    top: 120px;
  }

  .close {
    position: absolute;
    top: 4px;
    right: 16px;
    font-size: 32px;
    cursor: pointer;
  }
}.toast {
   position: fixed;
   left: 50%;
   top: -200px;
   padding: 16px 48px 16px 24px;
   border-radius: 16px;
   transition: all 0.5s ease-in-out;
   transform: translate3d(-50%, 0, 0);
   z-index: 1000;

   &.show {
     top: 120px;
   }

   .close {
     position: absolute;
     top: 4px;
     right: 16px;
     font-size: 32px;
     cursor: pointer;
   }
 }.toast {
    position: fixed;
    left: 50%;
    top: -200px;
    padding: 16px 48px 16px 24px;
    border-radius: 16px;
    transition: all 0.5s ease-in-out;
    transform: translate3d(-50%, 0, 0);
    z-index: 1000;

    &.show {
      top: 120px;
    }

    .close {
      position: absolute;
      top: 4px;
      right: 16px;
      font-size: 32px;
      cursor: pointer;
    }
  }
</style>