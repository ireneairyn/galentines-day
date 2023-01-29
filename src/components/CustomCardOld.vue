<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <slot name="header"></slot>
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from "@vue/runtime-core";

    export default defineComponent({
        name: 'CustomCard'
    });
</script>

<style scoped>
    .card{
        width: 30rem;
        min-height:200px;
        border:1px solid rgb(255, 230, 230);
        border-radius: 1rem;
        box-shadow: 0px 10px 10px rgba(65, 14, 14, 0.2);
        
    }
</style>