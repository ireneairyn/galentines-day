<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPage from '@/components/LoginPage.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    LoginPage
  }
})
</script>
