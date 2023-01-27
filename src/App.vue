<template>
  <div :style="{ 'background-image': '/src/assets/bestgals.png' }"></div>
  <div>
    <NavBar v-if="notLogin"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
  },
  computed: {
    notLogin() {
      return this.$route.path !== "/"
    },
  },
  /*
  setup() {
    let navColor = ref<string>('');
    let greeting = "Welcome"
  },*/
});
</script>