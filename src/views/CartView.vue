<template>
  <div class="cart">
    <CartPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartPage from "@/components/CartPage.vue"; // @ is an alias to /src

export default defineComponent({
  name: "CartView",
  components: {
    CartPage,
  },
});
</script>
