<template>
  <div class="products">
    <ProductPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductPage from '@/components/ProductPage.vue' // @ is an alias to /src

export default defineComponent({
  name: 'ProductView',
  components: {
    ProductPage
  }
})
</script>
