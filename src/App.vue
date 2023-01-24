<template>
  <nav>
    <router-link to="/landing">Home</router-link> |
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart">Cart</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(113, 104, 104);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #de2a42;
}

nav a.router-link-exact-active {
  color: #de2a42;
}
</style>
