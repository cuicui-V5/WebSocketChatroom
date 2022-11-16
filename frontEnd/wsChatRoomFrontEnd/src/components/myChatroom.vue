<template>
    <div class="main">
        {{ store.readyStatus }}
        <template v-if="store.readyStatus == '已连接websocket服务器'">
            在线用户
            {{ store.onlineUser }}
            消息总数
            {{ store.msgCount }}
        </template>
        <button
            v-if="store.readyStatus != '已连接websocket服务器'"
            @click="store.reConnect"
        >
            重新连接
        </button>
        <chatroomShowAreaVue />
        <chatroomFooterAreaVue />
    </div>
</template>
<script setup lang="ts">
    import chatroomShowAreaVue from "./chatroomShowArea.vue";
    import chatroomFooterAreaVue from "./chatroomFooterArea.vue";
    import { useMsgStore } from "../stores/msg";
    const store = useMsgStore();
</script>
<style lang="less">
    body {
        width: 100%;
    }
    html {
        width: 100%;
    }
    .main {
        margin: 0 auto;

        width: 80%;
        border: 2px black solid;
    }
</style>
