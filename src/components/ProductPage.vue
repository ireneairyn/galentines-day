<template>
  <div>
    <h1>Presents</h1>
    <p>It's a special day!</p>
    <p>Get something for your <span>gals</span>, and don't forget to</p>

    <p><span>treat yourself</span> too!</p>
  </div>
  <div class="searchbar">
    <input
      type="text"
      v-model="searchTerm"
      @input="search"
      placeholder="Search for products"
    />
  </div>
  <div class="products">
    <div v-for="(product, index) in products" :key="index">
      <div
        class="product"
        :style="{ backgroundImage: `url(${product.images[0]})` }"
      >
        <div class="title">{{ product.title }}</div>
        <div class="price">{{ product.price }} EUR</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => (this.products = response.data));
  },
  data() {
    return {
      products: [],
      searchTerm: '',
    };
  },
  // methods: {
  //   changeRender() {
  //     this.render = !this.render;
  //   },
  // },
methods: {
    search() {
        if (this.searchTerm.length >= 3) {
            // Search logic here
        }
    },
}
});
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
  font-size: 25px;
  font-family: "Marck Script", cursive;
  font-weight: normal;
  color: #de2a42;
  margin: 10px;
}

span {
  font-weight: bold;
}

.products {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}

.product {
  position: relative;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
  width: 200px;
  text-align: left;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.description {
  font-size: 16px;
}

.price {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
}

.searchbar input {
width: 350px;
  margin: 10px;
  border: 2px solid #dc5f6f;
  border-radius: 20px;
  padding: 10px;
}
@media (min-width: 600px) {
  p {
    font-size: 27px;
  }
  h1 {
    font-size: 100px;
    word-spacing: 20px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .searchbar input {
width: 700px;
  }
}
</style>
