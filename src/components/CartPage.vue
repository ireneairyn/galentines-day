<template>
  <div><h1>Goodies for your gals</h1></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../models/product'

export default defineComponent({
    props: {
        product:{
            type: Object as PropType<Product>,
            required: true,
        }
    },
})
</script>

<style scoped>
h1 {
  color: #de2a42;
  font-family: "Dr Sugiyama", cursive;
  font-size: 60px;
  font-weight: normal;
  margin: 0 0 20px 0;
}

p {
  font-family: "Permanent Marker", cursive;
  font-weight: normal;
  color: #de2a42;
}

@media (min-width: 600px) {
  p {
    font-size: 27px;
  }
  h1 {
    font-size: 100px;
    word-spacing: 20px;
  }
}
</style>
