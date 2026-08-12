<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1">
      <div class="block-item wrapper bg-secondary">
        <div class="row d-flex flex-wrap">
          <div class="col-6">
            <div class="block-left d-flex flex-column align-center">
              <h3 class="title text-center mb-3" v-html="t('admin.title')"/>

              <p class="text-center mb-3" v-html="t('admin.text_1')"/>

              <form class="form d-flex flex-column align-center w-100" @submit.prevent="login">
                <input type="text" name="username" v-model="form.username" required
                       class="form-input mb-3 w-100" :placeholder="t('admin.placeholder_1')">

                <input type="password" name="password" v-model="form.password" required
                       class="form-input mb-3 w-100" :placeholder="t('admin.placeholder_2')">

                <div class="mb-3 w-100">
                  <input type="checkbox" id="keep" name="keep" v-model="form.keep">
                  <label for="keep" v-html="t('admin.label')"></label>
                </div>

                <button type="submit" class="btn btn-sm btn-3 shadow-item font-700" v-html="t('admin.btn')"/>
              </form>
            </div>
          </div>

          <div class="col-6 bg-5">
            <div class="block-right d-flex flex-column align-center">
              <p class="text-center fs-2 mb-3" v-html="t('admin.text_2')"/>

              <router-link class="link d-flex align-center color-4 font-700 mb-3" to="#footer">
                <span class="mr-2" v-html="t('admin.link')"/>
                <img src="/svg/arrow-right-3.svg" alt="">
              </router-link>

              <p class="text-center mb-3" v-html="t('admin.text_3')"/>

              <div class="d-flex flex-wrap justify-center mb-3">
                <a v-for="item in APPS" :href="item.link" target="_blank"
                   class="btn btn-5 shadow-item d-flex align-center mb-2 mr-2">
                  <img class="mr-2" :src="`/svg/${item.img_w}`" alt="">
                  <span>{{ t('admin.app') }}<br><b>{{ item.title }}</b></span>
                </a>
              </div>

              <a class="d-flex qr-code" href="/en/mobile-app?d=mobile" target="_blank">
                <img class="w-100" src="/svg/qr2.svg" alt="">
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="show2FaModal" class="modal d-flex align-center justify-center">
      <div class="modal-content bg-secondary">
        <span class="close" @click="closeModal()">×</span>
        <form class="d-flex flex-column align-center" @submit.prevent="login">
          <h3 class="modal-title mb-3 font-700">Authenticator</h3>
          <input type="text" name="2fa" v-model="form.answer" required autocomplete="off"
                 class="form-input mb-3 w-100" placeholder="Code">
          <button type="submit" class="btn btn-sm btn-3 font-700">Ok</button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import {showToast} from "@/service/global"
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import {APPS} from "@/service/constants";

const form = ref({
  username: '',
  password: '',
  answer: '',
  keep: false
});

const show2FaModal = ref(false);

const login = async () => {
  try {
    const result = await axios.post('/api/auth/login', {
      login: form.value.username,
      password: form.value.password,
      ...(form.value.answer?.length && { code: form.value.answer }),
    });

    if (result.data?.isTwoFA === 1) {
      show2FaModal.value = true;
      document.body.style.overflowY = 'hidden';
      return
    }

    if (result.data?.jwt) {
      const post_data = {...result.data, username: form.value.username, isRemember: form.value.keep}

      const adminWindow = window.open('https://admin.organizationoffice.com/admin/login', '_blank');

      setTimeout(() => {
        adminWindow?.postMessage(post_data, 'https://admin.organizationoffice.com');
      }, 1000);

      closeModal();
    }

  } catch (err) {
    if (err.response?.data?.error) {
      switch (err.response.data.error) {
        case 'Wrong 2FA Code': showToast(t('admin.toast_2')); break;
        case 'Bad credentials': showToast(t('admin.toast_1')); break;
      }
    }
  }
};

const closeModal = () => {
  show2FaModal.value = false;
  document.body.style.overflowY = 'auto';
  form.value.answer = '';
};
</script>

<style scoped lang="scss">
.form-input {
  border: 1px solid black;
}

.s-1 {
  padding: 128px 0 160px;

  .col-6 {
    border-radius: 16px;
  }

  .block-item {
    border-radius: 16px;
    overflow: hidden;
  }

  .block-left {
    padding: 4vw;
  }

  .block-right {
    padding: 4vw;
  }

  .form {
    padding-top: 2vw;
  }

  .link {
    img {
      width: 24px;
      height: 24px;
      padding: 4px;
      object-fit: contain;
      object-position: center;
      background-color: #00A2DA;
      border-radius: 4px;
    }
  }

  .qr-code {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
}

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 500;
  backdrop-filter: blur(16px);

  .modal-content {
    width: 90%;
    max-width: 450px;
    padding: 48px;
    border: 1px solid black;
    border-radius: 16px;
  }

  .modal-title {
    font-size: 24px;
  }

  .close {
    position: absolute;
    top: 4px;
    right: 16px;
    font-size: 32px;
    cursor: pointer;
  }
}

@media (max-width: 500px) {
  .s-1 {
    .col-6 {
      width: 100%;
    }
  }
}
</style>