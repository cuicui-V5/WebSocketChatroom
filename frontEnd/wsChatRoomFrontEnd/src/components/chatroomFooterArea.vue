<template>
    <div class="footer">
        <input
            class="inputArea"
            type="text"
            placeholder="请输入消息"
            v-model="content"
            v-on:keydown.enter="sendMsg"
        />

        <button
            class="send"
            @click="sendMsg"
        >
            <input
                class="name"
                type="text"
                @click.stop
                v-model="name"
            />
            发送
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { useMsgStore } from "../stores/msg";
    interface msgObj {
        name: string;
        content: string;
        time: string;
    }
    let content = ref("");
    const name = ref("游客");
    const store = useMsgStore();

    function sendMsg(): void {
        if (content.value) {
            const msgObj: msgObj = {
                name: name.value,
                content: content.value,
                time: Date(),
            };
            store.wsHandler(msgObj);
            content.value = "";
        } else {
            alert("请输入内容");
        }
    }
</script>

<style scoped lang="less">
    .footer {
        height: 20%;
        margin: 5px;
        min-height: 100px;
        border: 2px solid black;
        display: flex;
        .inputArea {
            flex: 8;
        }
        .send {
            position: relative;
            flex: 2;
        }
        .name {
            width: 90%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
