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
    // 消息对象接口
    interface msgObj {
        name: string;
        content: string;
        time: string;
    }
    // 接收表单数据的变量
    let content = ref("");
    const name = ref("游客");

    const store = useMsgStore();

    function sendMsg(): void {
        // 必须输入了内容且用户名不为空
        if (content.value && name.value) {
            // 组装要发送的对象
            const msgObj: msgObj = {
                name: name.value,
                content: content.value,
                time: Date(),
            };
            store.wsHandler(msgObj);
            // 清空输入框
            content.value = "";
        } else {
            alert("内容或用户名不能为空");
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
