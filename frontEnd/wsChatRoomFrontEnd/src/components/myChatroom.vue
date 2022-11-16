<template>
    <div class="main">
        <!-- 显示提示文字 -->
        {{ store.readyStatus }}
        <!-- 用户数统计的文字 -->
        <template v-if="store.readyStatus == '已连接websocket服务器'">
            在线用户
            {{ store.onlineUser }}
            消息总数
            {{ store.msgCount }}
        </template>

        <!-- 手动重连按钮, 只有在状态不对时才会出现 -->
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
    // 引入store
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
