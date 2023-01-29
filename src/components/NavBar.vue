<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/extra">Extra</router-link> |
    <button @click="logout">Logout</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuthUser from "../composables/useAuthUser";

interface NavbarProps {
  title: string;
  greeting: string;
}

export default defineComponent({
  name: "NavBar",
  setup() {
    const { deleteToken, checkToken } = useAuthUser();
    const email = ref("");
    const password = ref("");
    const logout = () => {
      console.log("logout");
      deleteToken();
    };
    checkToken();

    return {
      email,
      password,
      logout,
    };
  },
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

