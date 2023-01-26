<template>
<div>
          <h1>Presents</h1>
  <p>It's a SPECIAL day!</p>
  <p>Get something for your GALS</p>
  <p>and don't forget to</p>
  <p>TREAT YOURSELF too!</p>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {},
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
