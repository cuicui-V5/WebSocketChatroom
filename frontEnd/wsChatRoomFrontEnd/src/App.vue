<template>
    <div class="app">
        <h1 class="title">{{ msg }}</h1>
        <myChatroom></myChatroom>
    </div>
</template>
<script setup lang="ts">
    import myChatroom from "./components/myChatroom.vue";
    import { ref } from "vue";

    const msg = ref("welcome to my chatroom");
</script>
<style lang="less" scoped>
    .app {
        margin: 0 auto;
        width: 80%;
        text-align: center;
        .title {
            font-weight: bold;
        }
    }
</style>
