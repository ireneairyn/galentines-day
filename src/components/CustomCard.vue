<template>
  <div class="product">
    <div
      class="background"
      :style="{ backgroundImage: `url(${this.img})` }"
    ></div>
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    img: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.product {
  position: relative;
  padding: 10px;
  height: 200px;
  width: 200px;
  text-align: left;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.8) saturate(0.3);
  background-repeat: no-repeat;
  background-position: center center;
}

.product:hover .background {
  filter: brightness(1);
}
</style>
