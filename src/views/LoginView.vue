<template>
  <div class="login">
    <LoginPage />
  </div>
    <div class="about">
    <AboutPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPage from '@/components/LoginPage.vue' // @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue'

export default defineComponent({
  name: 'LoginView',
  components: {
    LoginPage,
    AboutPage
  }
})
</script>
