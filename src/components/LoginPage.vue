<template>
  <div>
    <h1>Galentine's Day</h1>
  </div>
  <img class="logo" alt="heart logo" src="../assets/logo.png" />

  <div class="tagline">
    Find the perfect present for <span>Galentine's Day</span>!
  </div>
  <form @submit="getToken">
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />
    <br />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required />
    <br />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAuthUser from "../composables/useAuthUser";
export default defineComponent({
  setup() {
    const { fetchToken } = useAuthUser();
    const email = ref("");
    const password = ref("");
    const getToken = () => {
      console.log("getToken", { email: email.value, password: password.value });
      fetchToken({ email: email.value, password: password.value });
    };

    return {
      email,
      password,
      getToken,
    };
  },
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

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  border: 2px solid #dc5f6f;
  background-color: #fee5f5;
  border-radius: 20px;
  padding: 20px;
}

label {
  margin-bottom: 8px;
}

input {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #de2a42;
  border-radius: 4px;
  margin-bottom: 16px;
}

button {
  background-color: #de2a42;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.tagline {
  margin: 20px 0 40px 0;
  font-size: 25px;
  font-family: "Marck Script", cursive;
  font-weight: normal;
  color: #de2a42;
  text-align: center;
}

.logo {
  margin: 20px;
}

span {
  font-weight: bold;
}

@media (min-width: 600px) {
  p {
    font-size: 27px;
  }
  h1 {
    font-size: 100px;
    word-spacing: 20px;
  }
  form {
    width: 500px;
    margin: auto;
  }
}
</style>
