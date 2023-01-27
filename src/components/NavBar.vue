<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/landing">Extra</router-link> |
    <router-link to="/">Logout</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavbarProps {
  title: string;
  greeting: string;
}

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true,
      default: "Platzi Store",
    },
    greeting: {
      type: String,
      default: "Welcome",
    },
  },
});
</script>

