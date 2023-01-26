<template>
  <nav>
    <router-link to="/landing">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart">Cart</router-link>
  </nav>

  <div :style="{ 'background-image': '/src/assets/bestgals.png' }"></div>
  <router-view />
</template>
