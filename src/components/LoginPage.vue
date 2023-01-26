<template>
    <div>Find the perfect present for Galentine's Day!</div>
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <br>
        <button @click="submit">Submit</button>
    </form>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() { },
})
</script>
<style scoped>

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
    border: 1px solid #ccc;
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
.logo {
    padding: 100px;
}

@media (min-width: 400px) {
    .wrapper {
        max-width: 600px;
    }
}
</style>
