<template>
  <div>
    <div v-if="!isLoading" class="product">
      <div class="images">
        <div v-if="!activePic" class="profile">
          <div class="activeImage">
            <img :src="product.images[0]" class="card-img-top" alt="" />
          </div>
        </div>
        <div v-else>
          <div class="activeImage">
            <img :src="activePic" class="card-img-top" alt="" />
          </div>
        </div>
        <div class="otherImages">
          <div v-for="(image, index) in product.images" :key="index">
            <img :src="image" class="image" @click="changeActivePic(index)" />
          </div>
        </div>
      </div>
      <div class="info">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <h2>{{ product.price }} EUR</h2>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useProducts from "../composables/useProducts";

export default defineComponent({
  name: "DetailView",
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    //Accedemos a los getters i actions del composable de Products que necesitamos para esta vista
    const { product, fetchProductById, isLoading } = useProducts();
    fetchProductById(props.id);

    let activePic = ref();
    const changeActivePic = (index: number) => {
      activePic.value = product.value.images[index];
    };

    return {
      product,
      isLoading,
      activePic,
      changeActivePic,
    };
  },
});
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: auto;
}

.images {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.activeImage {
  width: 100%;
}

.activeImage img {
  max-width: 100%;
}

.otherImages {
  display: flex;
  width: 100%;
  justify-content: center;
}

.image {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
}

@media (min-width: 600px) {
  .product {
    flex-direction: row;
  }
}
</style>