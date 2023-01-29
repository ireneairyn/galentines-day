<template>
  <div class="products">
    <ProductsPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsPage from '@/components/ProductsPage.vue' // @ is an alias to /src

export default defineComponent({
  name: 'ProductView',
  components: {
    ProductsPage
  }
})
</script>
