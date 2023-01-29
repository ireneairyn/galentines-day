<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/profile">Profile</router-link> |
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

<style scoped>
button {
  background-color: #de2a42;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>

