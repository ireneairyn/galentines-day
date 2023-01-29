<template>
  <div>
    <div v-if="authUser" class="profile">
      <h2 class="card-title">{{ authUser.name }}</h2>
      <p class="card-text">{{ authUser.email }}</p>
      <p class="card-text">{{ authUser.role }}</p>
      <img :src="authUser.avatar" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAuthUser from "../composables/useAuthUser";

export default defineComponent({
  name: "ProfileView",
  setup() {
    const { token, authUser, isLoading, fetchAuthUser } = useAuthUser();
    fetchAuthUser(token.value);

    return {
      authUser,
      isLoading,
      fetchAuthUser,
    };
  },
});
</script>

<style scoped>
.profileView {
  margin-top: -40px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
</style>

